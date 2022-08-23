package com.codecool.carngo.repository;

import com.codecool.carngo.model.HostModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HostRepository extends JpaRepository<HostModel, Long> {
}
