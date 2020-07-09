package com.example.demo.Entity;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class User {

    @NotNull(message = "Please enter the name")
    String Name;

    @Email
    @NotNull(message = "Please enter the Email")
    @Column(unique = true)
    String Email_address;

    @Size(min = 5)
    String Password;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    public User() {
        super();
        // TODO Auto-generated constructor stub
    }
    public User(@NotNull(message = "Please enter the name") String name,
                @Email @NotNull(message = "Please enter the Email") String email_address,
                @Size(min = 5) String password) {
        super();
        Name = name;
        Email_address = email_address;
        Password = password;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getEmail_address() {
        return Email_address;
    }

    public void setEmail_address(String email_address) {
        Email_address = email_address;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    @Override
    public String toString() {
        return "Signup [Name=" + Name + ", Email_address=" + Email_address + ", Password=" + Password + "]";
    }

}
