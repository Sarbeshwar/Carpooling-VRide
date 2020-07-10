package com.example.demo.Repository;

import com.example.demo.Entity.User;

public interface UserRepository {

    User login(User user);

    boolean signUp(User user);

}
