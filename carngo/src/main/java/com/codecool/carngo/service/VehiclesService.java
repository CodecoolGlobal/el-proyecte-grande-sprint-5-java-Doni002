package com.codecool.carngo.service;

import com.codecool.carngo.model.HostModel;
import com.codecool.carngo.model.VehicleModel;
import com.codecool.carngo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class VehiclesService {

    private final VehiclesRepository vehiclesRepository;
    private final CarReservationRepository carReservationRepository;
    private final CarFeedbackRepository carFeedbackRepository;
    private final CarAvailabilityRepository carAvailability;
    private final HostRepository hostRepository;

    @Autowired
    public VehiclesService(VehiclesRepository vehiclesRepository, CarReservationRepository carReservationRepository,
                           CarFeedbackRepository carFeedbackRepository, CarAvailabilityRepository carAvailability, HostRepository hostRepository) {
        this.vehiclesRepository = vehiclesRepository;
        this.carReservationRepository = carReservationRepository;
        this.carFeedbackRepository = carFeedbackRepository;
        this.carAvailability = carAvailability;
        this.hostRepository = hostRepository;
    }

    public List<VehicleModel> getAllVehicles(){
        return vehiclesRepository.findAll();
    }

    public Optional<VehicleModel> getVehicleById(Long id){
        return vehiclesRepository.findById(id);
    }

    public int deleteVehicleById(Long id){
        if(vehiclesRepository.findById(id).isPresent()){
            carFeedbackRepository.deleteCarFeedbackByCarId(id);
            carReservationRepository.deleteReservationByVehicleId(id);
            carAvailability.deleteCarAvailabilityByCarId(id);
            vehiclesRepository.deleteById(id);
            return 200;
        }
        return 404;
    }

    public int addVehicle(Map<String, String> body){
        Optional<HostModel> host = hostRepository.findById(Long.valueOf(body.get("ownerId")));
        if(host.isEmpty()){
            return 404;
        }

        VehicleModel newVehicle = new VehicleModel(body.get("description"), body.get("carType"), body.get("color"),
                body.get("brand"), body.get("model"), body.get("fuel"),body.get("address"), Integer.parseInt(body.get("vintage")),
                Integer.parseInt(body.get("numOfSeats")), Integer.parseInt(body.get("trunkCapacity")),
                Integer.parseInt(body.get("pricePerDay")), 0, Double.parseDouble(body.get("longitude")),
                Double.parseDouble(body.get("latitude")), host.get());
        vehiclesRepository.save(newVehicle);
        return 200;
    }

    @Transactional
    public int editVehicle(Map<String, String> body){
        Optional<VehicleModel> vehicleToFind = vehiclesRepository.findById(Long.valueOf(body.get("id")));
        if(vehicleToFind.isPresent()){
            VehicleModel vehicleToEdit = vehicleToFind.get();
            vehicleToEdit.setDescription(body.get("description"));
            vehicleToEdit.setCarType(body.get("carType"));
            vehicleToEdit.setColor(body.get("color"));
            vehicleToEdit.setBrand(body.get("brand"));
            vehicleToEdit.setModel(body.get("model"));
            vehicleToEdit.setFuel(body.get("fuel"));
            vehicleToEdit.setVintage(Integer.parseInt(body.get("vintage")));
            vehicleToEdit.setNumOfSeats(Integer.parseInt(body.get("numOfSeats")));
            vehicleToEdit.setTrunkCapacity(Integer.parseInt(body.get("trunkCapacity")));
            vehicleToEdit.setPricePerDay(Integer.parseInt(body.get("pricePerDay")));
            vehiclesRepository.save(vehicleToEdit);
            return 200;
        }
        return 404;
    }

    public List<VehicleModel> getVehiclesByOwnerId(Long id) {
        return vehiclesRepository.getVehicleByOwnerId(id);
    }

    public VehicleModel getLastVehicle(List<VehicleModel> vehicles) {
        return vehicles.get(vehicles.size()-1);
    }

    public int addVehicleWithUserId(Map<String, String> body) {
        Optional<HostModel> host = Optional.ofNullable(hostRepository.findHostByUserId(Long.valueOf(body.get("userId"))).get(0));
        if(host.isEmpty()){
            return 404;
        }
        VehicleModel newVehicle = new VehicleModel(body.get("description"), body.get("carType"), body.get("color"),
                body.get("brand"), body.get("model"), body.get("fuel"),body.get("address"), Integer.parseInt(body.get("vintage")),
                Integer.parseInt(body.get("numOfSeats")), Integer.parseInt(body.get("trunkCapacity")),
                Integer.parseInt(body.get("pricePerDay")), 0, Double.parseDouble(body.get("longitude")),
                Double.parseDouble(body.get("latitude")), host.get());
        vehiclesRepository.save(newVehicle);
        return 200;
    }

    public int saveImageForVehicleFront(Long userId, String fileName) {
        List<HostModel> hostToFind = hostRepository.findHostByUserId(userId);
        if(hostToFind.size() == 0) {
            return 404;
        }
        VehicleModel vehicle = getLastVehicle(vehiclesRepository.getVehicleByOwnerId(hostToFind.get(0).getId()));
        vehicle.setImageSource(fileName);
        vehiclesRepository.save(vehicle);
        return 200;
    }
}
