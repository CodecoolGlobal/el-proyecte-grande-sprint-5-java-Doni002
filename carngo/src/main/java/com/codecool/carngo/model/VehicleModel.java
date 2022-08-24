package com.codecool.carngo.model;

import lombok.*;

import javax.persistence.*;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "vehicles")
public class VehicleModel {

    @Id
    private Long id;
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
    @ManyToOne
    @JoinColumn(name = "owner_id")
    private HostModel host;

}
