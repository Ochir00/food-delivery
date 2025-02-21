"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(6).max(15),
  confirm: z.string().min(6).max(15),
});
//
//
//
//
//
//
//
//
export const RegisterEmail = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-[100vw]">
      <button className="w-[36px] h-[36px] border-gray-300 border-[1px] rounded-[6px] flex justify-center items-center">
        {" "}
        <ChevronLeft />
      </button>
      <p className="text-2xl font-semibold mb-1">Create a your account</p>
      <p className="text-[16px] font-normal text-[#71717A] mb-6">
        Sign up to explore your favorite dishes.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your Email address"
                    {...field}
                    className="w-[416px] h-[36px] px-3 py-2 border-gray-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-[416px] h-[36px] px-3 py-2">
            Let's Go
          </Button>
        </form>
        <div className="flex gap-2 mt-6">
          <p className="text-gray-500">Already have an account? </p>{" "}
          <Link href={"/"} className="text-blue-500 ">
            Log in
          </Link>
        </div>
      </Form>
    </div>
  );
};
//
//
//
export const RegisterPassword = () => {

  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      confirm: "",
    },
  });


  // Function to toggle the visibility of the password
  const handleCheckboxChange = (event: any) => {
    setShowPassword(event.target.checked);
  };
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-[100vw]">
      <button className="w-[36px] h-[36px] border-gray-300 border-[1px] rounded-[6px] flex justify-center items-center">
        {" "}
        <ChevronLeft />
      </button>
      <p className="text-2xl font-semibold mb-1">Create a strong password</p>
      <p className="text-[16px] font-normal text-[#71717A] mb-6">
        Create a strong password with letters, numbers.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    className="w-[416px] h-[36px] px-3 py-2 border-gray-300"
                  />
                </FormControl>
                <FormControl></FormControl>
                <FormControl></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    className="w-[416px] h-[36px] px-3 py-2 border-gray-300"
                  />
                </FormControl>
                <FormControl></FormControl>
                <FormControl>

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-[416px] h-[36px] px-3 py-2">
            Let's Go
          </Button>
        </form>
        <div className="flex gap-2 mt-6">
          <p className="text-gray-500">Already have an account? </p>{" "}
          <Link href={"/"} className="text-blue-500 ">
            Log in
          </Link>
        </div>
      </Form>
    </div>
  );
};
//
//
//
//
//
//
//
//
//
//
//
//
const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [confirm, setconfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the visibility of the password
  const handleCheckboxChange = (event: any) => {
    setShowPassword(event.target.checked);
  };

  return (
    <div>
      <p>Create a strong password</p>
      <p>Create a strong password with letters, numbers.</p>
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <div className="flex">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={handleCheckboxChange}
          aria-label="Show password"
        />
        <p>Show Password</p>
      </div>
    </div>
  );
};
export default PasswordInput;

//
//
//
//
//
//
//
//
//
//
//

export const RegisterNext = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-[100vw]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
