package com.codecool.carngo.service;

import com.codecool.carngo.dao.VehiclesPageDao;
import com.codecool.carngo.model.VehiclesModel;
import com.codecool.carngo.repository.VehiclesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehiclesPageService {

    private final VehiclesRepository vehiclesRepository;

    @Autowired
    public VehiclesPageService(VehiclesRepository vehiclesRepository) {
        this.vehiclesRepository = vehiclesRepository;
    }

    public List<VehiclesModel> getAllVehicles(){
        return vehiclesRepository.findAll();
    }

}
