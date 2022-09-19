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
    @GeneratedValue(strategy=GenerationType.AUTO, generator="my_entity_seq_gen")
    @SequenceGenerator(name="my_entity_seq_gen", sequenceName="MY_ENTITY_SEQ")
    private Long id;
    private String description;
    private String carType;
    private String color;
    private String brand;
    private String model;
    private String fuel;
    private String imageSource;
    private String address;
    private int vintage;
    private int numOfSeats;
    private int trunkCapacity;
    private int pricePerDay;
    private int numOfReservations;
    private double longitude;
    private double latitude;
    @ManyToOne
    @JoinColumn(name = "owner_id")
    private HostModel host;


    public VehicleModel(String description, String carType, String color, String brand, String model, String fuel,
                        String address, int vintage, int numOfSeats, int trunkCapacity, int pricePerDay,
                        int numOfReservations, double longitude, double latitude, HostModel host) {
        this.description = description;
        this.carType = carType;
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.fuel = fuel;
        this.vintage = vintage;
        this.numOfSeats = numOfSeats;
        this.trunkCapacity = trunkCapacity;
        this.pricePerDay = pricePerDay;
        this.numOfReservations = numOfReservations;
        this.host = host;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
    }
}
