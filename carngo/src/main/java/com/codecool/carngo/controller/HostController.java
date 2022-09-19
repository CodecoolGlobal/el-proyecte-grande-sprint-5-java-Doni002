package com.codecool.carngo.controller;

import com.codecool.carngo.model.HostModel;
import com.codecool.carngo.service.HostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RequestMapping("/api/hosts")
@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class HostController {

    private final HostService hostService;

    @Autowired
    public HostController(HostService hostService) {
        this.hostService = hostService;
    }

    @GetMapping
    public ResponseEntity<List<HostModel>> getAllHosts(){
        return new ResponseEntity<>(hostService.getAllHosts(), HttpStatus.OK);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<HostModel> getHostById(@PathVariable Long id) {
        Optional<HostModel> host = hostService.getHostById(id);
        return host.map(hostModel -> new ResponseEntity<>(hostModel, HttpStatus.OK)).
                orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value = "/user/{id}")
    public ResponseEntity<HostModel> getHostByUserId(@PathVariable Long id) {
        HostModel host = hostService.getHostByUserId(id);
        if(host != null) {
            return new ResponseEntity<>(host, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    //requirements: bankAccountNumber, bankAccountName, userId
    @PostMapping
    public ResponseEntity<String> registerHost(@RequestBody Map<String, String> body) {
        int response = hostService.registerHost(body);
        if(response == 200) {
            return new ResponseEntity<>("Host registered successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("User not found with id: " + body.get("userId"), HttpStatus.NOT_FOUND);
    }

    //requirements: id, bankAccountNumber, bankAccountName
    @PutMapping
    public ResponseEntity<String> editHost(@RequestBody Map<String, String> body) {
        int response = hostService.editHost(body);
        if(response == 200) {
            return new ResponseEntity<>("Host edited successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("Host not found with id: " + body.get("id"), HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<String> deleteHost(@PathVariable Long id){
        int response = hostService.deleteHost(id);
        if(response == 200) {
            return new ResponseEntity<>("Host deleted successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("Host not found with id: " + id, HttpStatus.NOT_FOUND);
    }

}
