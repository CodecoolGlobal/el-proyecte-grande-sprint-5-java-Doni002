package com.codecool.carngo.controller;

import com.codecool.carngo.model.UserFeedbackModel;
import com.codecool.carngo.service.UserFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

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
}
