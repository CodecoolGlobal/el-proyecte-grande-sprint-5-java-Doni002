package com.codecool.carngo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "car_images")
public class CarImagesModel {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO, generator="my_entity_seq_gen")
    @SequenceGenerator(name="my_entity_seq_gen", sequenceName="MY_ENTITY_SEQ")
    private Long id;
    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private VehicleModel vehicle;
    private String imageSource;

    public CarImagesModel(VehicleModel vehicle, String imageSource) {
        this.vehicle = vehicle;
        this.imageSource = imageSource;
    }
}
