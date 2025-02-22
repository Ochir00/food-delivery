import Image from "next/image";
import arrawahahy from "../app/data/data";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
export function ToggleGroupDemo() {
  return (
    <div className="w-full p-5 bg-white m-5 rounded-lg">
      <h2>Dishes category</h2>
      <div>
        <div className=" flex gap-3 flex-wrap">
          {array.map((torlo, index) => {
            return (
              <div
                key={index}
                className="flex items-center h-[36px] text-black px-2 rounded-full border-[#EF4444] border-[1px]"
              >
                <p>{torlo}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export function Foodplus() {
  return (
    <div>
      {arrawahahy.map((proms, index) => {
        console.log(proms.food?.[0]?.name);
        return (
          <div className="w-full p-5 bg-white m-5 rounded-lg" key={index}>
            <p className="text-black">
              {proms.id} {proms.food?.length}
            </p>
            <div className="flex flex-wrap">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-[270px] h-[241px] flex items-center justify-center border-dashed border-2 rounded-[20px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-red-500 flex items-center justify-center ">
                      <Plus className="fill-white" fill="white" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add new Dish to Appetizers</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className=" flex gap-4 py-4">
                      <div className=" items-center gap-4">
                        <Label htmlFor="name">Food Name</Label>
                        <Input id="name" className="col-span-3" />
                      </div>
                      <div className="grid-cols-4 items-center gap-4">
                        <Label htmlFor="username">Food price</Label>
                        <Input id="username" className="col-span-3" />
                      </div>
                    </div>
                    <div className=" items-center gap-4">
                      <Label htmlFor="name">Ingredients</Label>
                      <Input id="Ingredients" className="col-span-3" />
                    </div>
                    <Label htmlFor="name">Food image</Label>
                    <Input type="file" className="w-[380px] h-[138px] border-dashed border-2 rounded-[20px]"/>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              {proms.food?.map((promss, index) => {
                return (
                  <div className="w-[270px] h-[241px] rounded-[20px] overflow-hidden border-2 flex flex-wrap ">
                    <Image
                      src={"/Food1.png"}
                      width={1000}
                      height={1000}
                      alt="food"
                      className="w-[238px] h-[129px] mx-auto rounded-[12px]"
                    />
                    <p>{promss.name}</p>
                    <p>{promss.description}</p>
                    <p>{promss.price}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
