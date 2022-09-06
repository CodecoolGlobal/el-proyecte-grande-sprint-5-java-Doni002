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
    @GeneratedValue(strategy=GenerationType.AUTO, generator="my_entity_seq_gen")
    @SequenceGenerator(name="my_entity_seq_gen", sequenceName="MY_ENTITY_SEQ")
    private Long id;
    private LocalDate fromDate;
    private LocalDate toDate;
    @ManyToOne
    @JoinColumn(name = "renter_user_id")
    private UserModel user;
    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private VehicleModel vehicle;

    public CarReservationModel(LocalDate fromDate, LocalDate toDate, UserModel user, VehicleModel vehicle) {
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.user = user;
        this.vehicle = vehicle;
    }
}
