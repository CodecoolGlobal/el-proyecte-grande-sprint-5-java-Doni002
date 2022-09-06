package com.codecool.carngo.controller;

import com.codecool.carngo.model.CarReservationModel;
import com.codecool.carngo.service.CarReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RequestMapping("/api/car-reservations")
@CrossOrigin(origins = "http://localhost:3000")
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

    @GetMapping(value = "{id}")
    public ResponseEntity<CarReservationModel> getCarReservationById(@PathVariable Long id){
        Optional<CarReservationModel> carReservation = carReservationService.getCarReservationById(id);
        return carReservation.map(carReservationModel -> new ResponseEntity<>(carReservationModel,
                HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value = "car/{id}")
    public ResponseEntity<List<CarReservationModel>> getCarReservationsByCarId(@PathVariable Long id) {
        List<CarReservationModel> carReservations = carReservationService.getCarReservationsByCarId(id);
        if(carReservations.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(carReservations, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> addCarReservation(@RequestBody Map<String, String> body){
        int response = carReservationService.addCarReservation(body);
        if (response == 200) {
            return new ResponseEntity<>("Reservation added successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("Car id or User id not found!", HttpStatus.NOT_FOUND);
    }

    @PutMapping
    public ResponseEntity<String> editCarReservation(@RequestBody Map<String, String> body) {
        int response = carReservationService.editCarReservation(body);
        if (response == 200) {
            return new ResponseEntity<>("Reservation edited successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("Car reservation not found with id: " + body.get("id"), HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<String> deleteCarReservation(@PathVariable Long id) {
        int response = carReservationService.deleteCarReservation(id);
        if (response == 200) {
            return new ResponseEntity<>("Reservation deleted successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("Car reservation not found with id: " + id, HttpStatus.NOT_FOUND);
    }

}
