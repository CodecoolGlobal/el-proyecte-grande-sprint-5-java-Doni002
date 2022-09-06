package com.codecool.carngo.repository;

import com.codecool.carngo.model.CarReservationModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import javax.transaction.Transactional;
import java.util.List;

public interface CarReservationRepository extends JpaRepository<CarReservationModel, Long> {

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM car_reservation WHERE vehicle_id = ?1")
    void deleteReservationByVehicleId(Long id);

    @Transactional
    @Query(nativeQuery = true, value = "SELECT * FROM car_reservation WHERE vehicle_id = ?1")
    List<CarReservationModel> findByCarId(Long id);

}
