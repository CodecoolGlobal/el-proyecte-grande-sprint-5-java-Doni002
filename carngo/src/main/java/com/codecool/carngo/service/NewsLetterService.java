package com.codecool.carngo.service;

import com.codecool.carngo.model.NewsLetterModel;
import com.codecool.carngo.repository.NewsLetterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class NewsLetterService {

    private final NewsLetterRepository newsLetterRepository;
    private final JavaMailSender mailSender;

    @Autowired
    public NewsLetterService(NewsLetterRepository newsLetterRepository, JavaMailSender mailSender) {
        this.newsLetterRepository = newsLetterRepository;
        this.mailSender = mailSender;
    }


    public int addEmailToNewsLetter(String email) {
        if(newsLetterRepository.findByEmail(email).isPresent()){
            return 406;
        }
        sendSuccessfulSubscriptionEmail(email);
        newsLetterRepository.save(new NewsLetterModel(email));
        return 200;
    }

    private void sendSuccessfulSubscriptionEmail(String email){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("carngosupport@gmail.com");
        message.setTo(email);
        message.setText("Thanks for your subscription!");
        message.setSubject("car'n go subscription");
        mailSender.send(message);
    }
}
