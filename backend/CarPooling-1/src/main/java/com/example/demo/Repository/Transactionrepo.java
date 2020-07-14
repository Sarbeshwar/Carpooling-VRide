package com.example.demo.Repository;

import com.example.demo.Entity.ShareVehicle;
import com.example.demo.Entity.Transactions;

import java.util.List;

public interface Transactionrepo {
    List<Transactions> get();
    void save(Transactions ts);
    void delete(int id);
}
