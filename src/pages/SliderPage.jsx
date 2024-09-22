const sliderImages = [
  {
    image:
      "https://dummyjson.com/image/600x400/592b27?fontFamily=pacifico&text=Nimarco",
    title: "Nimarco",
  },
  {
    image:
      "https://dummyjson.com/image/600x400/2d0266?fontFamily=pacifico&text=ArcoRuby",
    title: "ArcoRuby",
  },
  {
    image:
      "https://dummyjson.com/image/600x400/331203?fontFamily=pacifico&text=NimaYaghouti",
    title: "NimaYaghouti",
  },
  {
    image:
      "https://dummyjson.com/image/600x400/282828?fontFamily=pacifico&text=BingArco",
    title: "BingArco",
  },
];

import Slider from "../components/view/Slider";

const SliderPage = () => {
  return <Slider slides={sliderImages} />;
};

export default SliderPage;
