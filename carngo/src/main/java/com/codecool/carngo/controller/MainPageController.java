package com.codecool.carngo.controller;

import com.codecool.carngo.model.FeedbackModel;
import com.codecool.carngo.service.MainPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

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

    @PostMapping
    public ResponseEntity<List<FeedbackModel>> getAllFeedbacks(){
        return new ResponseEntity<>(mainPageService.getAllFeedbacks(), HttpStatus.ACCEPTED);
    }

}
