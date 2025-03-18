"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
type gategorytype = {
  _id: string;
  categoryName: string;
  createdAt: Date;
  updatedAt: Date;
};
export const Addfood = ({ categorys }: gategorytype) => {
  const [foodname, setfoodname] = useState("");
  const [price, setprice] = useState();
  const [ingredients, setingredients] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [infile, setfile] = useState("");
  const PRESET_NAME = "food-delovery";
  const CLOUDINARYNAME = "dkrwlhgyv";

  const foodnamehandle = (e: any) => {
    const foodname = e.target.value;
    setfoodname(foodname);
  };
  const pricehandle = (e: any) => {
    const price = e.target.value;
    setprice(price);
  };
  const ingredientshandle = (e: any) => {
    const ingredients = e.target.value;
    setingredients(ingredients);
  };
  const handlefile = (e: any) => {
    const file = e.target.files[0];
    // console.log(e.target.files[0]);
    if (file) {
      setfile(file);
    }
  };

  const uploadImage = async () => {
    if (!infile) {
      alert("yuch alga");
    }
    try {
      const formdata = new FormData();
      formdata.append("file", infile);
      formdata.append("upload_preset", PRESET_NAME);
      formdata.append("api_key", CLOUDINARYNAME);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARYNAME}/upload`,
        {
          method: "POST",
          body: formdata,
        }
      );
      const data = await res.json();
      //   console.log(data.secure_url);
      //   setimageUrl(data.secure_url);
      return data.secure_url;
    } catch (error) {
        console.log(error);
    }
  };
  const foodUpload = async () => {
    console.log("100")
    const imageUrl = await uploadImage();
    console.log("101")
    const response = await fetch("http://localhost:4000/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foodName: foodname,
        price: price,
        image: imageUrl,
        ingredients: ingredients,
        category: categorys._id,
      }),
    });
  };
  return (
    <Dialog>
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
              <Input
                id="name"
                className="col-span-3"
                onChange={foodnamehandle}
              />
            </div>
            <div className="grid-cols-4 items-center gap-4">
              <Label htmlFor="username">Food price</Label>
              <Input
                id="username"
                className="col-span-3"
                onChange={pricehandle}
              />
            </div>
          </div>
          <div className=" items-center gap-4">
            <Label htmlFor="name">Ingredients</Label>
            <Input
              id="Ingredients"
              className="col-span-3"
              onChange={ingredientshandle}
            />
          </div>
          <div>
            <Label htmlFor="name">Food image</Label>
            <Input
              type="file"
              className="w-[380px] h-[138px] border-dashed border-2 rounded-[20px]"
              onChange={handlefile}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={foodUpload}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
