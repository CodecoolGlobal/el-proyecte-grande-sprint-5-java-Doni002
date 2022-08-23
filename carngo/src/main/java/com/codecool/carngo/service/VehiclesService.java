package com.codecool.carngo.service;

import com.codecool.carngo.model.VehicleModel;
import com.codecool.carngo.repository.VehiclesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehiclesService {

    private final VehiclesRepository vehiclesRepository;

    @Autowired
    public VehiclesService(VehiclesRepository vehiclesRepository) {
        this.vehiclesRepository = vehiclesRepository;
    }

    public List<VehicleModel> getAllVehicles(){
        return vehiclesRepository.findAll();
    }

}
