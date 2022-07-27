package com.codecool.carngo.service;


import com.codecool.carngo.dao.MainPageDao;
import com.codecool.carngo.model.FeedbackModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MainPageService {

    private final MainPageDao mainPageDao;

    @Autowired
    public MainPageService(MainPageDao mainPageDao) {
        this.mainPageDao = mainPageDao;
    }

    public List<FeedbackModel> getAllFeedbacks(){
        return mainPageDao.getAllFeedbacks();
    }
}
