package com.codecool.carngo.repository;

import com.codecool.carngo.model.UserModel;
import com.codecool.carngo.model.VehicleModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.Optional;
import java.util.List;

public interface UserRepository extends JpaRepository<UserModel, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM users WHERE name = ?1")
    List<UserModel> getUsersByName(String name);

    @Query(nativeQuery = true, value = "SELECT * FROM users WHERE email = ?1")
    List<UserModel> getUsersByEmail(String email);

}
