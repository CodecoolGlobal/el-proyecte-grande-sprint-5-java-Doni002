package com.codecool.carngo.service;

import com.codecool.carngo.model.VehicleModel;
import com.codecool.carngo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class VehiclesService {

    private final VehiclesRepository vehiclesRepository;
    private final CarReservationRepository carReservationRepository;
    private final CarFeedbackRepository carFeedbackRepository;
    private final CarAvailabilityRepository carAvailability;
    private final HostRepository hostRepository;

    @Autowired
    public VehiclesService(VehiclesRepository vehiclesRepository, CarReservationRepository carReservationRepository,
                           CarFeedbackRepository carFeedbackRepository, CarAvailabilityRepository carAvailability, HostRepository hostRepository) {
        this.vehiclesRepository = vehiclesRepository;
        this.carReservationRepository = carReservationRepository;
        this.carFeedbackRepository = carFeedbackRepository;
        this.carAvailability = carAvailability;
        this.hostRepository = hostRepository;
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

    public void adddVehicle(Map<String, String> body){
        VehicleModel newVehicle = new VehicleModel(body.get("description"), body.get("carType"), body.get("color"),
                body.get("brand"), body.get("model"), body.get("fuel"), Integer.parseInt(body.get("vintage")),
                Integer.parseInt(body.get("numOfSeats")), Integer.parseInt(body.get("trunkCapacity")),
                Integer.parseInt(body.get("pricePerDay")), 0, hostRepository.getReferenceById(Long.parseLong(body.get("ownerId"))));
        vehiclesRepository.save(newVehicle);
    }

}
