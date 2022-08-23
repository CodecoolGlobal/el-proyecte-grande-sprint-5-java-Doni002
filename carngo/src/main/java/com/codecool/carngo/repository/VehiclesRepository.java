package com.codecool.carngo.repository;

import com.codecool.carngo.model.VehiclesModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehiclesRepository extends JpaRepository<VehiclesModel, Long> {
}
