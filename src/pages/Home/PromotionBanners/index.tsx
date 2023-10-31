import { Carousel } from "@mantine/carousel";

const PromotionBanners = () => {
  return (
    <Carousel
      loop
      withIndicators
      containScroll="keepSnaps"
      draggable
      height={300}
    >
      <Carousel.Slide>
        <div className="h-full flex items-center justify-center bg-slate-100 font-bold text-3xl">
          Promoção 1
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="h-full flex items-center justify-center bg-slate-100 font-bold text-3xl">
          Promoção 2
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="h-full flex items-center justify-center bg-slate-100 font-bold text-3xl">
          Promoção 3
        </div>
      </Carousel.Slide>
    </Carousel>
  );
};

export default PromotionBanners;
