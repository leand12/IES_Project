package ies.proj.geanihouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ies.proj.geanihouse.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long>{

    //User findByEmail(String email);

    User findByUsername(String username);
    User findByUsernameAndPassword(String username, String password);
}