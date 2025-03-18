"use client";
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
import { useEffect, useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Addfood } from "./Add-food";
type gategorytype = {
  _id: string;
  categoryName: string;
  createdAt: Date;
  updatedAt: Date;
};
type foodtype = {
  _id: string;
  price: number;
  image: string;
  ingredients: string;
  category: {
    _id: string;
    categoryName: string;
    createdAt: Date;
    updatedAt: Date;
  };
  foodName: string;
  createdAt: Date;
  updatedAt: Date;
};
// const response = await fetch("http://localhost:8000/food-category", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ categoryName: "DRINKS" }),
// });

export function ToggleGroupDemo() {
  const [gategory, setgategory] = useState<gategorytype[]>();
  const [createGategory, setCreateGategory] = useState("");
  const [theme, setTheme] = useState(false);

  const getcategoty = async () => {
    const gategorydatas = await fetch(`http://localhost:4000/foodcategories`);
    const gategorydata = await gategorydatas.json();
    setgategory(gategorydata);
  };

  useEffect(() => {
    getcategoty();
  }, []);

  const createCategory = async () => {
    const response = await fetch("http://localhost:4000/foodcategories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: createGategory }),
    });
    //Dialogoo end haana uuu
    //Nemsen datagaa avchirnuuu
    webmode();
    getcategoty();
  };

  const handleChange = (e: any) => {
    const { value } = e.target;
    setCreateGategory(value);
  };

  function webmode() {
    setTheme(theme == true ? false : true);
  }
  const deletecategory = async (proms: gategorytype) => {
    console.log(proms._id);
    const response = await fetch(
      `http://localhost:4000/foodcategories/${proms._id}`,
      {
        method: "DELETE",
      }
    );
    getcategoty();
  };
  return (
    <div className="w-full p-5 bg-white m-5 rounded-lg">
      <h2>Dishes category</h2>
      <div>
        <div className=" flex gap-3 flex-wrap">
          {gategory?.map((proms: gategorytype, index: number) => (
            <ContextMenu>
              <ContextMenuTrigger className="">
                <button
                  className="flex items-center h-[36px] text-black px-2 rounded-full border-[#EF4444] border-[1px]"
                  key={index}
                >
                  <p>{proms.categoryName}</p>
                </button>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem inset disabled>
                  Edit
                </ContextMenuItem>
                <ContextMenuItem
                  inset
                  onClick={() => {
                    deletecategory(proms);
                  }}
                >
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
          <Dialog open={theme} onOpenChange={webmode}>
            <DialogTrigger asChild>
              <div
                className="w-9 h-9 flex items-center rounded-full bg-[#EF4444] justify-center"
                onClick={webmode}
              >
                <Plus color="white" size={16} />
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add new category</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid-cols-4 items-center gap-4">
                  <Label htmlFor="username">Category Name</Label>
                  <Input
                    onChange={handleChange}
                    id="username"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={createCategory}>Add Gategory</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export function Foodplus() {
  const [food, setfood] = useState<foodtype[]>();
  const [gategory, setgategory] = useState<gategorytype[]>();
  const [createfood, setcreatefood] = useState();
  const [theme, setTheme] = useState(false);
  const handleChange = (e: any) => {
    const { value } = e.target;
    setcreatefood(value);
  };
  const getcategoty = async () => {
    const gategorydatas = await fetch(`http://localhost:4000/foodcategories`);
    const gategorydata = await gategorydatas.json();
    setgategory(gategorydata);
  };
  const getfood = async () => {
    const fooddata = await fetch(`http://localhost:4000/food`);
    const foodsdata = await fooddata.json();
    setfood(foodsdata);
  };
  const createCategory = async () => {
    const response = await fetch("http://localhost:4000/foodcategories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: createfood }),
    });
    //Dialogoo end haana uuu
    //Nemsen datagaa avchirnuuu
  };
  function webmode() {
    setTheme(theme == true ? false : true);
  }
  useEffect(() => {
    getcategoty();
    getfood();
  }, []);
  return (
    <div>
      {gategory?.map((proms, index) => {
        return (
          <div className="w-full p-5 bg-white m-5 rounded-lg" key={index}>
            <p className="text-black">
              {proms.categoryName} {gategory?.length}
            </p>
            <div className="flex flex-wrap">
              {/* <Dialog>
                <DialogTrigger asChild>
                  <div className="w-[270px] h-[241px] flex items-center justify-center border-dashed border-2 rounded-[20px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-red-500 flex items-center justify-center ">
                      <Plus className="fill-white" color="white" />
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
                    <Input
                      type="file"
                      className="w-[380px] h-[138px] border-dashed border-2 rounded-[20px]"
                    />
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog> */}
              <Addfood categorys={proms} />
              {food?.filter((food)=> food.category._id === proms._id ).map((promss: foodtype, index: number) => {
                return (
                  <div className="w-[270px] h-[241px] rounded-[20px] overflow-hidden border-2 flex flex-wrap ml-2">
                    <div className="w-[270px] h-[241px] rounded-[20px] overflow-hidden border-2 flex flex-wrap ">
                      <Image
                        src={"/Food1.png"}
                        width={1000}
                        height={1000}
                        alt="food"
                        className="w-[238px] h-[129px] mx-auto rounded-[12px]"
                      />
                      <p>{promss.foodName}</p>
                      <p>{promss.price}</p>
                      <p>{promss.ingredients}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
