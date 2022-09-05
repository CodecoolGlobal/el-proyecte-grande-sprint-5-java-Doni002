package com.codecool.carngo.repository;

import com.codecool.carngo.model.VehicleModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface VehiclesRepository extends JpaRepository<VehicleModel, Long> {

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM vehicles WHERE owner_id = ?1")
    void deleteVehicleByOwnerId(Long id);

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "SELECT * FROM vehicles WHERE owner_id = ?1")
    List<VehicleModel> getVehicleByOwnerId(Long id);

}
