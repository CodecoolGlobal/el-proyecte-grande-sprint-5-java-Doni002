package com.codecool.carngo.service;

import com.codecool.carngo.model.HostModel;
import com.codecool.carngo.model.UserModel;
import com.codecool.carngo.model.VehicleModel;
import com.codecool.carngo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class HostService {

    private final HostRepository hostRepository;
    private final UserRepository userRepository;
    private final VehiclesRepository vehiclesRepository;
    private final CarImagesRepository carImagesRepository;
    private final CarFeedbackRepository carFeedbackRepository;
    private final CarReservationRepository carReservationRepository;
    private final CarAvailabilityRepository carAvailabilityRepository;
    private final UserFeedbackRepository userFeedbackRepository;

    @Autowired
    public HostService(HostRepository hostRepository, UserRepository userRepository,
                       VehiclesRepository vehiclesRepository, CarImagesRepository carImagesRepository,
                       CarFeedbackRepository carFeedbackRepository, CarReservationRepository carReservationRepository,
                       CarAvailabilityRepository carAvailabilityRepository, UserFeedbackRepository userFeedbackRepository) {
        this.hostRepository = hostRepository;
        this.userRepository = userRepository;
        this.vehiclesRepository = vehiclesRepository;
        this.carImagesRepository = carImagesRepository;
        this.carFeedbackRepository = carFeedbackRepository;
        this.carReservationRepository = carReservationRepository;
        this.carAvailabilityRepository = carAvailabilityRepository;
        this.userFeedbackRepository = userFeedbackRepository;
    }

    public List<HostModel> getAllHosts(){
        return hostRepository.findAll();
    }

    public Optional<HostModel> getHostById(Long id) {
        Optional<HostModel> hostToFind = hostRepository.findById(id);
        if (hostToFind.isEmpty()) {
            return Optional.empty();
        }
        return hostToFind;
    }

    public HostModel getHostByUserId(Long id) {
        List<HostModel> hostToFind = hostRepository.findHostByUserId(id);
        if (hostToFind.isEmpty()) {
            return null;
        }
        return hostToFind.get(0);
    }

    public int registerHost(Map<String, String> body) {
        Optional<UserModel> userToFind = userRepository.findById(Long.valueOf(body.get("userId")));
        if (userToFind.isEmpty()){
            return 404;
        }
        String bankAccountNumber = body.get("bankAccountNumber");
        String bankAccountName = body.get("bankAccountName");
        hostRepository.save(new HostModel(bankAccountNumber, bankAccountName, userToFind.get()));
        return 200;
    }

    public int editHost(Map<String, String> body) {
        Optional<HostModel> hostToFind = hostRepository.findById(Long.valueOf(body.get("id")));
        if(hostToFind.isEmpty()) {
            return 404;
        }
        HostModel host = hostToFind.get();
        host.setBankAccountNumber(body.get("bankAccountNumber"));
        host.setBankAccountName(body.get("bankAccountName"));
        hostRepository.save(host);
        return 200;
    }

    public int deleteHost(Long id) {
        if(hostRepository.findById(id).isPresent()) {
            List<VehicleModel> vehicles = vehiclesRepository.getVehicleByOwnerId(id);
            for (VehicleModel vehicle : vehicles) {
                carImagesRepository.deleteCarImageByCarId(vehicle.getId());
                carFeedbackRepository.deleteCarFeedbackByCarId(vehicle.getId());
                carReservationRepository.deleteReservationByVehicleId(vehicle.getId());
                carAvailabilityRepository.deleteCarAvailabilityByCarId(vehicle.getId());

            }
            userFeedbackRepository.deleteUserFeedbackByHostId(id);
            vehiclesRepository.deleteVehicleByOwnerId(id);
            hostRepository.deleteHostByUserId(hostRepository.findById(id).get().getUser().getId());
            return 200;
        }
        return 404;
    }
}
