"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useRef, useState } from "react";
import Image from "next/image";

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleImageChange = () => {
    if (inputFileRef.current?.files) {
      const file = inputFileRef.current.files[0];
      setFile(file);
      console.log(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  const handleImageUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      throw new Error("No file selected");
    }

    const response = await fetch(`/api/upload/upload?filename=${file.name}`, {
      method: "POST",
      body: file,
    });

    const newBlob = (await response.json()) as PutBlobResult;

    console.log(newBlob);
  };

  return (
    <main className="flex flex-col items-center justify-start p-4">
      {previewUrl && (
        <div className="mb-4">
          <Image
            src={previewUrl}
            width={400}
            height={300}
            priority
            alt="Photo Preview"
            className="w-full h-auto object-cover rounded-lg shadow border border-gray-300"
          />
        </div>
      )}
      <section className="bg-white rounded-lg p-4 text-center border border-gray-300 shadow w-full space-y-4">
        <form className="" onSubmit={handleImageUpload}>
          {!previewUrl ? (
            <div
              onClick={() => inputFileRef.current.click()}
              className="flex items-center justify-center w-full h-36 bg-gray-100 rounded-md border-2 border-dashed border-gray-300 hover:border-gray-400"
            >
              <input
                name="file"
                ref={inputFileRef}
                type="file"
                required
                className="hidden"
                onChange={handleImageChange}
              />
              <label className="flex items-center justify-center w-full h-full text-gray-500 hover:text-gray-700">
                <span className="ml-2">Select a photo</span>
              </label>
            </div>
          ) : (
            <>
              <button
                type="submit"
                className="bg-black text-white w-full p-2 rounded-lg mb-2"
              >
                Upload
              </button>

              <button
                type="button"
                className="bg-gray-500 text-white w-full p-2 rounded-lg"
                onClick={() => {
                  setPreviewUrl(null);
                  setFile(null);
                  if (inputFileRef.current) {
                    inputFileRef.current.value = "";
                  }
                }}
              >
                Change Image
              </button>

              <p className="text-xs text-black/80 w-full text-center pt-2">
                Preview image before uploading
              </p>
            </>
          )}
        </form>
      </section>
    </main>
  );
}
