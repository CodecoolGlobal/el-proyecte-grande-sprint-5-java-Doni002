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
@Table(name = "car_reservation")
public class CarReservationModel {

    @Id
    private int id;
    private LocalDate from;
    private LocalDate to;
    @ManyToOne
    @JoinColumn(name = "renter_user_id")
    private UserModel user;
    @ManyToOne
    @JoinColumn(name = "car_id")
    private VehicleModel vehicle;
}
