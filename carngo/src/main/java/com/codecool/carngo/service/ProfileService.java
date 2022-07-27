package com.codecool.carngo.service;

import com.codecool.carngo.dao.ProfileDao;
import com.codecool.carngo.dao.ProfileDaoImp;
import com.codecool.carngo.model.ProfileModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {
    private ProfileDao profileDao;

    @Autowired
    public ProfileService(ProfileDaoImp profileDaoImp) {
        this.profileDao = profileDaoImp;
    }
    public List<ProfileModel> getAllProfiles() {
        return profileDao.getAllProfiles();
    }
    public ProfileModel getProfileById(int id) {
        return profileDao.getProfileById(id);
    }
}
