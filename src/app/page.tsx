"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(0);
  const [massage, setMassage] = useState(String);
  const [base64, setBase64] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (name == "" || id == "" || base64 == "") {
        setError(1);
        setMassage("กรุณากรอกข้อมูลให้ครบ!!");
        return;
      }
      if (name && id) {
        setError(2);
        setMassage("กรอกข้อมูลครบแล้ว");
        fetch("/api/upload", {
          method: "POST",
          body: JSON.stringify({
            id: id,
            name: name,
            path: base64,
          }),
        });
        return;
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-10 text-white ">
      <div className=" flex justify-center h-20 mb-5 text-center">
        {error == 1 ? (
          <h1 className="bg-red-500 w-96 flex justify-center items-center text-xl rounded-md">
            {massage}
          </h1>
        ) : (
          ""
        )}
        {error == 2 ? (
          <h1 className="bg-green-500 w-96 flex justify-center items-center text-xl rounded-2xl">
            {massage}
          </h1>
        ) : (
          ""
        )}
      </div>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            ID
          </label>
          <input
            onChange={(e) => setId(e.target.value)}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="#1234"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Wiskas"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Image
          </label>
          <input
            onChange={handleFileChange}
            type="file"
            name="file"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <button
          type="reset"
          onClick={() => {
            setError(0);
            setId("");
            setName("");
            setBase64(null);
            return;
          }}
          className="mx-5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Reset
        </button>
      </form>
    </div>
  );
}
