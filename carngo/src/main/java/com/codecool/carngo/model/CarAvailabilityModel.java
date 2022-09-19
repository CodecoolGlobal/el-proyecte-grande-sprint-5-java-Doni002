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
    @GeneratedValue(strategy=GenerationType.AUTO, generator="my_entity_seq_gen")
    @SequenceGenerator(name="my_entity_seq_gen", sequenceName="MY_ENTITY_SEQ")
    private Long id;
    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private VehicleModel vehicle;
    private LocalDate fromDate;
    private LocalDate toDate;

    public CarAvailabilityModel(VehicleModel vehicle, LocalDate fromDate, LocalDate toDate) {
        this.vehicle = vehicle;
        this.fromDate = fromDate;
        this.toDate = toDate;
    }
}
