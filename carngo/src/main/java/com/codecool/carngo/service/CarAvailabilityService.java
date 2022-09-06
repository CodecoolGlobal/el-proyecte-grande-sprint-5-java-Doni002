package com.codecool.carngo.service;

import com.codecool.carngo.model.CarAvailabilityModel;
import com.codecool.carngo.model.VehicleModel;
import com.codecool.carngo.repository.CarAvailabilityRepository;
import com.codecool.carngo.repository.VehiclesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class CarAvailabilityService {

    private final CarAvailabilityRepository carAvailabilityRepository;
    private final VehiclesRepository vehiclesRepository;

    @Autowired
    public CarAvailabilityService(CarAvailabilityRepository carAvailability, VehiclesRepository vehiclesRepository) {
        this.carAvailabilityRepository = carAvailability;
        this.vehiclesRepository = vehiclesRepository;
    }

    public List<CarAvailabilityModel> getAllCarAvailability(){
        return carAvailabilityRepository.findAll();
    }

    public List<CarAvailabilityModel> getCarAvailabilityByCarId(Long id){
        return carAvailabilityRepository.getCarAvailabilityByCarId(id);
    }

    public int addCarAvailability(Map<String, String> body){
        Optional<VehicleModel> vehicle = vehiclesRepository.findById(Long.valueOf(body.get("vehicle_id")));
        if (vehicle.isEmpty()) {
            return 404;
        }
        LocalDate from = LocalDate.parse(body.get("from"));
        LocalDate to = LocalDate.parse(body.get("to"));
        CarAvailabilityModel newCarAvailabilityModel = new CarAvailabilityModel(vehicle.get(), from, to);
        carAvailabilityRepository.save(newCarAvailabilityModel);
        return 200;
    }

    public int updateCarAvailability(Map<String, String> body){
        Optional<CarAvailabilityModel> carAvailabilityToFind = carAvailabilityRepository.
                findById(Long.valueOf(body.get("id")));
        if(carAvailabilityToFind.isEmpty()) {
            return 404;
        }
        CarAvailabilityModel carAvailability = carAvailabilityToFind.get();
        carAvailability.setFromDate(LocalDate.parse(body.get("from")));
        carAvailability.setToDate(LocalDate.parse(body.get("to")));
        carAvailabilityRepository.save(carAvailability);
        return 200;
    }

    public int deleteCarAvailability(Map<String, String> body){
        Optional<CarAvailabilityModel> carAvailability = carAvailabilityRepository.
                findById(Long.valueOf(body.get("id")));
        if(carAvailability.isEmpty()) {
            return 404;
        }
        carAvailabilityRepository.deleteById(Long.valueOf(body.get("id")));
        return 200;
    }

}
