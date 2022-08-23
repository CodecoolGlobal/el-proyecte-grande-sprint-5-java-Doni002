package com.codecool.carngo.controller;


import com.codecool.carngo.model.VehicleModel;
import com.codecool.carngo.service.VehiclesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping("/api/vehicles")
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
}
