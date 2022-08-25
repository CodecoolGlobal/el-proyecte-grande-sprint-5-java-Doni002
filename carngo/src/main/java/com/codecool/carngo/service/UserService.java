package com.codecool.carngo.service;

import com.codecool.carngo.model.UserModel;
import com.codecool.carngo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserModel> getAllUser(){
       return userRepository.findAll();
    }

    public Optional<UserModel> getUserById(Long id){
        return userRepository.findById(id);
    }

    public void addUser(Map<String, String> body){
        UserModel newUser = new UserModel(body.get("name"), body.get("email"), body.get("password"));
        userRepository.save(newUser);
    }

    public int updateUserById(Map<String, String> body){
        Optional<UserModel> userToFind = userRepository.findById(Long.valueOf(body.get("id")));
        if(userToFind.isPresent()){
            UserModel user = userToFind.get();
            user.setName(body.get("name"));
            user.setEmail(body.get("email"));
            user.setPassword(body.get("password"));
            userRepository.save(user);
            return 200;
        }
        return 404;
    }

}
