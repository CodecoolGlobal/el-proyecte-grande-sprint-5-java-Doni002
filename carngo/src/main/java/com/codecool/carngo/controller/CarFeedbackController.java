package com.codecool.carngo.controller;

import com.codecool.carngo.model.CarFeedbackModel;
import com.codecool.carngo.service.CarFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

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
}
