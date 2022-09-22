package com.codecool.carngo.service;

import com.codecool.carngo.model.RegisterModel;
import com.codecool.carngo.model.UserModel;
import com.codecool.carngo.model.VehicleModel;
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
    private final CarImagesRepository carImagesRepository;
    private final PasswordEncoder passwordEncoder;


    @Autowired
    public UserService(UserRepository userRepository, HostRepository hostRepository, VehiclesRepository vehiclesRepository, CarAvailabilityRepository carAvailability, CarReservationRepository carReservationRepository, CarFeedbackRepository carFeedbackRepository, UserFeedbackRepository userFeedbackRepository, CarImagesRepository carImagesRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.hostRepository = hostRepository;
        this.vehiclesRepository = vehiclesRepository;
        this.carAvailabilityRepository = carAvailability;
        this.carReservationRepository = carReservationRepository;
        this.carFeedbackRepository = carFeedbackRepository;
        this.userFeedbackRepository = userFeedbackRepository;
        this.carImagesRepository = carImagesRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<UserModel> getAllUser(){
       return userRepository.findAll();
    }

    public Optional<UserModel> getUserById(Long id){
        return userRepository.findById(id);
    }

    public int addUser(RegisterModel body){
        Optional<UserModel> userByUsername = userRepository.findUserByUsername(body.getUsername());
        Optional<UserModel> userByEmail = userRepository.findUserByEmail(body.getEmail());
        if(userByUsername.isEmpty() &&  userByEmail.isEmpty()){
            UserModel newUser = new UserModel(body.getName(), body.getUsername(), body.getEmail(), body.getPassword() );
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
            user.setUsername(body.get("username"));
            user.setEmail(body.get("email"));
            user.setPassword(body.get("password"));
            userRepository.save(user);
            return 200;
        }
        return 404;
    }

    public int deleteUserById(Long id){
        if(userRepository.findById(id).isPresent()){
            List<VehicleModel> vehicles = vehiclesRepository.getVehicleByOwnerId(hostRepository.findHostByUserId(id).get(0).getId());
            for (VehicleModel vehicle: vehicles) {
                carImagesRepository.deleteCarImageByCarId(vehicle.getId());
                carFeedbackRepository.deleteCarFeedbackByCarId(vehicle.getId());
                carReservationRepository.deleteReservationByVehicleId(vehicle.getId());
                carAvailabilityRepository.deleteCarAvailabilityByCarId(vehicle.getId());
            }
            userFeedbackRepository.deleteUserFeedbackByUserId(id);
            userFeedbackRepository.deleteUserFeedbackByHostId(hostRepository.findHostByUserId(id).get(0).getId());
            vehiclesRepository.deleteVehicleByOwnerId(hostRepository.findHostByUserId(id).get(0).getId());
            hostRepository.deleteHostByUserId(id);
            userRepository.deleteById(id);
            return 200;
        }
        return 404;
    }

/*    private String encryptPassword(String password){
        return passwordEncoder.encode(password);
    }*/

/*    public UserModel validateLogin(Map<String, String> body){
        List<UserModel> optionalUser = userRepository.findUserByName(body.get("name"));
        UserModel user;
        if(optionalUser.size() > 0) {
            user = optionalUser.get(0);
            if(passwordEncoder.matches(body.get("password"), user.getPassword())){
                user.setPassword(null); //not sending the password to frontend
                return user;
            }
        }
        return null;
    }*/

}
