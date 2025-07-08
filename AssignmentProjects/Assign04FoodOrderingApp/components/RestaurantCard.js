const RestaurantCard = (props) => {
    const {resData} = props;
    const {imgUrl, name, cuisines, avgRating, deliveryTime} = resData?.data;
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-card" src={resData.data.imgUrl}/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
}

export default RestaurantCard;