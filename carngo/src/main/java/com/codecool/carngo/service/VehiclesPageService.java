package com.codecool.carngo.service;

import com.codecool.carngo.dao.VehiclesPageDao;
import com.codecool.carngo.model.VehiclesModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehiclesPageService {

    private final VehiclesPageDao vehiclesPageDao;

    @Autowired
    public VehiclesPageService(VehiclesPageDao vehiclesPageDao) {
        this.vehiclesPageDao = vehiclesPageDao;
    }

    public List<VehiclesModel> getAllVehicles(){
        return vehiclesPageDao.getAllVehicles();
    }

}
