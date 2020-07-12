package com.example.demo.Repository;

import com.example.demo.Entity.User;

import java.util.List;

public interface UserRepository {

    List<User> get();

    User login(User user);

    boolean signUp(User user);

    User update(User user);

    void delete(long id);

}
