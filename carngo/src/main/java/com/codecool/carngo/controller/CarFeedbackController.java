package com.codecool.carngo.controller;

import com.codecool.carngo.model.CarFeedbackModel;
import com.codecool.carngo.model.UserFeedbackModel;
import com.codecool.carngo.service.CarFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("/api/car-feedbacks")
@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class CarFeedbackController {

    private final CarFeedbackService carFeedbackService;

    @Autowired
    public CarFeedbackController(CarFeedbackService carFeedbackService) {
        this.carFeedbackService = carFeedbackService;
    }

    @GetMapping
    public ResponseEntity<List<CarFeedbackModel>> getAllCarFeedback(){
        return new ResponseEntity<>(carFeedbackService.getAllCarFeedback(), HttpStatus.OK);
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<List<CarFeedbackModel>> getCarFeedbacksForCar(@PathVariable("id") Long id){
        return new ResponseEntity<>(carFeedbackService.getCarFeedbacksForCar(id), HttpStatus.OK);
    }

    //requirements: starRating, message, userId, date, vehicleId
    @PostMapping
    public ResponseEntity<String> addCarFeedback(@RequestBody Map<String, String> body) {
        int response = carFeedbackService.addCarFeedback(body);
        if(response == 200) {
            return new ResponseEntity<>("Car feedback added successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("Some id not found!", HttpStatus.NOT_FOUND);
    }

}
