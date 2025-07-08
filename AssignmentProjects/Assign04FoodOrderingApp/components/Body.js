import RestaurantCard from "./RestaurantCard";
const Body = ({ resList }) => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                 {resList.map((restaurant, id) => (
                 <RestaurantCard key={id} resData={restaurant} />
        ))}
            </div>
        </div>
    );
}

export default Body;