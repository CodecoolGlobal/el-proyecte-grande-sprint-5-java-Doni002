package com.codecool.carngo.controller;

import com.codecool.carngo.model.ProfileModel;
import com.codecool.carngo.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Set;

@RequestMapping("/profiles")
@Controller
public class ProfileController {
    public ProfileService profileService;

    @Autowired
    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping()
    public String allProfiles(){
        return "profile";
    }
    @PostMapping
    public ResponseEntity<Set<ProfileModel>> getAllFeedbacks(){
        return new ResponseEntity<>(profileService.getAllProfiles(), HttpStatus.ACCEPTED);
    }
    @GetMapping("/{id}")
    public ResponseEntity<ProfileModel> getProfileById(@PathVariable int id) {
        return new ResponseEntity<>(profileService.getProfileById(id), HttpStatus.ACCEPTED);
    }
}
