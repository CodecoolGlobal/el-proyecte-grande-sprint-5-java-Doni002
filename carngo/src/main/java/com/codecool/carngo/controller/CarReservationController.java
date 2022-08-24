package com.codecool.carngo.controller;

import com.codecool.carngo.model.CarReservationModel;
import com.codecool.carngo.service.CarReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping("/api/car-reservations")
@Controller
public class CarReservationController {

    private final CarReservationService carReservationService;

    @Autowired
    public CarReservationController(CarReservationService carReservationService) {
        this.carReservationService = carReservationService;
    }

    @GetMapping
    public ResponseEntity<List<CarReservationModel>> getAllCarReservations(){
        return new ResponseEntity<>(carReservationService.getAllCarReservation(), HttpStatus.OK);
    }
}
