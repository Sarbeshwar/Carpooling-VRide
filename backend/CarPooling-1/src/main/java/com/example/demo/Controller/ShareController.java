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

    @GetMapping("/destination/{destination}")
    public ShareVehicle get(@PathVariable String destination) {
        ShareVehicle Obj = service.get(destination);
        if (Obj == null) {
            throw new RuntimeException("No entry found for the destination :" + destination);
        }
        return Obj;
    }

//    @GetMapping("/user/destination/{destination}")
//    public ShareVehicle getFromDestination(@PathVariable String destination) {
//        ShareVehicle Obj = service.getFromDestination(destination);
//        if (Obj == null) {
//            throw new RuntimeException("User not found for the Name:" + Name);
//        }
//        return Obj;
//    }

    @PutMapping("/user")
    public ShareVehicle update(@RequestBody ShareVehicle Obj) {
        service.save(Obj);
        return Obj;
    }

    @DeleteMapping("/user/{Name}")
    public String delete(@PathVariable String Name) {
        service.delete(Name);
        return "User has been deleted with Nmae:" + Name;
    }
}
