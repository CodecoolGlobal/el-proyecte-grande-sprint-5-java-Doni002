package com.codecool.carngo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.LocalDate;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_feedback")
public class UserFeedbackModel {

    @Id
    private Long id;
    private double starRating;
    private String message;
    @ManyToOne
    private UserModel user;
    @ManyToOne
    private HostModel host;
    private LocalDate date;
}
