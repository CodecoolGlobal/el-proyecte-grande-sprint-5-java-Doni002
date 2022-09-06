package com.codecool.carngo.controller;

import com.codecool.carngo.model.CarAvailabilityModel;
import com.codecool.carngo.service.CarAvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("/api/car-availability")
@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class CarAvailabilityController {

    private final CarAvailabilityService carAvailabilityService;

    @Autowired
    public CarAvailabilityController(CarAvailabilityService carAvailabilityService) {
        this.carAvailabilityService = carAvailabilityService;
    }

    @GetMapping
    public ResponseEntity<List<CarAvailabilityModel>> getAllCarAvailability() {
        return new ResponseEntity<>(carAvailabilityService.getAllCarAvailability(), HttpStatus.OK);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<List<CarAvailabilityModel>> getCarAvailabilityByCarId(@PathVariable Long id) {
        return new ResponseEntity<>(carAvailabilityService.getCarAvailabilityByCarId(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> addCarAvailability(@RequestBody Map<String, String> body) {
        int response = carAvailabilityService.addCarAvailability(body);
        if(response == 200) {
            return new ResponseEntity<>("Car availability added successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Car availability not found with car id: " + body.get("vehicle_id"),
                HttpStatus.NOT_FOUND);
    }

    @PutMapping()
    public ResponseEntity<String> updateCarAvailability(@RequestBody Map<String, String> body) {
        int response = carAvailabilityService.updateCarAvailability(body);
        if(response == 200) {
            return new ResponseEntity<>("Car availability updated successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Car availability not found with id: " + body.get("id"),
                HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<String> deleteCarAvailability(@PathVariable Long id){
        int response = carAvailabilityService.deleteCarAvailability(id);
        if(response == 200) {
            return new ResponseEntity<>("Car availability deleted successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Car availability not found with id: " + id,
                HttpStatus.NOT_FOUND);
    }

}
