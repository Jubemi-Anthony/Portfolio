import { useSelector} from 'react-redux';
import Carousel from "react-multi-carousel";
import { shuffle } from 'lodash';

import './Quotes.css';
import './Background/Background.css'
import "react-multi-carousel/lib/styles.css";
import Spans from './Background/Spans';

export default function Quotes(props){
    const scatteredQuotes = useSelector((state) => state.quotes);
    const quotes = shuffle(scatteredQuotes);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          partialVisibilityGutter: 0 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          partialVisibilityGutter: 0 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 0 // this is needed to tell the amount of px that should be visible.
        }
      }
    return(
        <section className="Quotes">
            <div id="small">
              <div className="background">
                  <Spans/>
                  <Carousel 
                  responsive={responsive}
                  infinite={true}
                  autoPlay={props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={7000}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  partialVisible={true}
                  >
                      {
                      quotes.map((quote) =>(
                          <div key={quote.id} className="main">
                          <div className='holder'>
                              <p>"</p>
                              <p>{quote.quote.quote}</p>
                              <img src={quote.quote.image} alt="Author" className="icon" />
                              <p className='aut'>{quote.quote.author}</p>
                          </div>
                          </div> 

                      ))
                      }
                  </Carousel> 
                  </div>
              </div>
        </section>
    )
}