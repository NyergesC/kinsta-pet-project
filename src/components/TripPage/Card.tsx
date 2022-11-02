import React , {useState} from 'react'
import {CardS, LeftSide, Img,RightSide, Details} from './TripPagestyle'
import {Trip} from '../Types'
import { Modal } from 'antd';
import Trips from '../Trips/Trips';



export const Card = ({trip}:{trip: Trip} )=> {
    
    const [isModalOpen, setIsModalOpen] = useState(false);  
    
    const showReviews = () => {
        setIsModalOpen(true);
    };
    
    const handleOk = () => {
        setIsModalOpen(false);
    };
  return (
            <CardS key={trip.id}>
            <LeftSide>                   
            <Img src={require(`./images/${trip.src}`)} alt={trip.alt} />
        </LeftSide>
        <RightSide>
            <h6>Category: {trip.tripCategory.name}</h6>
            <h2>{ trip.destination }</h2>
            <p>{ trip.description }</p>         
            <Details>
                <div>
                    <h4>Distance:</h4>
                    <p>{trip.distance}</p>
                </div>
                <div>
                    <h4>Duration:</h4>
                    <p>{trip.duration}</p>
                </div>
            </Details> 
            <button onClick={showReviews}>Show Reviews</button> 

            <Modal
                title="Reviews"
                onOk={handleOk}
                visible={isModalOpen}
                onCancel={handleOk}
            >

                <p>{trip.reviews.text}</p>
                
            </Modal>
        </RightSide>         

        </CardS>
  )
}

