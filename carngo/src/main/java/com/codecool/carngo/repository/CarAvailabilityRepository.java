package com.codecool.carngo.repository;

import com.codecool.carngo.model.CarAvailabilityModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarAvailabilityRepository extends JpaRepository<CarAvailabilityModel, Long> {
}
