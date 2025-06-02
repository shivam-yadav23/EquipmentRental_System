import { useEffect, useState } from 'react';
import { useWishList } from '../contexts/WishListContext';
import { equipmentData } from '../assets/assets';

const WishList = () => {
  const { wishListCount, wishListItems, removeFromWishList } = useWishList();
  const [wishListArray, setWishListArray] = useState([]);

  const getWishList = () => {
    let tempArray = [];
    for (const key in wishListItems) {
      const equipment = equipmentData.find(item => String(item._id) === String(key));
      if (equipment) {
        tempArray.push(equipment);
      } else {
        console.warn(`Item with ID ${key} not found in equipmentData`);
      }
    }
    setWishListArray(tempArray);
  };

  useEffect(() => {
    getWishList();
  }, [wishListItems]);

  console.log('Wishlist Array Length:', wishListArray.length);
  console.log('Wishlist Item Count:', Object.keys(wishListItems).length);

  return (
    <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">
      <div className="flex-1 ">
        <h1 className="text-3xl font-medium mb-6">
          WishList <span className="text-sm text-indigo-500">{wishListCount} items</span>
        </h1>

        {wishListArray.length === 0 ? (
          <p className="text-gray-500">Your wishlist is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
              <p className="text-left">Equipment Details</p>
              <p className="text-center">Subtotal</p>
              <p className="text-center">Action</p>
            </div>

            {wishListArray.map((equipment) => (
              equipment ? (
                <div key={equipment._id} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
                  <div className="flex items-center md:gap-6 gap-3">
                    <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded">
                      <img
                        className="max-w-full h-full object-cover"
                        src={equipment.images?.[0]}
                        alt={equipment.name}
                      />
                    </div>
                    <div>
                      <p className="hidden md:block font-semibold">{equipment.name}</p>
                      <div className="font-normal text-gray-500/70">
                        <div className='flex items-center'>
                          <p>Qty: 1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-center">${equipment.rental_price}</p>
                  <button
                    onClick={() => removeFromWishList(equipment._id)}
                    className="cursor-pointer mx-auto"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
                        stroke="#FF532E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              ) : null
            ))}

            <button className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium">
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1"
                  stroke="#615fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Continue Exploring
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WishList;
