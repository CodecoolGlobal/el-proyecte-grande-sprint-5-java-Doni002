package com.codecool.carngo.controller;


import com.codecool.carngo.model.VehiclesModel;
import com.codecool.carngo.service.VehiclesPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping("/vehicles")
@Controller
public class VehiclesPageController {

    private final VehiclesPageService vehiclesPageService;

    @Autowired
    public VehiclesPageController(VehiclesPageService vehiclesPageService) {
        this.vehiclesPageService = vehiclesPageService;
    }

    @GetMapping
    public String loadVehiclesPage(){
        return "vehicles";
    }

    @PostMapping
    public ResponseEntity<List<VehiclesModel>> getAllVehicles(){
        return new ResponseEntity<>(vehiclesPageService.getAllVehicles(), HttpStatus.ACCEPTED);
    }
}
