package com.codecool.carngo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import java.io.IOException;

@SpringBootApplication
public class CarngoApplication extends SpringBootServletInitializer {

    public static String IMAGE_DIR;

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(CarngoApplication.class);
    }

    public static void main(String[] args) throws IOException {
        IMAGE_DIR = "/home/doni002/Desktop/Advanced/week_5/el-proyecte-grande-sprint-5-java-Doni002/carngo/src/main/resources/img/carProfiles/";
        SpringApplication.run(CarngoApplication.class, args);
    }

}
