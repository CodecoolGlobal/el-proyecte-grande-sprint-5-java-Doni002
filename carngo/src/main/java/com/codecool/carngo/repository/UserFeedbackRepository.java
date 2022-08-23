package com.codecool.carngo.repository;

import com.codecool.carngo.model.UserFeedbackModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserFeedbackRepository extends JpaRepository<UserFeedbackModel, Long> {
}
