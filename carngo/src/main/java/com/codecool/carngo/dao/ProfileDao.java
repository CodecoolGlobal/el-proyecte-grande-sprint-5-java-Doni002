package com.codecool.carngo.dao;

import com.codecool.carngo.model.ProfileModel;


import java.util.Set;

public interface ProfileDao {
    Set<ProfileModel> getAllProfiles();
    ProfileModel getProfileById(int id);
}
