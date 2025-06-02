import React from "react";
import { useParams } from "react-router-dom";
import { equipmentData } from "../../assets/assets.js";
import { useState, useEffect } from "react";
import { useRentals } from "../../contexts/RentalsContext.jsx";
import { useWishList } from "../../contexts/WishListContext.jsx";
import { useAuth } from "../../contexts/AuthContext.jsx";

 const EquipmentDetails = ()=> {
  

    const { id } = useParams();
    const { setShowRentalForm } = useRentals();
    const { addToWishList } = useWishList();
    const { navigate, user } = useAuth();

    const equipment = equipmentData.find((item)=> item.id === id)
    const [thumbnail, setThumbnail] = useState(null);

    useEffect(()=>{
        setThumbnail(equipment?.images[0] ? equipment.images[0] : null)
    }, [equipment])

    return equipment && (
        <div className="flex flex-col justify-center items-center w-full px-15">
            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {equipment.images.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className="border max-w-18 h-18 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <div className="border border-gray-500/30 h-90 max-w-100 rounded overflow-hidden">
                        <img src={thumbnail} alt="Selected product" />
                    </div>
                </div>

                <div className="text-sm w-full ml-10 md:w-1/2">
                    <h1 className="text-4xl text-black/80 ">{equipment.name}</h1>

                    <div className="flex flex-col gap-0.5 mt-1">
                        <p className="text-base ml-2">
                            Status:{" "}
                            <span 
                                className={
                                    equipment.status === "Available"
                                    ? "bg-primary/60 text-gray/20 px-1 rounded"
                                    : equipment.status === "Rented"
                                    ? "bg-red-600 text-gray/20 px-1 rounded"
                                    : "bg-yellow-600 text-gray/20 px-1 rounded"
                                }
                            >
                            {equipment.status}
                            </span>
                        </p>
                        <p className="text-base ml-2">
                            Condition:{" "}
                            <span
                                className={
                                    equipment.condition === "Good"
                                    ? "bg-primary/60 text-gray/20 px-1 rounded"
                                    : equipment.condition === "Bad"
                                    ? "bg-red-400 text-gray/20 px-1 rounded"
                                    : "bg-yellow-400 text-gray/20 px-1 rounded"
                                }
                            >
                            {equipment.condition}
                            </span>
                        </p>
                        </div>



                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">Price: ${equipment.rental_price + 20}</p>
                        <p className="text-2xl font-medium">Price: <span className="text-primary">${equipment.rental_price}</span></p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-2xl font-medium mt-6">About Equipments</p>
                    <ul className="list-disc ml-4 text-black/70 text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
                        {equipment.description.map((desc, index)=>(
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>

                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button onClick={()=>{
                            if(user){
                                addToWishList(equipment._id);
                                navigate("/wishList");
                            }else{
                                navigate("/login");
                            }
                            }} className="w-full py-3.5 cursor-pointer font-medium bg-primary/20 hover:bg-primary/40 text-gray-800/80 hover:bg-gray-200 transition rounded-md" >
                            Add to Wishlist
                        </button>
                        <button onClick={()=>{user? setShowRentalForm(true): navigate("/login")}} className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 rounded-md transition" >
                            Rent now
                        </button>
                    </div>
                </div>
            </div>
            <button 
                onClick={() => navigate("/equipments")} 
                className="text-primary text-lg w-80 rounded-md border border-gray/80 cursor-pointer gap-2 mt-30"
            >
                Explore More Equipments
            </button>

        </div>
    );
}

export default EquipmentDetails;
