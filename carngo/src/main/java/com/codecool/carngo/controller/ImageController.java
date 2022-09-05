package com.codecool.carngo.controller;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.InputStream;

@RequestMapping("/api/image")
@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class ImageController {

    @GetMapping(value="/{path}")
    @ResponseBody
    public ResponseEntity<InputStreamResource> getImageDynamicType(@PathVariable("path") String path) {
        MediaType contentType = MediaType.IMAGE_JPEG;
        InputStream in = getClass().getResourceAsStream("/img/" + path);
        assert in != null;
        return ResponseEntity.ok()
                .contentType(contentType)
                .body(new InputStreamResource(in));
    }
}
