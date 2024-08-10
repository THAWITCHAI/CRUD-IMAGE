"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

export default function Contact({}: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/getData")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div className="m-10 show ">
      <div className="item w-full h-full ">
        {data.map((i, index) => {
          return (
            <div key={index} className="w-48 h-80">
              <div className="image">
                <Image
                  src={String(i["path"])}
                  width={190}
                  height={120}
                  alt="Reloading"
                  className="rounded-md"
                />
              </div>
              <div className="p-5 h-1/2 ">
                <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white ">
                  ID: {i["id"]}
                </h5>
                <h5 className="mb-2 text-sm tracking-tight text-gray-900 dark:text-white h-20 ">
                  {i["name"]}
                </h5>
                <div className=" w-full h-10 flex justify-center items-center bg-green-500 rounded-md">
                  <Link className="text-white" href="#">Read more</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
