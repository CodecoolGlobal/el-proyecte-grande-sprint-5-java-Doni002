package com.codecool.carngo.model;

import java.time.LocalDate;

public class FeedbackModel {
    static int NEXT_ID = 0;
    private final int id;
    private final String author;
    private String message;
    private double rating;
    private final LocalDate localDate;

    public FeedbackModel(int id, String author, String message, double rating, LocalDate localDate){
        this.id = id;
        this.author = author;
        this.message = message;
        this.rating = rating;
        this.localDate = localDate;
    }

    public int getId() {
        return id;
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

    public void setMessage(String message){
        this.message = message;
    }
    public void setRating(Double rating){
        this.rating = rating;
    }
}
