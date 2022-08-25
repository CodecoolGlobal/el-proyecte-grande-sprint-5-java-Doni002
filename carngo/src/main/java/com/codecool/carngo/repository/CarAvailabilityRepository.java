package com.codecool.carngo.repository;

import com.codecool.carngo.model.CarAvailabilityModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface CarAvailabilityRepository extends JpaRepository<CarAvailabilityModel, Long> {

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM car_availability WHERE vehicle_id = ?1")
    void deleteCarAvailabilityByCarId(Long id);
}

