package com.codecool.carngo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_feedback")
public class UserFeedbackModel {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO, generator="my_entity_seq_gen")
    @SequenceGenerator(name="my_entity_seq_gen", sequenceName="MY_ENTITY_SEQ")
    private Long id;
    private double starRating;
    private String message;
    @ManyToOne
    private UserModel user;
    @ManyToOne
    private HostModel host;
    private LocalDate date;

    public UserFeedbackModel(double starRating, String message, UserModel user, HostModel host, LocalDate date) {
        this.starRating = starRating;
        this.message = message;
        this.user = user;
        this.host = host;
        this.date = date;
    }
}
