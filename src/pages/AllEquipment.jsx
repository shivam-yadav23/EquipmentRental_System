import React, { useState, useEffect } from 'react'
import EquipmentCard from '../components/Equipment/EquipmentCard'
import { useEquipment } from '../contexts/EquipmentContext.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';

const AllEquipment = () => {

    const { equipment } = useEquipment();
    const { searchQuery } = useAuth();
    const [filteredEquipments, setFilteredEquipments] = useState([]);

    useEffect(() => {
      if(searchQuery.length > 0){
        setFilteredEquipments(equipment.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())))
      }else{
        setFilteredEquipments(equipment);
      }
    },[equipment, searchQuery]);

    console.log(equipment.length);


  return (
    <div className='mt-16 mx-16 flex flex-col'>
        <div className='flex flex-col items-end w-max'>
            <p className='text-2xl font-medium uppercase'>All Equipments</p>
            <div className='w-16 h-0.5 bg-primary rounded-full'>
            </div>
        </div>
        <div className='grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 gap-3
        md:gap-6 lg:grid-cols-4 mt-6'>
            {filteredEquipments.map((equipment, index)=>(
                <EquipmentCard key={index} Equipment={equipment} />
            ))}
        </div>
    </div>
  )
}

export default AllEquipment;