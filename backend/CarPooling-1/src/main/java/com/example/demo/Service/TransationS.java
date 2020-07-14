package com.example.demo.Service;

import com.example.demo.Entity.Transactions;

import java.util.List;

public interface TransationS {

    List<Transactions> get();
    void save(Transactions ts);
    void delete(int id);
}
