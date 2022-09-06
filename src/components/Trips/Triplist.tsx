import { Slide, LeftSide, Img,RightSide, Details} from './Tripstyles'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper';
import { EffectFade } from 'swiper'
import 'swiper/css/bundle'
import 'swiper/css/effect-fade'
import {Link} from "react-router-dom"
import BaseButton from '../../useButton';

type Trips = {
    trips: Trip[]
}

type Trip = {
    destination: string,
    description: string,
    distance: string,
    duration:string, 
    src:string,
    alt:string,
    id:number 
}

const TripList: React.FC<Trips> = ( { trips }) => {

  return (
    <Swiper 
        loop={true}
        speed={800}
        scrollbar={{ draggable:true}}
        centeredSlides={true}
        grabCursor={true}
        autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade] }
        effect={'fade'}
    >
      <>{trips.map((trip:Trip) => {          
          return(
            <SwiperSlide key={trip.id} >
                <Slide>
                    <LeftSide>                   
                        <Img src={require(`./images/${trip.src}`)} alt={trip.alt} />
                    </LeftSide>
                    <RightSide>
                        <h6>Our destinations</h6>
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
                        <BaseButton type="link"><Link to='/apply'>Book now</Link></BaseButton>                                                           
                    </RightSide>
                 
                </Slide>
            </SwiperSlide>
          )
      },         
            
      )}
      </>
    </Swiper>
    
  );
}
 
export default TripList;

