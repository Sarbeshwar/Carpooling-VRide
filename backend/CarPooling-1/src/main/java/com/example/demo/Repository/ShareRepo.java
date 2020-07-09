package com.example.demo.Repository;

import com.example.demo.Entity.ShareVehicle;

import java.util.List;

public interface ShareRepo {
    List<ShareVehicle> get();

    ShareVehicle get(String Name);

    void save(ShareVehicle sv);

    void delete(String Name);

    List<ShareVehicle> getUsingDestination(String Destination);

}
