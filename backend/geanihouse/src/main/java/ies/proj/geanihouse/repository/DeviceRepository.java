package ies.proj.geanihouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ies.proj.geanihouse.model.Device;

import java.util.List;

@Repository
public interface DeviceRepository extends JpaRepository<Device, Long>{
    
    List<Device> findAllByDivision_id(long id);
    List<Device> findAllByDivisionIdAndTypeId(long division, long type);
}