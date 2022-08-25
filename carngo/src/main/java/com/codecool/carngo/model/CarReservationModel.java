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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate from;
    private LocalDate to;
    @ManyToOne
    @JoinColumn(name = "renter_user_id")
    private UserModel user;
    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private VehicleModel vehicle;
}
