import Caurosel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { styled } from '@mui/material'

// component
import { bannerData } from '../../constants/data';

const Image = styled('img')({
    width: '100%',
    height: 280
})

const responsive = {
    // always show items = 1
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner =  () =>{
    return(
       <Caurosel 
       responsive = {responsive}
       swipeable={false}
       draggable={false}
       infinite={true}
       autoPlay={true}
       autoPlaySpeed={4000}
       keyBoardControl={true}
       slidesToSlide={1}
       dotListClass="custom-dot-list-style"
       itemClass="carousel-item-padding-40-px"
       containerClass="carousel-container"
       >
            {
                bannerData.map(data => (
                    <Image src={data.url} alt="banner" />
                ))
            }
       </Caurosel>
    )
}

export default Banner;