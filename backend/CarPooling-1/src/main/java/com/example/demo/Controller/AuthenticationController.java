package com.example.demo.Controller;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;
import com.example.demo.config.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class AuthenticationController {

    @Autowired
    private UserRepository ur;

//    @GetMapping("/employees/all")
//    public List<User> getAllEmployees() {
//        return ur.findAll();
//    }
//
//    @GetMapping("/employees/{email_address}")
//    public ResponseEntity<User> getEmployeeById(@PathVariable(value = "email_address ") String email_address)
//            throws ResourceNotFoundException {
//        User user = ur.findById(email_address).orElseThrow(() -> new ResourceNotFoundException("Employee not found for this email :: " + email_address));
//        return ResponseEntity.ok().body(user);
//    }

    @PostMapping("/employees")
    public ResponseEntity<User> login(@RequestBody User user)
            throws ResourceNotFoundException {
        System.out.println(user);
        User userInDB = ur.login(user);
//        return ResponseEntity.ok().body(user);
        return ResponseEntity.ok().body(userInDB);
    }
//
//    @PostMapping("/employees/create")
//    public User createEmployee(@Valid @RequestBody User user) {
//        return ur.save(user);
//    }
//
//    @PutMapping("/employees/update/{Email_address}")
//    public ResponseEntity<User> updateEmployee(@PathVariable(value = "Email_address") String Email_address,
//                                               @Valid @RequestBody User userDetails) throws ResourceNotFoundException {
//        User user = ur.findById(Email_address).orElseThrow(() -> new ResourceNotFoundException("Employee not found for this email :: " + Email_address));
//        user.setName(userDetails.getName());
//        user.setEmail_address(userDetails.getEmail_address());
//        user.setPassword(userDetails.getPassword());
//        user.setId(userDetails.getId());
//        final User updatedUser = ur.save(user);
//        return ResponseEntity.ok(updatedUser);
//    }
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
}
