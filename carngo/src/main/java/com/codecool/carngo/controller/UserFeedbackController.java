package com.codecool.carngo.controller;

import com.codecool.carngo.model.UserFeedbackModel;
import com.codecool.carngo.service.UserFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("/api/user-feedback")
@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class UserFeedbackController {

    private final UserFeedbackService userFeedbackService;

    @Autowired
    public UserFeedbackController(UserFeedbackService userFeedbackService) {
        this.userFeedbackService = userFeedbackService;
    }

    @GetMapping
    public ResponseEntity<List<UserFeedbackModel>> getAllUserFeedback(){
        return new ResponseEntity<>(userFeedbackService.getAllUserFeedback(), HttpStatus.OK);
    }


    @GetMapping(value="/{id}")
    public ResponseEntity<List<UserFeedbackModel>> getUserFeedbacksForHost(@PathVariable("id") Long id){
        return new ResponseEntity<>(userFeedbackService.getUserFeedbacksForHost(id), HttpStatus.OK);
    }

    //requirements: starRating, message, userId, hostId, date
    @PostMapping
    public ResponseEntity<String> addUserFeedbackModel(@RequestBody Map<String, String> body) {
        int response = userFeedbackService.addUserFeedback(body);
        if(response == 200) {
            return new ResponseEntity<>("User feedback added successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("User or host not found!", HttpStatus.OK);
    }

    //requirements: id, starRating, message
    @PutMapping
    public ResponseEntity<String> editUserFeedbackModel(@RequestBody Map<String, String> body) {
        int response = userFeedbackService.editUserFeedback(body);
        if(response == 200) {
            return new ResponseEntity<>("User feedback edited successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("User feedback not found with id: " + body.get("id"), HttpStatus.OK);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<String> deleteUserFeedbackModel(@PathVariable Long id) {
        int response = userFeedbackService.deleteUserFeedback(id);
        if(response == 200) {
            return new ResponseEntity<>("User feedback deleted successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("User feedback not found with id: " + id, HttpStatus.OK);
    }
}
