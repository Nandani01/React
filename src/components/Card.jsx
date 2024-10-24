import React from 'react'

const Card = (props) => {
    console.log(props.value);
    return (
        <div className="h-56 w-56 border border-solid border-black">
            <img className="h-1/2 w-full"
            src={props.value.image} alt="" srcset="" />       
            <div className="bg-purple-200 h-1/2 text-color-green p-2">
                <p>{props.value.restaurant_name}</p>
                <p>{props.value.rating }✨</p>
                
                <p className='line-clamp-1'>{props.value.dishes_offered.join(',')}</p>
            </div>
        </div>
    )
}

export default Card;