package com.example.demo.Controller;

import com.example.demo.Entity.ShareVehicle;
import com.example.demo.Service.Share;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ShareController {

    @Autowired
    private Share service;

    @PostMapping("/user")
    public ShareVehicle save(@RequestBody ShareVehicle Obj) {
        System.out.println(Obj);
        service.save(Obj);
        return Obj;
    }

    @GetMapping("/userdetails")
    public List<ShareVehicle> get() {
        return service.get();
    }

    @GetMapping("/destination/{Destination}")
    public List<ShareVehicle> get(@PathVariable String Destination) {
        List<ShareVehicle> shareVehicleList = service.getUsingDestination(Destination);
        return shareVehicleList;
    }

    @PutMapping("/user")
    public ShareVehicle update(@RequestBody ShareVehicle Obj) {
        service.save(Obj);
        return Obj;
    }

    @DeleteMapping("/vehicleDelete/{id}")
    public boolean delete(@PathVariable int id) {
        try {
            service.delete(id);
        }
        catch(Exception e)
        {
            return false;
        }
        return true;
    }
}
