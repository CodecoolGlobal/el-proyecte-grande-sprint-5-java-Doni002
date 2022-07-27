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
    public FeedbackModel getFeedback(int id) {
        for(FeedbackModel model : feedbackDatabase){
            if(model.getId() == id){
                return model;
            }
        }
        return null;
    }

    @Override
    public void addFeedback(FeedbackModel model) {
        feedbackDatabase.add(model);
    }

    @Override
    public List<FeedbackModel> getAllFeedbacks() {
        return feedbackDatabase;
    }

    @Override
    public void updateFeedback(int id, String message, Double rating) {
        for(FeedbackModel model : feedbackDatabase){
            if(model.getId() == id){
                model.setRating(rating);
                model.setMessage(message);
                break;
            }
        }
    }

    @Override
    public void deleteFeedback(int id) {
        FeedbackModel deletedModel = null;
        for(FeedbackModel model : feedbackDatabase){
            if(model.getId() == id){
                deletedModel = model;
                break;
            }
        }
        if(deletedModel != null){
            feedbackDatabase.remove(deletedModel);
        }
    }
}
