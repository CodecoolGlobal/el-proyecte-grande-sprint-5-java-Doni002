package com.codecool.carngo.repository;

import com.codecool.carngo.model.CarReservationModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import javax.transaction.Transactional;

public interface CarReservationRepository extends JpaRepository<CarReservationModel, Long> {

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM car_reservation WHERE vehicle_id = ?1")
    void deleteReservationByVehicleId(Long id);

}
