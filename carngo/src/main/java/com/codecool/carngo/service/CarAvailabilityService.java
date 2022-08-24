package com.codecool.carngo.service;

import com.codecool.carngo.model.CarAvailabilityModel;
import com.codecool.carngo.repository.CarAvailabilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarAvailabilityService {

    private final CarAvailabilityRepository carAvailability;

    @Autowired
    public CarAvailabilityService(CarAvailabilityRepository carAvailability) {
        this.carAvailability = carAvailability;
    }

    public List<CarAvailabilityModel> getAllCarAvailability(){
        return carAvailability.findAll();
    }
}
