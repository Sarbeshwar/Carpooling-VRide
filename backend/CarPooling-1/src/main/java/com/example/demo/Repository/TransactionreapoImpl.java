package com.example.demo.Repository;

import com.example.demo.Entity.ShareVehicle;
import com.example.demo.Entity.Transactions;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;
@Repository
public class TransactionreapoImpl implements Transactionrepo {

    @Autowired
    private EntityManager em;

    @Override
    public List<Transactions> get() {
        Session currentSession = em.unwrap(Session.class);
        Query<Transactions> query = currentSession.createQuery("from Transactions", Transactions.class);
        List<Transactions> list = query.getResultList();
        return list;
    }

    @Override
    public void save(Transactions ts) {
        Session currentSession = em.unwrap(Session.class);
        currentSession.saveOrUpdate(ts);

    }

    @Override
    public void delete(int id) {
        Session currentSession = em.unwrap(Session.class);
        Transactions Obj = currentSession.get(Transactions.class, id);
        currentSession.delete(Obj);
    }
}
