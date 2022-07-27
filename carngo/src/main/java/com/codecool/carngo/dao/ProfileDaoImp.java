package com.codecool.carngo.dao;

import com.codecool.carngo.model.ProfileModel;
import org.springframework.stereotype.Repository;

import java.util.*;


@Repository
public class ProfileDaoImp implements ProfileDao{
    private List<ProfileModel> allProfiles;

    public ProfileDaoImp() {
        this.allProfiles = new ArrayList<>();
        allProfiles.add(new ProfileModel(01, "Kovács András", "ka@gmail.com", "********"));
        allProfiles.add(new ProfileModel(02, "Szabó Dénes", "szd@gmail.com", "********"));
        allProfiles.add(new ProfileModel(03, "Nagy Gábor", "ng@gmail.com", "********"));
    }

    @Override
    public List<ProfileModel> getAllProfiles() {
        return allProfiles;
    }

    public ProfileModel getProfileById(int id) {
;        return allProfiles.stream()
                .filter(user -> user.getId() == id)
                .findFirst().get();
    }
}
