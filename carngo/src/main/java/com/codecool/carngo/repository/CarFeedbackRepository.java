package com.codecool.carngo.repository;

import com.codecool.carngo.model.CarFeedbackModel;
import com.codecool.carngo.model.UserFeedbackModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface CarFeedbackRepository extends JpaRepository<CarFeedbackModel, Long> {

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM car_feedback WHERE vehicle_id = ?1")
    void deleteCarFeedbackByCarId(Long id);

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "SELECT * FROM car_feedback WHERE vehicle_id = ?1")
    List<CarFeedbackModel> findCarFeedbacksForCar(Long id);
}
