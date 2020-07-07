package com.example.demo.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ShareVehicle {
   @Id
    String Name;
    String Cartype;
    String Starttime;
    String Returntime;
    String origin;
    String Destination;

    public ShareVehicle() {
        super();
        // TODO Auto-generated constructor stub
    }

    @Override
    public String toString() {
        return "ShareVehicle [Name=" + Name + ", Cartype=" + Cartype + ", Starttime=" + Starttime + ", Returntime="
                + Returntime + ", origin=" + origin + ", Destination=" + Destination + "]";
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

}
