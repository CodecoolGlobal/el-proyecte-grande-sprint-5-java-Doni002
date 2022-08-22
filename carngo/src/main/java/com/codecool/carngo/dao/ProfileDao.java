package com.codecool.carngo.dao;

import com.codecool.carngo.model.ProfileModel;

import java.util.List;

public interface ProfileDao {
    List<ProfileModel> getAllProfiles();
    ProfileModel getProfileById(int id);
}
