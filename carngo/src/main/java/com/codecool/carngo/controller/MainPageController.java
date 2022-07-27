package com.codecool.carngo.controller;

import com.codecool.carngo.model.FeedbackModel;
import com.codecool.carngo.service.MainPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RequestMapping("/")
@Controller
public class MainPageController {

    private final MainPageService mainPageService;

    @Autowired
    MainPageController(MainPageService mainPageService){
        this.mainPageService = mainPageService;
    }

    @GetMapping
    public String loadMainPage(){
        return "index";
    }

    @GetMapping(value="/feedbacks")
    public ResponseEntity<List<FeedbackModel>> getAllFeedbacks(){
        return new ResponseEntity<>(mainPageService.getAllFeedbacks(), HttpStatus.OK);
    }

    @PostMapping(value="/feedbacks")
    public ResponseEntity<Object> addFeedback(@RequestBody Map<String, String> body){
        String author = body.get("author");
        String message = body.get("message");
        double rating = Double.parseDouble(body.get("rating"));
        mainPageService.addFeedback(new FeedbackModel(1,author,message,rating, LocalDate.now()));
        return new ResponseEntity<>("Feedback is added successfully", HttpStatus.OK);
    }
    @PutMapping(value = "/feedbacks/{id}")
    public ResponseEntity<Object> updateFeedback(@PathVariable("id") int id, @RequestBody() Map<String, String> body){
        String message = body.get("message");
        double rating = Double.parseDouble(body.get("rating"));
        mainPageService.updateFeedback(id, message, rating);
        return new ResponseEntity<>("Feedback is updated successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/feedbacks/{id}")
    public ResponseEntity<Object> deleteFeedback(@PathVariable("id") int id){
        mainPageService.deleteFeedback(id);
        return new ResponseEntity<>("Feedback is deleted successfully", HttpStatus.OK);
    }

}
