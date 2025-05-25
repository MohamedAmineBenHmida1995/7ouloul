package org.carpark.service;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.carpark.model.User;

@ApplicationScoped
public class UserService {

    @PersistenceContext
    EntityManager em;

    @Transactional
    public void createUser(User user) {
        em.persist(user);
    }
}
