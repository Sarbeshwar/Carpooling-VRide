package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.Entity.ShareVehicle;
import com.example.demo.Repository.ShareRepo;

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

}
