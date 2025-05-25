package org.carpark.model;

import jakarta.persistence.*;

@Entity
@Table(name = "\"app_user\"")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    public String nom;
    public String prenom;
    public String nationalite;
    public int age;
}
