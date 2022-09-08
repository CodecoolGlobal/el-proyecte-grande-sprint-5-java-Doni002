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

    @PostMapping(value = "register")
    public ResponseEntity<String> registerUser(@RequestBody() Map<String, String> body){
        int response = userService.addUser(body);
        if(response == 200){
            return new ResponseEntity<>("User registered successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("name or email already in use!", HttpStatus.NOT_ACCEPTABLE);
    }

    @PutMapping
    public ResponseEntity<String> updateUserById(@RequestBody() Map<String, String> body){
        int response = userService.updateUserById(body);
        if (response == 200){
            return new ResponseEntity<>("User updated successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("User not found with id: " + body.get("id"), HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable long id){
        int response = userService.deleteUserById(id);
        if(response == 200){
            return new ResponseEntity<>("User deleted successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("User not found with id: " + id, HttpStatus.NOT_FOUND);
    }

}
