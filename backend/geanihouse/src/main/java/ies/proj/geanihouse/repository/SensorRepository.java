package ies.proj.geanihouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ies.proj.geanihouse.model.Sensor;

import java.util.List;
@Repository
public interface SensorRepository extends JpaRepository<Sensor, Long>{

    List<Sensor> findAllByDivision_id(long id);
}