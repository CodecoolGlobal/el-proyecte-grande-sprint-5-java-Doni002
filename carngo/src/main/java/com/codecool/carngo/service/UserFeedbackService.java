package com.codecool.carngo.service;

import com.codecool.carngo.model.HostModel;
import com.codecool.carngo.model.UserFeedbackModel;
import com.codecool.carngo.model.UserModel;
import com.codecool.carngo.repository.HostRepository;
import com.codecool.carngo.repository.UserFeedbackRepository;
import com.codecool.carngo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class UserFeedbackService {

    private final UserFeedbackRepository userFeedbackRepository;
    private final UserRepository userRepository;
    private final HostRepository hostRepository;


    @Autowired
    public UserFeedbackService(UserFeedbackRepository userFeedbackRepository, UserRepository userRepository, HostRepository hostRepository) {
        this.userFeedbackRepository = userFeedbackRepository;
        this.userRepository = userRepository;
        this.hostRepository = hostRepository;
    }

    public List<UserFeedbackModel> getAllUserFeedback(){
        return userFeedbackRepository.findAll();
    }

    public List<UserFeedbackModel> getUserFeedbacksForHost(Long id) {
        return userFeedbackRepository.findUserFeedbacksForHost(id);
    }

    public int addUserFeedback(Map<String, String> body) {
        Optional<UserModel> userToFind = userRepository.findById(Long.valueOf(body.get("userId")));
        Optional<HostModel> hostToFind = hostRepository.findById(Long.valueOf(body.get("hostId")));
        if(userToFind.isEmpty() || hostToFind.isEmpty()) {
            return 404;
        }
        userFeedbackRepository.save(new UserFeedbackModel(Double.parseDouble(body.get("starRating")),
                body.get("message"), userToFind.get(), hostToFind.get(), LocalDate.parse(body.get("date"))));
        return 200;
    }

    public int editUserFeedback(Map<String, String> body) {
        Optional<UserFeedbackModel> userFeedbackToFind = userFeedbackRepository.findById(Long.valueOf(body.get("id")));
        if(userFeedbackToFind.isEmpty()) {
            return 404;
        }
        UserFeedbackModel userFeedback = userFeedbackToFind.get();
        userFeedback.setStarRating(Double.parseDouble(body.get("starRating")));
        userFeedback.setMessage(body.get("message"));
        userFeedbackRepository.save(userFeedback);
        return 200;
    }

    public int deleteUserFeedback(Long id) {
        Optional<UserFeedbackModel> userFeedbackToFind = userFeedbackRepository.findById(id);
        if(userFeedbackToFind.isEmpty()) {
            return 404;
        }
        userFeedbackRepository.deleteById(id);
        return 200;
    }
}
