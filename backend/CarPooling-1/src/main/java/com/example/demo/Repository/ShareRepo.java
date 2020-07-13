package com.example.demo.Repository;

import com.example.demo.Entity.ShareVehicle;

import java.util.List;

public interface ShareRepo {
    List<ShareVehicle> get();

    ShareVehicle get(String Name);

    void save(ShareVehicle sv);

    void delete(int id);

    List<ShareVehicle> getUsingDestination(String Destination);

}
