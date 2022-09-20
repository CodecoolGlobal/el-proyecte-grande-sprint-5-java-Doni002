package com.codecool.carngo.repository;

import com.codecool.carngo.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM users WHERE name = ?1")
    List<UserModel> getUsersByName(String name);

    @Query(nativeQuery = true, value = "SELECT * FROM users WHERE email = ?1")
    List<UserModel> getUsersByEmail(String email);

    Optional<UserModel> findUserByUsername(String username);
    @Query(nativeQuery = true, value = "SELECT * FROM users WHERE username = ?1")
    List<UserModel> getUsersByUserName(String username);
}