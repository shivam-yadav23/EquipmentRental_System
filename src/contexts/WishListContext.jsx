import { createContext, useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { equipmentData } from '../assets/assets.js'

const WishListContext = createContext();

export const WishListContextProvider = ({children}) => {

    const [wishListItems, setWishListItems] = useState({});
    const [wishListCount, setWishListCount] = useState(0);


    const addToWishList = (itemId) => {
        let wishListData = structuredClone(wishListItems);

        if (!wishListData[itemId]) {
            wishListData[itemId] = 1;
            setWishListCount(prev => prev + 1);
            setWishListItems(wishListData);
            toast.success("Added to wishlist");
        } else {
            toast("Item already in wishlist", { icon: "⚠️" });
        }
    };


    const removeFromWishList = (itemId) =>{
        let wishListData = structuredClone(wishListItems);

        if(wishListData[itemId]){
            setWishListCount(wishListCount - 1);
            wishListData[itemId] = 0;
            delete wishListData[itemId];
            setWishListItems(wishListData);

            toast.success("removed from WishList");
        }
    }

    const getWishListAmount = ()=>{
        let amount = 0;
        for(const item in wishListItems){
           const itemInfo = equipmentData.find((product)=> product._id === item);
           amount += itemInfo.rental_price;
        }
        return Math.floor(amount * 100) / 100;
    }


  return (
    <WishListContext.Provider value={{addToWishList, removeFromWishList, getWishListAmount, wishListCount, wishListItems }} >
        {children}
    </WishListContext.Provider>
  )
}

export const useWishList = ()=>{
    return useContext(WishListContext);
};