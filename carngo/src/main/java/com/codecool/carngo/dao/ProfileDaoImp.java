package com.codecool.carngo.dao;

import com.codecool.carngo.model.ProfileModel;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;


@Repository
public class ProfileDaoImp implements ProfileDao{
    private Set<ProfileModel> allProfiles;

    public ProfileDaoImp() {
        this.allProfiles = new HashSet<>();
        allProfiles.add(new ProfileModel(01, "Kovács András", "ka@gmail.com", "********"));
        allProfiles.add(new ProfileModel(02, "Szabó Dénes", "szd@gmail.com", "********"));
        allProfiles.add(new ProfileModel(03, "Nagy Gábor", "ng@gmail.com", "********"));
    }

    @Override
    public Set<ProfileModel> getAllProfiles() {
        return allProfiles;
    }

    public ProfileModel getProfileById(int id) {
;        return allProfiles.stream()
                .filter(user -> user.getId() == id)
                .findFirst().get();
    }
}
