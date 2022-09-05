package com.codecool.carngo.service;

import com.codecool.carngo.model.UserFeedbackModel;
import com.codecool.carngo.repository.UserFeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserFeedbackService {

    private final UserFeedbackRepository userFeedbackRepository;

    @Autowired
    public UserFeedbackService(UserFeedbackRepository userFeedbackRepository) {
        this.userFeedbackRepository = userFeedbackRepository;
    }

    public List<UserFeedbackModel> getAllUserFeedback(){
        return userFeedbackRepository.findAll();
    }

    public List<UserFeedbackModel> getUserFeedbacksForHost(Long id) {
        return userFeedbackRepository.findUserFeedbacksForHost(id);
    }
}
