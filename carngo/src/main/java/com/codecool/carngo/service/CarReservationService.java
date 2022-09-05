package com.codecool.carngo.service;

import com.codecool.carngo.model.CarReservationModel;
import com.codecool.carngo.repository.CarReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarReservationService {

    private final CarReservationRepository carReservationRepository;

    @Autowired
    public CarReservationService(CarReservationRepository carReservationRepository) {
        this.carReservationRepository = carReservationRepository;
    }

    public List<CarReservationModel> getAllCarReservation(){
        return carReservationRepository.findAll();
    }
}

