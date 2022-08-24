package com.codecool.carngo.service;

import com.codecool.carngo.model.VehicleModel;
import com.codecool.carngo.repository.CarAvailabilityRepository;
import com.codecool.carngo.repository.CarFeedbackRepository;
import com.codecool.carngo.repository.CarReservationRepository;
import com.codecool.carngo.repository.VehiclesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehiclesService {

    private final VehiclesRepository vehiclesRepository;
    private final CarReservationRepository carReservationRepository;
    private final CarFeedbackRepository carFeedbackRepository;
    private final CarAvailabilityRepository carAvailability;

    @Autowired
    public VehiclesService(VehiclesRepository vehiclesRepository, CarReservationRepository carReservationRepository, CarFeedbackRepository carFeedbackRepository, CarAvailabilityRepository carAvailability) {
        this.vehiclesRepository = vehiclesRepository;
        this.carReservationRepository = carReservationRepository;
        this.carFeedbackRepository = carFeedbackRepository;
        this.carAvailability = carAvailability;
    }

    public List<VehicleModel> getAllVehicles(){
        return vehiclesRepository.findAll();
    }

    public Optional<VehicleModel> getVehicleById(Long id){
        return vehiclesRepository.findById(id);
    }

    public int deleteVehicleById(Long id){
        if(vehiclesRepository.findById(id).isPresent()){
            carFeedbackRepository.deleteCarFeedbackByCarId(id);
            carReservationRepository.deleteReservationByVehicleId(id);
            carAvailability.deleteCarFeedbackByCarId(id);
            vehiclesRepository.deleteById(id);
            return 200;
        }
        return 404;
    }

 /*   public int editVehicle(){
        vehiclesRepository.
    }*/

}
