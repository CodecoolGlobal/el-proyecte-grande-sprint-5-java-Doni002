package com.codecool.carngo.repository;

import com.codecool.carngo.model.NewsLetterModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.Optional;

public interface NewsLetterRepository extends JpaRepository<NewsLetterModel, Long> {

    @Transactional
    @Query(nativeQuery = true, value = "SELECT * FROM email_subscribes WHERE email = ?1")
    Optional<NewsLetterModel> findByEmail(String email);
}
