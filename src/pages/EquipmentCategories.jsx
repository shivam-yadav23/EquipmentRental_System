import React from 'react'
import { useParams } from 'react-router-dom'
import { equipmentData } from '../assets/assets.js';
import { categories } from '../assets/assets.js';
import EquipmentCard from '../components/Equipment/EquipmentCard.jsx'

const EquipmentCategories = () => {
    const { category } = useParams();
    const searchCategory = categories.find((item)=>item.path.toLowerCase() === category);
    const filteredEquipments = equipmentData.filter((item)=> item.category.toLowerCase() === category);
  return (
    <div className='mt-16'>
        {searchCategory && (
            <div className='flex flex-col items-end w-max px-8'>
                <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>

            </div>
        )}
        {filteredEquipments.length > 0 ? (
            <div className='grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 
            lg:grid-col-4 gap-3 md:gap-6 mt-10 px-8'>
                {filteredEquipments.map((equipment)=>(
                    <EquipmentCard key={equipment.id} Equipment={equipment} />
                ))}
            </div>
        ) : (
            <div className='flex items-center justify-center h-[60vh]'>
                <p className='text-2xl font-medium text-primary'>No Equipments found in this category.</p>
            </div>
        )}
    </div>
  )
}

export default EquipmentCategories;