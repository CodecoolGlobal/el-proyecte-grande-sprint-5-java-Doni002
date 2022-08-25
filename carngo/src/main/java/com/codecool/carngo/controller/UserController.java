package com.codecool.carngo.controller;

import com.codecool.carngo.model.UserModel;
import com.codecool.carngo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<UserModel>> getAllUser(){
        return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Optional<UserModel>> getUserById(@PathVariable("id") Long id){
        Optional<UserModel> user = userService.getUserById(id);
        if(user.isPresent()){
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<String> addUser(@RequestBody() Map<String, String> body){
        userService.addUser(body);
        return new ResponseEntity<>("User added successfully!", HttpStatus.OK);
    }
}
