package com.codecool.carngo.repository;

import com.codecool.carngo.model.CarReservationModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarReservationRepository extends JpaRepository<CarReservationModel, Long> {
}
