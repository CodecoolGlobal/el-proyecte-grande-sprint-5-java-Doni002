package com.codecool.carngo.service;

import com.codecool.carngo.model.HostModel;
import com.codecool.carngo.repository.HostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class HostService {

    private final HostRepository hostRepository;

    @Autowired
    public HostService(HostRepository hostRepository) {
        this.hostRepository = hostRepository;
    }

    public List<HostModel> getAllHosts(){
        return hostRepository.findAll();
    }
}
