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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double starRating;
    private String message;
    @ManyToOne
    private UserModel user;
    private LocalDate date;
    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private VehicleModel vehicle;

}
