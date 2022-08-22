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
        return feedbackDatabase.stream().filter(f->f.getId()==id).findFirst().get();
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
        feedbackDatabase.stream().filter(f->f.getId()==id).forEach(f->{
            f.setMessage(message);
            f.setRating(rating);
        });
    }

    @Override
    public void deleteFeedback(int id) {
        feedbackDatabase.removeIf(f->f.getId()==id);
    }
}
