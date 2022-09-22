package com.codecool.carngo.repository;

import com.codecool.carngo.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {

    Optional<UserModel> findUserByUsername(String username);
    Optional<UserModel> findUserByEmail(String email);
}
