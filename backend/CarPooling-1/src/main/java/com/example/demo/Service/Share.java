package com.example.demo.Service;

import java.util.List;

import com.example.demo.Entity.ShareVehicle;

public interface Share {
    List<ShareVehicle> get();

    ShareVehicle get(String Name);

    void save(ShareVehicle sv);

    void delete(String Name);
}
