package com.codecool.carngo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.catalina.Host;

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
    private int id;
    private double starRating;
    private String message;
    //private ReservationModel reservation;
    @ManyToOne
    private UserModel user;
    @ManyToOne
    private VehicleModel vehicle;
    private LocalDate date;

}
