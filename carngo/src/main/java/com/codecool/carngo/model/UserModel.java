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
@Table(name = "users")
public class UserModel {
    static final String DEFAULT_PROFILE = "defaultProfile.jpg";
    static final int DEFAULT_NUMBER_OF_CARS = 0;
    static final String DEFAULT_PROFILE_DESCRIPTION = "This profile hasn't got any description.";

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO, generator="my_entity_seq_gen")
    @SequenceGenerator(name="my_entity_seq_gen", sequenceName="MY_ENTITY_SEQ")
    private Long id;
    private String name;
    private String username;
    private String email;
    private String password;
    private String imageSource;
    private String profileDescription;
    private int numberOfCars;

    public UserModel(String name, String username, String email, String password) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.profileDescription = DEFAULT_PROFILE_DESCRIPTION;
        this.numberOfCars = DEFAULT_NUMBER_OF_CARS;
        this.imageSource = DEFAULT_PROFILE;
    }
}
