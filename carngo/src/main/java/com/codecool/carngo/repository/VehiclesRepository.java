package com.codecool.carngo.repository;

import com.codecool.carngo.model.VehicleModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehiclesRepository extends JpaRepository<VehicleModel, Long> {
}
