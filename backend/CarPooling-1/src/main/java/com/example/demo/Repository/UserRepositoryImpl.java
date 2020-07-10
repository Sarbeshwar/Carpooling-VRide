package com.example.demo.Repository;

import com.example.demo.Entity.User;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository {

    @Autowired
    private EntityManager em;

    public User login(User user) {
        String email = user.getEmail_address();
        String password = user.getPassword();

        Session currentSession = em.unwrap(Session.class);
        Query<User> query = currentSession.createQuery("select u from User u WHERE u.Email_address = :Email AND u.Password = :Password", User.class);
        query.setParameter("Email", email);
        query.setParameter("Password", password);
        List<User> list = query.getResultList();
        System.out.println(list);
        if (list.size() > 0)
            return list.get(0);
        else
            return new User("null", "null", "null");
    }

    @Transactional
    public boolean signUp(User user) {
        String name = user.getName();
        String email = user.getEmail_address();
        String password = user.getPassword();

        Session currentSession = em.unwrap(Session.class);
        Query query = currentSession.createNativeQuery("insert into User (Name,Email_address,Password) VALUES (?,?,?)");
        query.setParameter(1, name);
        query.setParameter(2, email);
        query.setParameter(3, password);

        if (query.executeUpdate() > 0)
            return true;
        else
            return false;
    }
}
