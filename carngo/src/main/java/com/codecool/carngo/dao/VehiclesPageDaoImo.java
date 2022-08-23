package com.codecool.carngo.dao;

import com.codecool.carngo.model.VehiclesModel;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class VehiclesPageDaoImo implements VehiclesPageDao {

    private final List<VehiclesModel> vehiclesDatabase;

    public VehiclesPageDaoImo() {
        vehiclesDatabase = new ArrayList<>();
        //vehiclesDatabase.add(new VehiclesModel(1,"vigyazzal ra", "kombi", "piros", "Wolkswagen", "passat", "ez dizel te ...", 1999, 5, 300, 19000, 56, 6));
    }

    @Override
    public List<VehiclesModel> getAllVehicles() {
        return vehiclesDatabase;
    }
}
