package com.example.demo.Controller;
import com.example.demo.Service.TransationS;
import com.example.demo.Entity.Transactions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class TransactionController {
    @Autowired
    private TransationS service;

    @PostMapping("/sendTransData")
    public Transactions save(@RequestBody Transactions ts)
    {
        System.out.println(ts);
        service.save(ts);
        return ts;
    }
    @GetMapping("/GettransDetails")
    public List<Transactions> get() {

        return service.get();
    }
    @DeleteMapping("/Deletetrans/{id}")
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
