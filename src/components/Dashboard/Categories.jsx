import React from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { categories } from '../../assets/assets';

const Categories = () => {
    const { navigate } = useAuth();
   return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium px-10'>Categories</p>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mt-6 gap-8 px-10'>
        {categories.map((category)=>(
            <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center' style={{backgroundColor: category.bgColor}}
            onClick={()=>{
                navigate(`/equipments/${category.path.toLowerCase()}`);
                scrollTo(0, 0)
            }}
            >
            <img src={category.image} alt={category.text} 
            className='group-hover:scale-108 transition max-w-28' />
            <p className='text-sm font-medium'>{category.text}</p>
        </div>
        ))}
        
    </div>
        
    </div>
    
  )
}

export default Categories