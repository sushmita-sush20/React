import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const RestaurantCard = () => {
    return(
        <div className="res-card">
            <h3>Swiss Castle</h3>
        </div>
    );
}

const resList = [
  {
    type: "restaurant",
    data: {
        id: "001",
      name: "Swiss Castle",
      cuisines: "Pastries, Cakes",
      avgRating: "4.5 stars",
      deliveryTime: "30 min",
      imgUrl: "https://png.pngtree.com/background/20230519/original/pngtree-chocolate-cakes-hd-wallpaper-580p-picture-image_2655120.jpg"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "002",
      name: "KFC",
      cuisines: "Burgers, Fries",
      avgRating: "4.2 stars",
      deliveryTime: "25 min",
      imgUrl: "https://bv.world/wp-content/uploads/2018/03/FastFood.jpg"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "003",
      name: "Pizza Hut",
      cuisines: "Pizzas, Garlic bread",
      avgRating: "4.4 stars",
      deliveryTime: "30 min",
      imgUrl: "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "004",
      name: "Mehfil",
      cuisines: "Biryani",
      avgRating: "4.4 stars",
      deliveryTime: "40 min",
      imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/2cfbccb17c2119a3a88c7544eb324908"
    }
  },{
    type: "restaurant",
    data: {
        id: "005",
      name: "Udipi Restaurant",
      cuisines: "Idli, Dosa, Vada",
      avgRating: "4.2 stars",
      deliveryTime: "30 min",
      imgUrl: "https://apollosugar.com/wp-content/uploads/2018/12/Masala-Dosa-1024x683.jpg"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "006",
      name: "Cafe Niloufer",
      cuisines: "Tea, Coffee, Cookies",
      avgRating: "4.3 stars",
      deliveryTime: "15 min",
      imgUrl: "https://b.zmtcdn.com/data/pictures/chains/5/18241275/2814816309e747089e254286c0dda5b8.jpg"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "007",
      name: "Dunkin' Donuts",
      cuisines: "Donuts",
      avgRating: "4.0 stars",
      deliveryTime: "20 min",
      imgUrl: "https://tse1.mm.bing.net/th/id/OIP.4W8UJTSMwEemoJqrtooNuQHaFa?pid=Api&P=0&h=180"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "008",
      name: "Baskin-Robbins",
      cuisines: "Ice creams",
      avgRating: "4.4 stars",
      deliveryTime: "30 min",
      imgUrl: "https://tse4.mm.bing.net/th/id/OIP.xVHNvvUbQi7yfWJbazBecAHaE7?pid=Api&P=0&h=180"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "009",
      name: "Bikanervala",
      cuisines: "Namkeen, Sweets, Dryfruits",
      avgRating: "4.2 stars",
      deliveryTime: "35 min",
      imgUrl: "https://tse1.mm.bing.net/th/id/OIP.DqWW_TtJBBCaVlfVvhM3ZgHaFb?pid=Api&P=0&h=180"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "010",
      name: "Boba bhai",
      cuisines: "Bubble tea",
      avgRating: "3.8 stars",
      deliveryTime: "20 min",
      imgUrl: "https://tse3.mm.bing.net/th/id/OIP.YjlBeVzVmj6kGCq_DrP8dAHaE7?pid=Api&P=0&h=180"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "011",
      name: "SUBWAY",
      cuisines: "Sandwiches, wraps",
      avgRating: "4.2 stars",
      deliveryTime: "30 min",
      imgUrl: "https://tse4.mm.bing.net/th/id/OIP.oJxjROr8yB29oc0QJjMQmgHaEB?pid=Api&P=0&h=180"
    }
  },{
    type: "restaurant",
    data: {
        id: "012",
      name: "Delhi Mithai Wala",
      cuisines: "Sweet and Savories",
      avgRating: "4.3 stars",
      deliveryTime: "40 min",
      imgUrl: "https://tse3.mm.bing.net/th/id/OIP.yZE1c7IWGpCAcLWh8UXr-gHaEo?pid=Api&P=0&h=180"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "013",
      name: "Cheesecake & co.",
      cuisines: "Cheesecakes and desserts",
      avgRating: "3.5 stars",
      deliveryTime: "20 min",
      imgUrl: "https://tse4.mm.bing.net/th/id/OIP.Yb8mcUF5s0B3DYj2g43QkAHaF7?pid=Api&P=0&h=180"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "014",
      name: "Thick Shake Factory",
      cuisines: "Beverages, American",
      avgRating: "4.5 stars",
      deliveryTime: "35 min",
      imgUrl: "https://tse3.mm.bing.net/th/id/OIP.0mjiNEMu4h5vqyuCXRr-LgHaHa?pid=Api&P=0&h=180"
    }
  },{
    type: "restaurant",
    data: {
        id: "015",
      name: "Wow! Momo",
      cuisines: "Momos, Chinese, Fast food",
      avgRating: "4.2 stars",
      deliveryTime: "40 min",
      imgUrl: "https://tse4.mm.bing.net/th/id/OIP.4r9Sjwbgff-6W_piKosgDQHaE8?pid=Api&P=0&h=180"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "016",
      name: "Pista House",
      cuisines: "Biryani, Chinese, Desserts",
      avgRating: "4.4 stars",
      deliveryTime: "45 min",
      imgUrl: "https://b.zmtcdn.com/data/pictures/chains/4/21097364/c6cea73eeecd3d97313f7f0826aa1d12.png"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "017",
      name: "The Belgian Waffle Co.",
      cuisines: "Waffle, desserts, Ice Creams",
      avgRating: "4.6 stars",
      deliveryTime: "40 min",
      imgUrl: "https://tse1.mm.bing.net/th/id/OIP.g-z3UIkz2xkhMyssh_vEyQHaEO?pid=Api&P=0&h=180"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "018",
      name: "Bawarchi",
      cuisines: "Biryani, Fast food",
      avgRating: "4.4 stars",
      deliveryTime: "40 min",
      imgUrl: "https://tse2.mm.bing.net/th/id/OIP.fDWEOEHk6trKCevpKK8-LgHaEO?pid=Api&P=0&h=180"
    }
  },{
    type: "restaurant",
    data: {
        id: "019",
      name: "Samosa Singh",
      cuisines: "Snacks, North Indian, Beverages",
      avgRating: "4.0 stars",
      deliveryTime: "40 min",
      imgUrl: "https://tse2.mm.bing.net/th/id/OIP.99u9HNltGkb5aWJ8RAczYwHaE8?pid=Api&P=0&h=180"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "020",
      name: "Raghavendra Tiffins",
      cuisines: "Idli, Dosa, Vada",
      avgRating: "4.3 stars",
      deliveryTime: "40 min",
      imgUrl: "https://tse4.mm.bing.net/th/id/OIP.9xLDElkn4qU8pp0y33tI6AHaEi?pid=Api&P=0&h=180"
    }
  },
  {
    type: "restaurant",
    data: {
        id: "021",
      name: "The Shawarma House",
      cuisines: "Arabaian, Pizzas, Snacks, Pasta",
      avgRating: "3.0 stars",
      deliveryTime: "60 min",
      imgUrl: "https://tse3.mm.bing.net/th/id/OIP.50w8tH-P4kDxuSsEAsafmgHaEo?pid=Api&P=0&h=180"
    }
  }
];


const AppLayout = () => {
    return <div className="app">
        <Header/>
        <Body resList={resList}/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);