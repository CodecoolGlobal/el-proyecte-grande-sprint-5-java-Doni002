package com.codecool.carngo.repository;

import com.codecool.carngo.model.CarImagesModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface CarImagesRepository extends JpaRepository<CarImagesModel, Long> {

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM car_images WHERE vehicle_id = ?1")
    void deleteCarImageByCarId(Long id);

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "SELECT * FROM car_images WHERE vehicle_id = ?1")
    List<CarImagesModel> findImagesForCar(Long id);
}

