package com.codecool.carngo.service;

import com.codecool.carngo.model.UserModel;
import com.codecool.carngo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final HostRepository hostRepository;
    private final VehiclesRepository vehiclesRepository;
    private final CarAvailabilityRepository carAvailabilityRepository;
    private final CarReservationRepository carReservationRepository;
    private final CarFeedbackRepository carFeedbackRepository;
    private final UserFeedbackRepository userFeedbackRepository;
    private final PasswordEncoder passwordEncoder;


    @Autowired
    public UserService(UserRepository userRepository, HostRepository hostRepository, VehiclesRepository vehiclesRepository, CarAvailabilityRepository carAvailability, CarReservationRepository carReservationRepository, CarFeedbackRepository carFeedbackRepository, UserFeedbackRepository userFeedbackRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.hostRepository = hostRepository;
        this.vehiclesRepository = vehiclesRepository;
        this.carAvailabilityRepository = carAvailability;
        this.carReservationRepository = carReservationRepository;
        this.carFeedbackRepository = carFeedbackRepository;
        this.userFeedbackRepository = userFeedbackRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<UserModel> getAllUser(){
       return userRepository.findAll();
    }

    public Optional<UserModel> getUserById(Long id){
        return userRepository.findById(id);
    }

    public int addUser(Map<String, String> body){
        int usersByName = userRepository.getUsersByName(body.get("name")).size();
        int usersByEmail = userRepository.getUsersByEmail(body.get("email")).size();
        if(usersByName == 0 && usersByEmail == 0){
            UserModel newUser = new UserModel(body.get("name"), body.get("email"), encryptPassword(body.get("password")));
            userRepository.save(newUser);
            return 200;
        }
        return 406;

    }

    public int updateUserById(Map<String, String> body){
        Optional<UserModel> userToFind = userRepository.findById(Long.valueOf(body.get("id")));
        if(userToFind.isPresent()){
            UserModel user = userToFind.get();
            user.setName(body.get("name"));
            user.setEmail(body.get("email"));
            user.setPassword(body.get("password"));
            userRepository.save(user);
            return 200;
        }
        return 404;
    }

    public int deleteUserById(Long id){
        if(userRepository.findById(id).isPresent()){
            userFeedbackRepository.deleteUserFeedbackByUserId(id);
            userFeedbackRepository.deleteUserFeedbackByHostId(hostRepository.findHostByUserId(id).get(0).getId());
            carFeedbackRepository.deleteCarFeedbackByCarId(vehiclesRepository.
                    getVehicleByOwnerId(hostRepository.findHostByUserId(id).get(0).getId()).get(0).getId());
            carReservationRepository.deleteReservationByVehicleId(vehiclesRepository.
                    getVehicleByOwnerId(hostRepository.findHostByUserId(id).get(0).getId()).get(0).getId());
            carAvailabilityRepository.deleteCarAvailabilityByCarId(vehiclesRepository.
                    getVehicleByOwnerId(hostRepository.findHostByUserId(id).get(0).getId()).get(0).getId());
            vehiclesRepository.deleteVehicleByOwnerId(hostRepository.findHostByUserId(id).get(0).getId());
            hostRepository.deleteHostByUserId(id);
            userRepository.deleteById(id);
            return 200;
        }
        return 404;
    }

    private String encryptPassword(String password){
        return passwordEncoder.encode(password);
    }

    public UserModel validateLogin(Map<String, String> body){
        List<UserModel> optionalUser = userRepository.getUsersByName(body.get("name"));
        UserModel user;
        if(optionalUser.size() > 0) {
            user = optionalUser.get(0);
            if(passwordEncoder.matches(body.get("password"), user.getPassword())){
                user.setPassword(null); //not sending the password to frontend
                return user;
            }
        }
        return null;
    }

}
