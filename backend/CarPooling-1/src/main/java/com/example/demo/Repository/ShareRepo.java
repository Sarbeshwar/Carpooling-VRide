package com.example.demo.Repository;

import com.example.demo.Entity.ShareVehicle;

import java.util.List;

public interface ShareRepo {
    List<ShareVehicle> get();

    ShareVehicle get(String Name);

    void save(ShareVehicle sv);

    void delete(String Name);

//    @Query("SELECT s FROM Share s WHERE s.Destination = :destination")
//    public ShareVehicle getFromDestination(@Param("destination") String destination);
}
