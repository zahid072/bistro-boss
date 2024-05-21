import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './banner.css'
import img1 from "../../assets/home/01.jpg";
import img2 from "../../assets/home/02.jpg";
import img3 from "../../assets/home/03.jpg";
import img4 from "../../assets/home/04.jpg";
import img5 from "../../assets/home/05.jpg";
import img6 from "../../assets/home/06.jpg";

const Banner = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div>
      <Carousel infiniteLoop={true} autoPlay={true} interval={2000}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
