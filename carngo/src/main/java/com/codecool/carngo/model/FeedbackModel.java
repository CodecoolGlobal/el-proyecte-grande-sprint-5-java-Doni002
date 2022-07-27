package com.codecool.carngo.model;

import java.time.LocalDate;

public class FeedbackModel {

    private final String author;
    private final String message;
    private final double rating;
    private final LocalDate localDate;

    public FeedbackModel(String author, String message, double rating, LocalDate localDate){
        this.author = author;
        this.message = message;
        this.rating = rating;
        this.localDate = localDate;
    }

    public String getAuthor() {
        return author;
    }

    public String getMessage() {
        return message;
    }

    public double getRating() {
        return rating;
    }

    public LocalDate getLocalDate() {
        return localDate;
    }
}
