package com.example.demo.Service;

import com.example.demo.Entity.Transactions;
import com.example.demo.Repository.Transactionrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class Transactionimpl implements TransationS{
    @Autowired
    private Transactionrepo tr;
    @Transactional
    @Override
    public List<Transactions> get() {
        return tr.get();
    }
    @Transactional
    @Override
    public void save(Transactions ts) {
        tr.save(ts);
    }
    @Transactional
    @Override
    public void delete(int id) {
        tr.delete(id);
    }
}
