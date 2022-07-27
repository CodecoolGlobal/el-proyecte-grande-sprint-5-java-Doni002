package com.codecool.carngo.dao;

import com.codecool.carngo.model.FeedbackModel;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Repository
public class MainPageDaoImp implements MainPageDao{

    private final List<FeedbackModel> feedbackDatabase;

    public MainPageDaoImp() {
        feedbackDatabase = new ArrayList<>();
        feedbackDatabase.add(new FeedbackModel("en","jo az auto", 4.9, LocalDate.now()));

    }

    @Override
    public List<FeedbackModel> getAllFeedbacks() {
        return feedbackDatabase;
    }
}
