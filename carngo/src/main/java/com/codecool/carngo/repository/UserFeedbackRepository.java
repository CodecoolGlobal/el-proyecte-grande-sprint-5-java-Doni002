package com.codecool.carngo.repository;

import com.codecool.carngo.model.UserFeedbackModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface UserFeedbackRepository extends JpaRepository<UserFeedbackModel, Long> {

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM user_feedback WHERE host_id = ?1")
    void deleteUserFeedbackByHostId(Long id);

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM user_feedback WHERE user_id = ?1")
    void deleteUserFeedbackByUserId(Long id);

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "SELECT * FROM user_feedback WHERE host_id = ?1")
    List<UserFeedbackModel> findUserFeedbacksForHost(Long id);
}
