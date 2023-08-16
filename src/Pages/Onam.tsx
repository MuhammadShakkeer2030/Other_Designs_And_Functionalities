import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

const Onam = () => {
  const [userName, setUserName] = useState<string>("");
  const [userPhoto, setUserPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [showBox, setShowBox] = useState<boolean>(false);

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setUserName(e.target.value);
    }
  };

  const handleUserPhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUserPhoto(file);
      const objectUrl = URL.createObjectURL(file);
      console.log(objectUrl);
      setPreview(objectUrl);
    }
  };
  useEffect(() => {
    const showNameBox = setTimeout(() => {
      setShowBox(true);
    }, 4000);
    return () => {
      clearTimeout(showNameBox);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5891d] to-[#f8a61f] flex flex-col justify-center items-center relative">
      <img
        src="https://o.remove.bg/downloads/fa14a818-ef39-4dc4-8bd6-20d5b5e6329b/image-removebg-preview.png"
        alt=""
        loading="lazy"
      />
      <header className="text-3xl text-white p-4">
        <div className="onam_font relative h-[90px]  flex items-center justify-center">
          <span className="text-[120px] ">O</span>
          <span className=" text-[100px] tracking-wider">nam</span>
          <span className="absolute text-black tracking-[15px] font-serif -top-[4px] left-[76px] ">
            Happy
          </span>
          {/*     top: -4px;
    left: 76px; */}
        </div>
      </header>
      <div className="absolute top-0 left-0 w-full max-w-md bg-white rounded-lg shadow-lg mt-4">
        <div className="mb-4">
          <input
            type="text"
            className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            onChange={handleUserNameChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleUserPhotoChange}
          />
        </div>
        {/* Other sections (Pookalam, personalized greetings, Onam story, etc.) */}
        {/* Remember to use Tailwind CSS classes to style these sections */}
      </div>

      {/* Other components and sections */}
      <img src={preview} alt="photo" className="w-[300px]" />
      {/* Remember to use Tailwind CSS classes to style these sections */}
    </div>
  );
};

export default Onam;
