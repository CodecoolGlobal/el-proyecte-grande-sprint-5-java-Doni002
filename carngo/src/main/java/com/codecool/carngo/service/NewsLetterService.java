package com.codecool.carngo.service;

import com.codecool.carngo.model.NewsLetterModel;
import com.codecool.carngo.repository.NewsLetterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class NewsLetterService {

    private final NewsLetterRepository newsLetterRepository;

    @Autowired
    public NewsLetterService(NewsLetterRepository newsLetterRepository) {
        this.newsLetterRepository = newsLetterRepository;
    }


    public int addEmailToNewsLetter(Map<String, String> body) {
        if(newsLetterRepository.findByEmail(body.get("email")).isPresent()){
            return 406;
        }
        newsLetterRepository.save(new NewsLetterModel(body.get("email")));
        return 200;
    }
}
