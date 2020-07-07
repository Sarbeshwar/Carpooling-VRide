package com.example.demo.Repository;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.ShareVehicle;

@Repository
public class ShareRepoimpl implements ShareRepo {

    @Autowired
    private EntityManager em;

    @Override
    public List<ShareVehicle> get() {
        Session currentSession = em.unwrap(Session.class);
        Query<ShareVehicle> query = currentSession.createQuery("from ShareVehicle", ShareVehicle.class);
        List<ShareVehicle> list = query.getResultList();
        return list;
    }

    @Override
    public ShareVehicle get(String Name) {
        Session currentSession = em.unwrap(Session.class);
        ShareVehicle Obj = currentSession.get(ShareVehicle.class, Name);
        return Obj;
    }

    @Override
    public void save(ShareVehicle sv) {
        Session currentSession = em.unwrap(Session.class);
        currentSession.saveOrUpdate(sv);

    }

    @Override
    public void delete(String Name) {
        Session currentSession = em.unwrap(Session.class);
        ShareVehicle Obj = currentSession.get(ShareVehicle.class, Name);
        currentSession.delete(Obj);

    }

}
