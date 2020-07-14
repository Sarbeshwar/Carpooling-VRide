package com.example.demo.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ShareVehicle {
    @Id
    int id;
    String Name;
    String Cartype;
    String Starttime;
    String Returntime;
    String origin;
    String Destination;
    String phonenumber;
    int price;

    public ShareVehicle() {
        super();
        // TODO Auto-generated constructor stub
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "ShareVehicle [Name=" + Name + ", Cartype=" + Cartype + ", Starttime=" + Starttime + ", Returntime="
                + Returntime + ", origin=" + origin + ", Destination=" + Destination + ", phonenumber=" + phonenumber + ", Price=" +price+ "]";
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getCartype() {
        return Cartype;
    }

    public void setCartype(String cartype) {
        Cartype = cartype;
    }

    public String getStarttime() {
        return Starttime;
    }

    public void setStarttime(String starttime) {
        Starttime = starttime;
    }

    public String getReturntime() {
        return Returntime;
    }

    public void setReturntime(String returntime) {
        Returntime = returntime;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return Destination;
    }

    public void setDestination(String destination) {
        Destination = destination;
    }


    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
