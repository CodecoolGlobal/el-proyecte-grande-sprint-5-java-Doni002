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
@Table(name = "hosts")
public class HostModel {

    @Id
    private Long id;
    private int bankAccountNumber;
    private String bankAccountName;
    @OneToOne
    private UserModel user;
}
