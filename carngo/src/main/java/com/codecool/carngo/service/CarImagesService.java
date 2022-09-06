package com.codecool.carngo.service;

import com.codecool.carngo.model.CarImagesModel;
import com.codecool.carngo.repository.CarImagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarImagesService {

    private final CarImagesRepository carImages;

    @Autowired
    public CarImagesService(CarImagesRepository carImages) {
        this.carImages = carImages;
    }

    public List<CarImagesModel> getAllCarImages(){
        return carImages.findAll();
    }

    public List<CarImagesModel> getCarImagesForCar(Long id) {
        return carImages.findImagesForCar(id);
    }
}
