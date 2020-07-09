package com.example.demo.Service;

import com.example.demo.Entity.ShareVehicle;
import com.example.demo.Repository.ShareRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ShareService implements Share {

    @Autowired
    private ShareRepo sr;

    @Transactional
    @Override
    public List<ShareVehicle> get() {
        return sr.get();
    }

    @Transactional
    @Override
    public ShareVehicle get(String Name) {
        return sr.get(Name);
    }

    @Transactional
    @Override
    public void save(ShareVehicle sv) {
        sr.save(sv);
    }

    @Transactional
    @Override
    public void delete(String Name) {
        sr.delete(Name);
    }

//    public ShareVehicle getFromDestination(String destination) {
//        ShareVehicle Obj = sr.getFromDestination(destination);
//        if (Obj == null) {
//            throw new RuntimeException("User not found for the Name:" + Name);
//        }
//        return Obj;
//    }

}
