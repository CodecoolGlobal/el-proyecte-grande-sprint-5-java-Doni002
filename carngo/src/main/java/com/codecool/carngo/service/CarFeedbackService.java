package com.codecool.carngo.service;

import com.codecool.carngo.model.CarFeedbackModel;
import com.codecool.carngo.model.UserModel;
import com.codecool.carngo.model.VehicleModel;
import com.codecool.carngo.repository.CarFeedbackRepository;
import com.codecool.carngo.repository.UserRepository;
import com.codecool.carngo.repository.VehiclesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class CarFeedbackService {

    private final CarFeedbackRepository carFeedbackRepository;
    private final VehiclesRepository vehiclesRepository;
    private final UserRepository userRepository;

    @Autowired
    public CarFeedbackService(CarFeedbackRepository carFeedbackRepository, VehiclesRepository vehiclesRepository, UserRepository userRepository) {
        this.carFeedbackRepository = carFeedbackRepository;
        this.vehiclesRepository = vehiclesRepository;
        this.userRepository = userRepository;
    }

    public List<CarFeedbackModel> getAllCarFeedback(){
        return carFeedbackRepository.findAll();
    }

    public List<CarFeedbackModel> getCarFeedbacksForCar(Long id) {
        return carFeedbackRepository.findCarFeedbacksForCar(id);
    }

    public int addCarFeedback(Map<String, String> body) {
        Optional<UserModel> userToFind = userRepository.findById(Long.valueOf(body.get("userId")));
        Optional<VehicleModel> vehicleToFind = vehiclesRepository.findById(Long.valueOf(body.get("vehicleId")));
        if(userToFind.isEmpty() || vehicleToFind.isEmpty()){
            return 404;
        }
        int starRating = Integer.parseInt(body.get("starRating"));
        String message = body.get("message");
        LocalDate date = LocalDate.parse(body.get("date"));
        carFeedbackRepository.save(new CarFeedbackModel(starRating, message, userToFind.get(), date, vehicleToFind.get()));
        return 200;
    }

    public int editCarFeedback(Map<String, String> body) {
        Optional<CarFeedbackModel> carFeedbackToFind = carFeedbackRepository.findById(Long.valueOf(body.get("id")));
        if(carFeedbackToFind.isEmpty()) {
            return 404;
        }
        CarFeedbackModel carFeedback = carFeedbackToFind.get();
        carFeedback.setStarRating(Double.parseDouble(body.get("starRating")));
        carFeedback.setMessage(body.get("message"));
        carFeedbackRepository.save(carFeedback);
        return 200;
    }

    public int deleteCarFeedback(Long id) {
        Optional<CarFeedbackModel> carFeedbackToFind = carFeedbackRepository.findById(id);
        if(carFeedbackToFind.isEmpty()) {
            return 404;
        }
        carFeedbackRepository.deleteById(id);
        return 200;
    }
}
