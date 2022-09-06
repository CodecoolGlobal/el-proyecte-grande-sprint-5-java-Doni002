package com.codecool.carngo.service;

import com.codecool.carngo.model.CarReservationModel;
import com.codecool.carngo.model.UserModel;
import com.codecool.carngo.model.VehicleModel;
import com.codecool.carngo.repository.CarReservationRepository;
import com.codecool.carngo.repository.UserRepository;
import com.codecool.carngo.repository.VehiclesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class CarReservationService {

    private final CarReservationRepository carReservationRepository;
    private final VehiclesRepository vehiclesRepository;
    private final UserRepository userRepository;

    @Autowired
    public CarReservationService(CarReservationRepository carReservationRepository, VehiclesRepository vehiclesRepository, UserRepository userRepository) {
        this.carReservationRepository = carReservationRepository;
        this.vehiclesRepository = vehiclesRepository;
        this.userRepository = userRepository;
    }

    public List<CarReservationModel> getAllCarReservation(){
        return carReservationRepository.findAll();
    }

    public Optional<CarReservationModel> getCarReservationById(Long id){
        Optional<CarReservationModel> carReservation = carReservationRepository.findById(id);
        if (carReservation.isEmpty()){
            return Optional.empty();
        }
        return carReservation;
    }

    public List<CarReservationModel> getCarReservationsByCarId(Long id){
        List<CarReservationModel> carReservation = carReservationRepository.findByCarId(id);
        return carReservation;
    }

    public int addCarReservation(Map<String, String> body) {
        Optional<UserModel> user = userRepository.findById(Long.valueOf(body.get("userId")));
        Optional<VehicleModel> vehicle = vehiclesRepository.findById(Long.valueOf(body.get("carId")));
        if(user.isEmpty() || vehicle.isEmpty()){
            return 404;
        }
        LocalDate from = LocalDate.parse(body.get("from"));
        LocalDate to = LocalDate.parse(body.get("to"));
        carReservationRepository.save(new CarReservationModel(from, to, user.get(), vehicle.get()));
        return 200;
    }

    public int editCarReservation(Map<String, String> body) {
        Optional<CarReservationModel> carReservationToFind = carReservationRepository.findById(Long.valueOf(body.get("id")));
        if(carReservationToFind.isEmpty()){
            return 404;
        }
        CarReservationModel carReservation = carReservationToFind.get();
        carReservation.setFromDate(LocalDate.parse(body.get("from")));
        carReservation.setToDate(LocalDate.parse(body.get("to")));
        carReservationRepository.save(carReservation);
        return 200;
    }

    public int deleteCarReservation(Long id) {
        Optional<CarReservationModel> carReservationToFind = carReservationRepository.findById(id);
        if(carReservationToFind.isEmpty()){
            return 404;
        }
        carReservationRepository.deleteById(id);
        return 200;
    }
}

