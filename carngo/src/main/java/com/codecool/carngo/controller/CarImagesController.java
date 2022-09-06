package com.codecool.carngo.controller;

import com.codecool.carngo.model.CarImagesModel;
import com.codecool.carngo.service.CarImagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping("/api/car-images")
@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class CarImagesController {

    private final CarImagesService carImagesService;

    @Autowired
    public CarImagesController(CarImagesService carImagesService) {
        this.carImagesService = carImagesService;
    }

    @GetMapping
    public ResponseEntity<List<CarImagesModel>> getAllCarAvailability(){
        return new ResponseEntity<>(carImagesService.getAllCarImages(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<List<CarImagesModel>> getCarAvailabilityForCar(@PathVariable("id") Long id){
        return new ResponseEntity<>(carImagesService.getCarImagesForCar(id), HttpStatus.OK);
    }
}
