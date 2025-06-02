import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRentals } from '../../contexts/RentalsContext';
import { addDays } from 'date-fns';
import { useEquipment } from '../../contexts/EquipmentContext';
import { useParams } from 'react-router-dom';

const RentalOrderFrom = () => {
    const { id } = useParams();

    const [startDate, setStartDate] = useState(null);
    const [days, setDays] = useState(null);
    const { setShowRentalForm } = useRentals();
    const { addRental } = useEquipment();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");


   const onSubmitHandler = (e) => {
   
    e.preventDefault();
    
    const customerId = currentCustomerId;   
    const startDateISO = startDate;         
    const daysCount = days;                

    const endDate = addDays(parseISO(startDateISO), daysCount);

    const status = isToday(parseISO(startDateISO)) ? "Rented" : "Reserved";

    const rental = {
        equipmentId: id,
        customerId,
        startDate: startDateISO,
        endDate: endDate.toISOString().split("T")[0], 
        status,
    };

    addRental(rental);

};

  return (
    <div onClick={()=>setShowRentalForm(false)} className='fixed top-0 bottom-0 left-0 right-0 z-30 flex justify-center bg-black/50'>
        <form onSubmit={onSubmitHandler} onClick={(e)=>e.stopPropagation()} className='h-140 w-90 mt-10 rounded-2xl border flex flex-col justify-center item-center p-10 gap-4 bg-white'>
            <div>
                <p className='text-md m-2' >Name</p>
                <input onChange={(e)=>setName(e.target.value)} className='rounded-md h-8 w-full pl-4 border border-gray-300' value={name} placeholder='Enter you name' required/>
            </div>
            
            <div>
                <p className='text-md m-2' >Email</p>
                <input onChange={(e)=>setEmail(e.target.value)} className='rounded-md h-8 w-full pl-4 border border-gray-300' value={email} type="email" placeholder='Enter you email' />
            </div>
            
            <div>
                <p className='text-md m-2' >Mobile Number</p>
                <input onChange={(e)=>setContact(e.target.value)} className='rounded-md h-8 w-full pl-4 border border-gray-300' value={contact} type="tel" placeholder='Enter your mob number' />
            </div>
            
            <div>
                <p className='text-md m-2' >Select start date</p>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="When do you need equipment?"
                    className="date-picker-input rounded-md h-8 w-full pl-4 border text-sm font-normal border-gray-300"
                    wrapperClassName='w-full'
                    required
                />
            </div>

            <div>
            <p className="text-md font-medium mb-1">Estimated number of days</p>
            <input
                type="number"
                inputMode="numeric"
                onChange={(e) => {
                    const duration = parseInt(e.target.value, 10);
                    setDays(duration);
                }}
                className="text-dark rounded-md border border-gray-300 h-8 w-full outline-none pl-4 pr-10 py-3.5 text-sm font-normal backdrop-blur duration-200 ease-in-out"
                required
                max="365"
                placeholder="Enter the rental duration in days"
                autoFocus
            />
            </div>
            <button className="bg-primary w-50 h-10 hover:bg-primary-dull transition-all text-white ml-8 py-2 rounded-md cursor-pointer">
                Rent Now
            </button>

        </form>
    </div>
  )
}

export default RentalOrderFrom