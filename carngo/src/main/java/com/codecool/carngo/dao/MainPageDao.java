package com.codecool.carngo.dao;

import com.codecool.carngo.model.FeedbackModel;

import java.util.List;

public interface MainPageDao {
    FeedbackModel getFeedback(int id);
    void addFeedback(FeedbackModel model);
    List<FeedbackModel> getAllFeedbacks();

    void updateFeedback(int id, String message, Double rating);

    void deleteFeedback(int id);
}
