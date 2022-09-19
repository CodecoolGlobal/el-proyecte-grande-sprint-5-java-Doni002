package com.codecool.carngo.repository;

import com.codecool.carngo.model.CarAvailabilityModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface CarAvailabilityRepository extends JpaRepository<CarAvailabilityModel, Long> {

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM car_availability WHERE vehicle_id = ?1")
    void deleteCarAvailabilityByCarId(Long id);

    @Query(nativeQuery = true, value = "SELECT * FROM car_availability WHERE vehicle_id = ?1")
    List<CarAvailabilityModel> getCarAvailabilityByCarId(Long id);
    
}

