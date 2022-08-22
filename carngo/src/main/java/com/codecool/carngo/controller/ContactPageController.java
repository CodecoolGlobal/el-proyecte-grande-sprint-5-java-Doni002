package com.codecool.carngo.controller;

import com.codecool.carngo.service.ContactPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/contact")
@Controller
public class ContactPageController {

    private final ContactPageService contactPageService;

    @Autowired
    public ContactPageController(ContactPageService contactPageService) {
        this.contactPageService = contactPageService;
    }

    @GetMapping
    public String loadContactPage(){
        return "contact";
    }

    @PostMapping
    public void sendEmail(){
        contactPageService.sendEmail();
    }
}
