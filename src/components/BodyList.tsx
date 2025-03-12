
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const array = [
  "All Dishes",
  "Appetizers",
  "Salads",
  "Pizzas",
  "Lunch favorites",
  "Main dishes",
  "Fish & Sea foods",
  "Brunch",
  "Side dish",
  "Desserts",
  "Beverages",
];

export const UserCategories = () => {
  return (
    <div className="w-full bg-[#404040]">
      <div className="w-full">
        <h2 className="text-[30px] text-white font-semibold">Categories</h2>
        <Carousel>
          <CarouselContent className="ml-2">
            {array.map((proms, index) => {
              return <CarouselItem className="basis-13 text-[18px] font-normal px-5 py-1 rounded-full bg-white mr-2" key={index}>{proms}</CarouselItem>;
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
//
//
//

