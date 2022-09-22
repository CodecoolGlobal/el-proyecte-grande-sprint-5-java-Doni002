package com.codecool.carngo.controller;


import com.codecool.carngo.model.PositionStackModel;
import com.codecool.carngo.model.VehicleModel;
import com.codecool.carngo.service.CarImagesService;
import com.codecool.carngo.service.HostService;
import com.codecool.carngo.service.VehiclesService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static com.sun.source.util.DocTreePath.getPath;

@RequestMapping("/api/vehicles")
@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class VehiclesController {
    static final String ACCESS_KEY = "aa64ed7140357784c7465d1092d6a229";
    private final VehiclesService vehiclesPageService;
    private final CarImagesService carImagesService;
    private final HostService hostService;

    @Autowired
    public VehiclesController(VehiclesService vehiclesPageService, CarImagesService carImagesService, HostService hostService) {
        this.vehiclesPageService = vehiclesPageService;
        this.carImagesService = carImagesService;
        this.hostService = hostService;
    }

    @GetMapping
    public ResponseEntity<List<VehicleModel>> getAllVehicles(){
        return new ResponseEntity<>(vehiclesPageService.getAllVehicles(), HttpStatus.OK);
    }

    @GetMapping(value="{id}")
    public ResponseEntity<Optional<VehicleModel>> getVehicleById(@PathVariable("id") Long id){
        Optional<VehicleModel> vehicle = vehiclesPageService.getVehicleById(id);
        if(vehicle.isPresent()){
            return new ResponseEntity<>(vehicle, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value="/user-id/{id}")
    public ResponseEntity<List<VehicleModel>> getVehiclesByUserId(@PathVariable("id") Long id){
        return new ResponseEntity<>(vehiclesPageService.getVehiclesByOwnerId(id), HttpStatus.OK);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<String> deleteVehicleById(@PathVariable("id") Long id){
        int response = vehiclesPageService.deleteVehicleById(id);
        if(response == 200){
            return new ResponseEntity<>("delete successful", HttpStatus.OK);
        }
        return new ResponseEntity<>("vehicle not found with id: " + id, HttpStatus.NOT_FOUND);
    }

/*    //requirements: description, carType, color, brand, model, fuel, address, vintage, numOfSeats, trunkCapacity, pricePerDay, ownerId
    @PostMapping
    public ResponseEntity<String> addVehicle(@RequestBody() Map<String, String> body) throws JsonProcessingException {
        String address = body.get("address");
        String url = "http://api.positionstack.com/v1/forward?access_key=" + ACCESS_KEY + "&query=" + address;
        RestTemplate restTemplate = new RestTemplate();
        JsonNode node = restTemplate.getForEntity(url, JsonNode.class).getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        PositionStackModel position = objectMapper.treeToValue(node.get("data").get(0), PositionStackModel.class);
        body.put("longitude", String.valueOf(position.getLongitude()));
        body.put("latitude", String.valueOf(position.getLatitude()));
        int response = vehiclesPageService.addVehicle(body);
        if(response == 200) {
            return new ResponseEntity<>("Vehicle added successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("host not found with host id: " + body.get("ownerId"), HttpStatus.NOT_FOUND);
    }*/

    //requirements: id, description, carType, color, brand, model, fuel, vintage, numOfSeats, trunkCapacity, pricePerDay
    @PutMapping
    public ResponseEntity<String> editVehicle(@RequestBody() Map<String, String> body){
        int response = vehiclesPageService.editVehicle(body);
        if(response == 200){
            return new ResponseEntity<>("Vehicle edited successfully!", HttpStatus.OK);
        }
        return new ResponseEntity<>("Vehicle not found with id: " + body.get("id"), HttpStatus.NOT_FOUND);
    }

    @PostMapping(value = "/upload-picture/{userId}")
    public ResponseEntity<?> uploadPicture(@RequestParam("file") MultipartFile file, @PathVariable Long userId) {
        String username = System.getProperty("user.name");
        String fileName = file.getOriginalFilename();
        try {
            file.transferTo(new File("/home/" + username +
                    "/Desktop/Advanced/week_5/el-proyecte-grande-sprint-5-java-Doni002/carngo/src/main/resources/img/carProfiles/" +
                    fileName));//need to be env variable
            VehicleModel newVehicle = vehiclesPageService.getLastVehicle(vehiclesPageService.getVehiclesByOwnerId
                    (hostService.getHostByUserId(userId).getId()));
            vehiclesPageService.saveImageForVehicleFront(userId, fileName);
            carImagesService.saveImage(newVehicle, fileName);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.ok("File uploaded successfully!");
    }
    //requirements: description, carType, color, brand, model, fuel, address, vintage, numOfSeats, trunkCapacity, pricePerDay, userId
    @PostMapping(value = "upload-data")
    public ResponseEntity<?> uploadData(@RequestBody Map<String, String> body) throws JsonProcessingException {
        String address = body.get("address");
        String url = "http://api.positionstack.com/v1/forward?access_key=" + ACCESS_KEY + "&query=" + address;
        RestTemplate restTemplate = new RestTemplate();
        JsonNode node = restTemplate.getForEntity(url, JsonNode.class).getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        PositionStackModel position = objectMapper.treeToValue(node.get("data").get(0), PositionStackModel.class);
        body.put("longitude", String.valueOf(position.getLongitude()));
        body.put("latitude", String.valueOf(position.getLatitude()));
        int response = vehiclesPageService.addVehicleWithUserId(body);
        if (response == 200) {
            return ResponseEntity.ok("Data uploaded successfully!");
        }
        return new ResponseEntity<>("Host not found!", HttpStatus.NOT_FOUND);
    }




}
