"use client";
import { use, useState } from "react";

export default  function ContextMenuDemo() {
  const [infile, setfile] = useState();
  const [image, setimage] = useState()
  const PRESET_NAME = "food-delovery";
  const CLOUDINARYNAME = "dkrwlhgyv";
  const handlefile = (e: any) => {
    const file = e.target.files[0];
    console.log(e.target.files[0])
    if (file) {
      setfile(file);
    }

  };
  const upload = async () => {
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
      console.log(data.secure_url);
      setimage(data.secure_url)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input type="file" onClick={handlefile} />
      <button className="text-black border-[1px] border-black rounded-md" onClick={upload}>
        Upload
      </button>
    </div>
  );
}
