package com.codecool.carngo.controller;

import com.codecool.carngo.model.HostModel;
import com.codecool.carngo.service.HostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping("/api/hosts")
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
}
