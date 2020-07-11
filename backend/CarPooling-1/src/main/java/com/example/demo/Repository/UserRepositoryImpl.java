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
//        System.out.println(list);

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

    @Transactional
    public User update(User user) {
//        String email = user.getEmail_address();
//        String password = user.getPassword();

        Session currentSession = em.unwrap(Session.class);

        System.out.println("Checking if user exists in DB or not");

        Query<User> query = currentSession.createQuery("select u from User u WHERE (u.Email_address = :Email OR u.id = :id) AND u.Password = :Password", User.class);
        query.setParameter("Email", user.getEmail_address());
        query.setParameter("id", user.getId());
        query.setParameter("Password", user.getPassword());
        List<User> list = query.getResultList();
//        System.out.println(list);

        if (list.size() > 0) {
            System.out.println("Exists:\n" + list.get(0));

            Query query2 = currentSession.createNativeQuery("Update User SET Name = ?, Email_address = ? , Password = ? WHERE Id = ?");
            query2.setParameter(1, user.getName());
            query2.setParameter(2, user.getEmail_address());
            query2.setParameter(3, user.getPassword());
            query2.setParameter(4, list.get(0).getId());

            if (query2.executeUpdate() > 0)
                return user;
            else
                return new User("null", "null", "null");

        } else {
            System.out.println("User DNE");
            return new User("null", "null", "null");
        }
    }

    public List<User> get() {
        Session currentSession = em.unwrap(Session.class);
        Query<User> query = currentSession.createQuery("from User", User.class);
        List<User> list = query.getResultList();
        return list;
    }
}
