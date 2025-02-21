import array from "@/app/data/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Divide } from "lucide-react";


export const UserCategories = () => {
  return (
    <div className="w-full bg-[#404040]">
      <div className="w-full">
        <h2 className="text-[30px] text-[#fff] font-semibold">Categories</h2>
        <Carousel>
          <CarouselContent className="ml-2">
            {array.map((proms, index) => {
              return <CarouselItem className="basis-13 text-[18px] font-normal px-5 py-1 rounded-full bg-white mr-2">{proms}</CarouselItem>;
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
export const aaa = () => {
    return ( <div>
        
    </div>
    )
}
