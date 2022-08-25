package com.codecool.carngo.controller;


import com.codecool.carngo.model.VehicleModel;
import com.codecool.carngo.service.VehiclesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/vehicles")
@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class VehiclesController {

    private final VehiclesService vehiclesPageService;

    @Autowired
    public VehiclesController(VehiclesService vehiclesPageService) {
        this.vehiclesPageService = vehiclesPageService;
    }

    @GetMapping
    public ResponseEntity<List<VehicleModel>> getAllVehicles(){
        return new ResponseEntity<>(vehiclesPageService.getAllVehicles(), HttpStatus.OK);
    }

    @GetMapping(value="{id}")
    public ResponseEntity<Optional<VehicleModel>> getVehicleById(@PathVariable("id") Long id){
        System.out.println(id);
        Optional<VehicleModel> vehicle = vehiclesPageService.getVehicleById(id);
        if(vehicle.isPresent()){
            return new ResponseEntity<>(vehicle, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @DeleteMapping(value = "{id}")
    public ResponseEntity<String> deleteVehicleById(@PathVariable("id") Long id){
        int response = vehiclesPageService.deleteVehicleById(id);
        if(response == 200){
            return new ResponseEntity<>("delete successful", HttpStatus.OK);
        }
        return new ResponseEntity<>("vehicle not found with id: " + id, HttpStatus.NOT_FOUND);

    }

}
