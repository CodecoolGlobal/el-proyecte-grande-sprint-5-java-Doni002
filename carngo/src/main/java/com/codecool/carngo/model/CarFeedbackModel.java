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
@Table(name = "car_feedback")
public class CarFeedbackModel {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO, generator="my_entity_seq_gen")
    @SequenceGenerator(name="my_entity_seq_gen", sequenceName="MY_ENTITY_SEQ")
    private Long id;
    private double starRating;
    private String message;
    @ManyToOne
    private UserModel user;
    private LocalDate date;
    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private VehicleModel vehicle;

    public CarFeedbackModel(double starRating, String message, UserModel user, LocalDate date, VehicleModel vehicle) {
        this.starRating = starRating;
        this.message = message;
        this.user = user;
        this.date = date;
        this.vehicle = vehicle;
    }
}
