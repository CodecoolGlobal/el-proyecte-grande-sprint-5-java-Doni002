package com.codecool.carngo.controller;

import com.codecool.carngo.service.NewsLetterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@RequestMapping("/api/newsletter")
@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class NewsLetterController {

    private final NewsLetterService newsLetterService;

    @Autowired
    public NewsLetterController(NewsLetterService newsLetterService) {
        this.newsLetterService = newsLetterService;
    }

    @PostMapping
    public ResponseEntity<String> addEmailToNewsletter(@RequestBody Map<String, String> body){
        int response = newsLetterService.addEmailToNewsLetter(body.get("email"));
        if(response == 200){
            return new ResponseEntity<>("Subscribed successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("Email already subscribed!", HttpStatus.NOT_ACCEPTABLE);
    }
}
