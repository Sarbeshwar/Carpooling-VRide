package com.example.demo.Controller;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;
import com.example.demo.config.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class AuthenticationController {

    @Autowired
    private UserRepository ur;

//
    @PostMapping("/employees")
    public ResponseEntity<User> login(@RequestBody User user)
            throws ResourceNotFoundException {
        System.out.println(user);
        User userInDB = ur.login(user);
//        return ResponseEntity.ok().body(user);
        return ResponseEntity.ok().body(userInDB);
    }

    //

    @GetMapping("/signUpInfo")
    public List<User> get() {
        return ur.get();
    }

    @PostMapping("/signUp")
    public ResponseEntity<HashMap<String, String>> signUp(@RequestBody User user) {
        System.out.println(user);
        HashMap<String, String> response = new HashMap<>();
        if (ur.signUp(user)) {
            response.put("status", "Signup successful, you can login into your account now");
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } else {
            response.put("status", "Could not register");
            return new ResponseEntity<>(response, HttpStatus.FOUND);
        }
    }

    @PostMapping("/update")
    public ResponseEntity<User> update(@RequestBody User user) {
        System.out.println("To update in DB:\n" + user);

        User response = ur.update(user);

        return ResponseEntity.ok().body(response);
    }

//
//    @DeleteMapping("/employees/delete/{Email_address}")
//    public Map<String, Boolean> deleteUser(@PathVariable(value = "Email_address") String Email_address)
//            throws ResourceNotFoundException {
//        User user = ur.findById(Email_address)
//                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + Email_address));
//
//        ur.delete(user);
//        Map<String, Boolean> response = new HashMap<>();
//        response.put("deleted", Boolean.TRUE);
//        return response;
//    }

    @DeleteMapping("/delete/{id}")
    public boolean delete(@PathVariable long id) {
        try {
            ur.delete(id);
        } catch(Exception e) {
            return false;
        }
        return true;
    }
}
