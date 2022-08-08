package com.codecool.carngo.model;

public class VehiclesModel {

    private final int id;
    private final String description;
    private final String carType;
    private final String color;
    private final String brand;
    private final String model;
    private final String fuel;
    private final int vintage;
    private final int numOfSeats;
    private final int trunkCapacity;
    private final int pricePerDay;
    private final int numOfReservations;
    private final int ownerId;

    public VehiclesModel(int id, String description, String carType, String color, String brand, String model, String fuel,
                         int vintage, int numOfSeats, int trunkCapacity, int pricePerDay, int numOfReservations, int ownerId) {
        this.id = id;
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
        this.ownerId = ownerId;
    }

    public int getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getCarType() {
        return carType;
    }

    public String getColor() {
        return color;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public String getFuel() {
        return fuel;
    }

    public int getVintage() {
        return vintage;
    }

    public int getNumOfSeats() {
        return numOfSeats;
    }

    public int getTrunkCapacity() {
        return trunkCapacity;
    }

    public int getPricePerDay() {
        return pricePerDay;
    }

    public int getNumOfReservations() {
        return numOfReservations;
    }

    public int getOwnerId() {
        return ownerId;
    }
}
