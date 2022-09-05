package com.codecool.carngo.repository;

import com.codecool.carngo.model.CarFeedbackModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface CarFeedbackRepository extends JpaRepository<CarFeedbackModel, Long> {

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM car_feedback WHERE vehicle_id = ?1")
    void deleteCarFeedbackByCarId(Long id);
}
