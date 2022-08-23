package com.codecool.carngo.repository;

import com.codecool.carngo.model.CarFeedbackModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarFeedbackRepository extends JpaRepository<CarFeedbackModel, Long> {
}
