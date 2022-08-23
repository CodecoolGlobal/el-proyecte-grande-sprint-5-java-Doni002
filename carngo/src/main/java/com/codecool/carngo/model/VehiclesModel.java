package com.codecool.carngo.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "vehicles")
public class VehiclesModel {

    @Id
    private int id;
    private String description;
    private String carType;
    private String color;
    private String brand;
    private String model;
    private String fuel;
    private int vintage;
    private int numOfSeats;
    private int trunkCapacity;
    private int pricePerDay;
    private int numOfReservations;
    private int ownerId;

}
