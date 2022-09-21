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
    @GeneratedValue(strategy=GenerationType.AUTO, generator="my_entity_seq_gen")
    @SequenceGenerator(name="my_entity_seq_gen", sequenceName="MY_ENTITY_SEQ")
    private Long id;
    private String bankAccountNumber;
    private String bankAccountName;
    @OneToOne
    private UserModel user;

    public HostModel(String bankAccountNumber, String bankAccountName, UserModel user) {
        this.bankAccountNumber = bankAccountNumber;
        this.bankAccountName = bankAccountName;
        this.user = user;
        user.setRole(UserRole.ROLE_HOST);
    }
}
