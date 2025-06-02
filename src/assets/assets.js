import Scaffolding_img from './Scaffolding.png';
import Scissor_lift_img from './Scissor_lift.png';
import Single_mast_goodlift_img from './Single_mast_goodlift.png';
import Straight_boom_lift0_img from './Straight_boom_lift0.png';
import Straight_boom_lift1_img from './Straight_boom_lift1.png';
import Straight_boom_lift2_img from './Straight_boom_lift2.png';
import Straight_boom_lift3_img from './Straight_boom_lift3.png';
import Straight_boom_lift4_img from './Straight_boom_lift4.png';
import Telehandler_img from './Telehandler.png';
import Vehicle_mounted_boom_lift_img from './Vehicle_mounted_boom_lift.png';
import Brush_Cutter_img from './Brush_Cutter.png';
import Tractor_img from './Tractor.png';
import Riding_Mower_img from './Riding_Mower.png';
import Dumpster_img from './Dumpster.png';
import RideOn_Scrubber_img from './Rideon_Scrubber.png';
import TruckMounted_Swipper_img from './TruckMounted_Swipper.png';
import Walk_behind_Scrubber_img from './Walk_behind_Scrubber.png';
import Auger_img from './Auger.png';
import Cart_icon from './cart_icon.svg'
import Concrete_Mixer_img from './Concrete_Mixer.jpg'
import logo from './logo.svg'
import profile_icon from './profile_icon.png'
import WishList_icon from './WishList_icon.png'
import Concrete_Pumps from './Concrete_Pumps.png'
import Portable_Concrete_Mixer from './Portable_Concrete_Mixer.png'
import SelfLoading_Concrete_Mixer from './SelfLoading_Concrete_Mixer.png'
import Main_Banner from './Main_Banner.png'
import black_arrow_icon from './black_arrow_icon.svg'

export const Images = {
  logo,
  Main_Banner,
  profile_icon,
  black_arrow_icon,
  WishList_icon,
  Concrete_Pumps,
  Portable_Concrete_Mixer,
  SelfLoading_Concrete_Mixer,
  Scaffolding: Scaffolding_img,
  Scissor_lift: Scissor_lift_img,
  Single_mast_goodlift: Single_mast_goodlift_img,
  Straight_boom_lift0: Straight_boom_lift0_img,
  Straight_boom_lift1: Straight_boom_lift1_img,
  Straight_boom_lift2: Straight_boom_lift2_img,
  Straight_boom_lift3: Straight_boom_lift3_img,
  Straight_boom_lift4: Straight_boom_lift4_img,
  Telehandler: Telehandler_img,
  Vehicle_mounted_boom_lift: Vehicle_mounted_boom_lift_img,
  Brush_Cutter: Brush_Cutter_img,
  Tractor: Tractor_img,
  Riding_Mower: Riding_Mower_img,
  Dumpster: Dumpster_img,
  Rideon_Scrubber: RideOn_Scrubber_img,
  TruckMounted_Swipper: TruckMounted_Swipper_img,
  Walk_behind_Scrubber: Walk_behind_Scrubber_img,
  Auger: Auger_img,
  Cart_icon: Cart_icon,
  Concrete_Mixer: Concrete_Mixer_img
};

export const categories = [
  {
    text: "Aerial Work",
    path: "Aerial_Work",
    image: Straight_boom_lift0_img,
    bgColor: "#fff"
  },
  {
    text: "Agriculture",
    path: "Agriculture",
    image: Tractor_img,
    bgColor: "#fff"
  },
  {
    text: "Cleaning",
    path: "Cleaning",
    image: RideOn_Scrubber_img,
    bgColor: "#fff"
  },
  {
    text: "Concrete and Masonry",
    path: "Concrete_and_Masonry",
    image: Concrete_Mixer_img,
    bgColor: "#fff"
  }
];



export const equipmentData = [
  {
    id: "1",
    name: "Straight Boom Lift",
    category: "Aerial_Work",
    rental_price: 200,
    images: [
      Images.Straight_boom_lift0,
      Images.Straight_boom_lift1,
      Images.Straight_boom_lift2,
      Images.Straight_boom_lift3,
      Images.Straight_boom_lift4
    ],
    description: [
      "The straight boom lift offers extended reach and precise positioning for elevated tasks.",
      "Designed for outdoor construction and industrial maintenance with reliable performance.",
      "It provides excellent maneuverability and stability, ensuring operator safety at height."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "2",
    name: "Scaffolding",
    category: "Aerial_Work",
    rental_price: 50,
    images: [Images.Scaffolding],
    description: [
      "Durable scaffolding built from high-grade materials for safe elevated access.",
      "Ideal for painting, masonry, and other construction-related work.",
      "The modular design allows for easy setup and configuration at various heights."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "3",
    name: "Scissor lift",
    category: "Aerial_Work",
    rental_price: 120,
    images: [Images.Scissor_lift],
    description: [
      "Compact scissor lift perfect for indoor maintenance and warehouse tasks.",
      "Features a stable platform with vertical lifting capabilities.",
      "Battery-powered and easy to operate in tight spaces for efficient workflow."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "4",
    name: "Single Mast Goodlift",
    category: "Aerial_Work",
    rental_price: 90,
    images: [Images.Single_mast_goodlift],
    description: [
      "Single mast goods lift designed for light-duty material transportation.",
      "Suitable for retail, warehouses, and low-rise building logistics.",
      "Offers reliable lifting with minimal footprint and user-friendly controls."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "5",
    name: "Telehandler",
    category: "Aerial_Work",
    rental_price: 180,
    images: [Images.Telehandler],
    description: [
      "A powerful telehandler equipped with a telescopic boom for extended reach.",
      "Useful for moving heavy materials in construction and agriculture.",
      "Combines the features of a forklift and crane, boosting on-site efficiency."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "6",
    name: "Vehicle Mounted Boom Lift",
    category: "Aerial_Work",
    rental_price: 300,
    images: [Images.Vehicle_mounted_boom_lift],
    description: [
      "Mounted on a truck chassis, this boom lift is ideal for mobile operations.",
      "Suitable for electrical work, signage, and urban infrastructure maintenance.",
      "Allows quick deployment to various locations with easy road mobility."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "7",
    name: "Brush Cutter",
    category: "Agriculture",
    rental_price: 30,
    images: [Images.Brush_Cutter],
    description: [
      "The brush cutter is designed to tackle thick grass and tough undergrowth.",
      "Ideal for landscaping, gardening, and clearing roadside vegetation.",
      "Lightweight yet powerful, ensuring ease of use over extended periods."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "8",
    name: "Tractor",
    category: "Agriculture",
    rental_price: 150,
    images: [Images.Tractor],
    description: [
      "Heavy-duty tractor built for demanding agricultural and hauling work.",
      "Equipped with multiple attachments for plowing, tilling, and transporting loads.",
      "Reliable performance with fuel efficiency and robust mechanical support."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "9",
    name: "Riding Mower",
    category: "Agriculture",
    rental_price: 60,
    images: [Images.Riding_Mower],
    description: [
      "Riding mower ideal for trimming large lawns and turf areas effortlessly.",
      "Provides comfort and ease with seated operation and wide cutting deck.",
      "Efficient for both residential and commercial landscaping tasks."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "10",
    name: "Dumpster",
    category: "Cleaning",
    rental_price: 40,
    images: [Images.Dumpster],
    description: [
      "Heavy-duty dumpster ideal for managing construction and household waste.",
      "Made with reinforced steel for long-term durability and outdoor use.",
      "Essential for renovation projects, cleanups, and bulk disposal tasks."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "11",
    name: "Ride-on Scrubber",
    category: "Cleaning",
    rental_price: 70,
    images: [Images.Rideon_Scrubber],
    description: [
      "Efficient ride-on floor scrubber for large industrial cleaning jobs.",
      "Delivers high productivity with minimum operator fatigue.",
      "Built-in water tanks and powerful scrub heads ensure spotless results."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "12",
    name: "TruckMounted Swipper",
    category: "Cleaning",
    rental_price: 250,
    images: [Images.TruckMounted_Swipper],
    description: [
      "Truck-mounted sweeper designed for cleaning streets and parking lots.",
      "Equipped with rotating brushes, vacuum system, and dust suppression.",
      "Highly efficient for municipalities, airports, and industrial parks."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "13",
    name: "Walk-Behind Scrubber",
    category: "Cleaning",
    rental_price: 55,
    images: [Images.Walk_behind_Scrubber],
    description: [
      "Compact walk-behind floor scrubber for cleaning small to medium spaces.",
      "Lightweight and easy to maneuver around furniture and equipment.",
      "Ideal for hospitals, schools, and retail environments with high foot traffic."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "14",
    name: "Auger",
    category: "Agriculture",
    rental_price: 65,
    images: [Images.Auger],
    description: [
      "High-torque auger ideal for digging post holes, trenches, and foundations.",
      "Operates effectively in various soil types with replaceable drill bits.",
      "Perfect for fencing, planting, and construction tasks needing deep boring."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "15",
    name: "Concrete Mixer",
    category: "Concrete_and_Masonry",
    rental_price: 100,
    images: [Images.Concrete_Mixer],
    description: [
      "Efficient concrete mixer for on-site mixing of cement, sand, and gravel.",
      "Portable and easy to operate, suitable for small to medium construction jobs.",
      "Delivers consistent concrete mixture, improving work quality and speed."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "16",
    name: "Concrete Pumps",
    category: "Concrete_and_Masonry",
    rental_price: 250,
    images: [Images.Concrete_Pumps],
    description: [
      "High-performance concrete pumps for transporting liquid concrete.",
      "Ideal for high-rise and large-scale projects with hard-to-reach pour sites.",
      "Ensures continuous concrete flow and reduces manual labor."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "17",
    name: "Portable Concrete Mixer",
    category: "Concrete_and_Masonry",
    rental_price: 90,
    images: [Images.Portable_Concrete_Mixer],
    description: [
      "Compact mixer for small-scale concrete jobs and renovations.",
      "Lightweight and easy to transport across sites.",
      "Perfect for home improvement or light commercial use."
    ],
    status: "Available",
    condition: "Good"
  },
  {
    id: "18",
    name: "Self-Loading Concrete Mixer",
    category: "Concrete_and_Masonry",
    rental_price: 300,
    images: [Images.SelfLoading_Concrete_Mixer],
    description: [
      "Automated mixer with self-loading mechanism to reduce labor.",
      "Mixes, loads, and transports concrete with a single operator.",
      "Highly efficient for remote and high-demand construction sites."
    ],
    status: "Available",
    condition: "Good"
  }
];


export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];