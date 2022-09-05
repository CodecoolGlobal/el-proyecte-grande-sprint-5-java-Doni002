package com.codecool.carngo.service;

import com.codecool.carngo.model.CarFeedbackModel;
import com.codecool.carngo.model.UserFeedbackModel;
import com.codecool.carngo.repository.CarFeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarFeedbackService {

    private final CarFeedbackRepository carFeedbackRepository;

    @Autowired
    public CarFeedbackService(CarFeedbackRepository carFeedbackRepository) {
        this.carFeedbackRepository = carFeedbackRepository;
    }

    public List<CarFeedbackModel> getAllCarFeedback(){
        return carFeedbackRepository.findAll();
    }

    public List<CarFeedbackModel> getCarFeedbacksForCar(Long id) {
        return carFeedbackRepository.findCarFeedbacksForCar(id);
    }
}
