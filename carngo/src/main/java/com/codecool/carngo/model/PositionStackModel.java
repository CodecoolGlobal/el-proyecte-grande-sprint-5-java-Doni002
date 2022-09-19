package com.codecool.carngo.model;

import com.fasterxml.jackson.annotation.JsonProperty;
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
@Table(name = "coordinates")
public class PositionStackModel {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO, generator="my_entity_seq_gen")
    @SequenceGenerator(name="my_entity_seq_gen", sequenceName="MY_ENTITY_SEQ")
    private long id;
    private double latitude;
    private double longitude;
    private String type;
    private String name;
    private int number;
    private String street;
    @JsonProperty("postal_code")
    private int postalCode;
    private int confidence;
    private String region;
    @JsonProperty("region_code")
    private String regionCode;
    private String county;
    private String locality;
    @JsonProperty("administrative_area")
    private String administrativeArea;
    private String neighbourhood;
    private String country;
    @JsonProperty("country_code")
    private String countryCode;
    private String continent;
    private String label;
}
