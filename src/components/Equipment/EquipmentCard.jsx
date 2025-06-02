import React from 'react'
import { Images } from '../../assets/assets.js';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { useWishList } from '../../contexts/WishListContext.jsx';

const EquipmentCard = ({Equipment}) => {
    const { navigate, user } = useAuth();
    const { addToWishList } = useWishList();
  return (
    <div onClick={()=> navigate(`/equipments/${Equipment.category.toLowerCase()}/${Equipment.id}`)} className="p-2 mb-10 bg-white rounded-lg shadow-sm text-sm max-w-96 w-full">
        <img className="rounded-md max-h-35 w-full object-contain" src={Equipment.images[0]} alt={Equipment.name} />
        <p className="text-gray-700 text-xl font-semibold ml-2 mt-2">{Equipment.name}</p>
        <p className='text-gray-500 text-md ml-2 mt-2'>Status: {Equipment.status}</p>
        <p className='text-gray-500 text-md ml-2 mt-2'>Condition: {Equipment.condition}</p>
        <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-primary">
                        <span className='text-gray-500 text-lg font-medium mr-3'>Price</span>${Equipment.rental_price} <span className="text-gray-500 md:text-sm text-xs line-through">${Equipment.rental_price + 20}</span>
                    </p>
                    <div className="text-primary">
                        <button className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 md:w-[80px] w-[64px] h-[34px] rounded cursor-pointer"
                            onClick={()=> {
                                if(user) addToWishList(Equipment._id);
                                else navigate("/login");
                                }} >
                                <img className='h-6 w-6' src={Images.WishList_icon} alt="wishList_icon" />
                                Add
                            </button>
                    </div>
        </div>
    </div>
  )
}

export default EquipmentCard;