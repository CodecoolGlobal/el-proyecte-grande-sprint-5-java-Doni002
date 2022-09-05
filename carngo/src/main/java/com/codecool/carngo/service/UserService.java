package com.codecool.carngo.service;

import com.codecool.carngo.model.UserModel;
import com.codecool.carngo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    public UserService(UserRepository userRepository, HostRepository hostRepository, VehiclesRepository vehiclesRepository, CarAvailabilityRepository carAvailability, CarReservationRepository carReservationRepository, CarFeedbackRepository carFeedbackRepository, UserFeedbackRepository userFeedbackRepository) {
        this.userRepository = userRepository;
        this.hostRepository = hostRepository;
        this.vehiclesRepository = vehiclesRepository;
        this.carAvailabilityRepository = carAvailability;
        this.carReservationRepository = carReservationRepository;
        this.carFeedbackRepository = carFeedbackRepository;
        this.userFeedbackRepository = userFeedbackRepository;
    }

    public List<UserModel> getAllUser(){
       return userRepository.findAll();
    }

    public Optional<UserModel> getUserById(Long id){
        return userRepository.findById(id);
    }

    public void addUser(Map<String, String> body){
        UserModel newUser = new UserModel(body.get("name"), body.get("email"), body.get("password"));
        userRepository.save(newUser);
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

}
