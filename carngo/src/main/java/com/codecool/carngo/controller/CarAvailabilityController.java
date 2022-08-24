package com.codecool.carngo.controller;

import com.codecool.carngo.model.CarAvailabilityModel;
import com.codecool.carngo.service.CarAvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping("/api/car-availability")
@Controller
public class CarAvailabilityController {

    private final CarAvailabilityService carAvailabilityService;

    @Autowired
    public CarAvailabilityController(CarAvailabilityService carAvailabilityService) {
        this.carAvailabilityService = carAvailabilityService;
    }

    @GetMapping
    public ResponseEntity<List<CarAvailabilityModel>> getAllCarAvailability(){
        return new ResponseEntity<>(carAvailabilityService.getAllCarAvailability(), HttpStatus.OK);
    }
}
