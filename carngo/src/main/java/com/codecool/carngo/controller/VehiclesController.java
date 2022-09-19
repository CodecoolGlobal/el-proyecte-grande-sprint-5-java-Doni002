package com.codecool.carngo.controller;


import com.codecool.carngo.model.VehicleModel;
import com.codecool.carngo.service.VehiclesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
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
        Optional<VehicleModel> vehicle = vehiclesPageService.getVehicleById(id);
        if(vehicle.isPresent()){
            return new ResponseEntity<>(vehicle, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value="/user-id/{id}")
    public ResponseEntity<List<VehicleModel>> getVehiclesByUserId(@PathVariable("id") Long id){
        return new ResponseEntity<>(vehiclesPageService.getVehiclesByUserId(id), HttpStatus.OK);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<String> deleteVehicleById(@PathVariable("id") Long id){
        int response = vehiclesPageService.deleteVehicleById(id);
        if(response == 200){
            return new ResponseEntity<>("delete successful", HttpStatus.OK);
        }
        return new ResponseEntity<>("vehicle not found with id: " + id, HttpStatus.NOT_FOUND);
    }

    //requirements: description, carType, color, brand, model, fuel, vintage, numOfSeats, trunkCapacity, pricePerDay, ownerId
    @PostMapping
    public ResponseEntity<String> addVehicle(@RequestBody() Map<String, String> body){
        int response = vehiclesPageService.adddVehicle(body);
        if(response == 200) {
            return new ResponseEntity<>("Vehicle added successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("host not found with host id: " + body.get("ownerId"), HttpStatus.NOT_FOUND);
    }

    //requirements: id, description, carType, color, brand, model, fuel, vintage, numOfSeats, trunkCapacity, pricePerDay
    @PutMapping
    public ResponseEntity<String> editVehicle(@RequestBody() Map<String, String> body){
        int response = vehiclesPageService.editVehicle(body);
        if(response == 200){
            return new ResponseEntity<>("Vehicle edited successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("Vehicle not found with id: " + body.get("id"), HttpStatus.NOT_FOUND);
    }

}
