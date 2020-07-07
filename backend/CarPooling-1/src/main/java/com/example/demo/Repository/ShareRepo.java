package com.example.demo.Repository;

import java.util.List;

import com.example.demo.Entity.ShareVehicle;

public interface ShareRepo {
    List<ShareVehicle> get();

    ShareVehicle get(String Name);

    void save(ShareVehicle sv);

    void delete(String Name);
}
