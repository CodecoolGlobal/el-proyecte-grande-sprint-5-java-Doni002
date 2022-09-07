package com.codecool.carngo.repository;

import com.codecool.carngo.model.HostModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface HostRepository extends JpaRepository<HostModel, Long> {

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM hosts WHERE user_id = ?1")
    void deleteHostByUserId(Long id);

    @Transactional
    @Query(nativeQuery = true, value = "SELECT * FROM hosts WHERE user_id = ?1")
    List<HostModel> findHostByUserId(Long id);

}
