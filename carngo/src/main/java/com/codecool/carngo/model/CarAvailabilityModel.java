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
@Table(name = "car_availability")
public class CarAvailabilityModel {

    @Id
    private int id;
    @ManyToOne
    @JoinColumn(name = "car_id")
    private VehicleModel vehicle;
    private LocalDate from;
    private LocalDate to;
    private boolean status;
}
