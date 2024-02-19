"use client";
import CloudinaryWrapper from "../components/cloudinarywrapper";
import ColorPicker from "../components/ColorPicker";
import ImageGridCard from "../components/ImageGridCard";

import { useState } from "react";

export default function Home() {
  // type CloudinaryResult = {
  //   width: number;
  //   height: number;
  //   public_id: string;
  // };
  type Color = {
    name: string;
    hex: string;
  }

  const [visibleModule, setVisibleModule] = useState("modul2");

  const [cloudinaryResult, setCloudinaryResult] = useState<String | null>('http://res.cloudinary.com/dj6mfsxnu/image/upload/v1707474684/jgxom27mvriax5av0prr.png');
  const [color, setColor] = useState<Color | null>(null);

  return (
      <main className="flex min-h-screen min-w-full flex-col items-center justify-between p-6">
        <div className="w-full">
          <div className="container"></div>
          <h1>Visualiseringsverktøy</h1>

          <div className="flex flex-wrap w-full justify-around items-start">

            <button
                className={`px-4 py-2 order-2 lg:hidden ${visibleModule === "modul2" ? "bg-blue-700" : "bg-blue-500"} text-white rounded`}
                onClick={() => setVisibleModule("modul2")}>
              Velg bilde
            </button>
            <button
                className={`px-4 py-2 order-2 lg:hidden ${visibleModule === "modul3" ? "bg-blue-700" : "bg-blue-500"} text-white rounded`}
                onClick={() => setVisibleModule("modul3")}>
              Velg farge
            </button>
            <button
                className="px-4 py-2 order-2 lg:hidden bg-green-500 text-white rounded">
              Kjøp
            </button>


            <div className="lg:w-1/3 w-full lg:order-1 order-2 px-2 mb-4">
              <div className={`relative pb-[100%] ${visibleModule === "modul2" ? "" : "hidden"} lg:block`}>
                <div className={`absolute top-0 left-0 right-0 bottom-0 bg-white rounded-lg shadow p-4 overflow-hidden`} >
                  <ImageGridCard onPictureSelect={(selectedPicture: String) => setCloudinaryResult(selectedPicture)}/>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 w-full lg:order-3 order-2 px-2 mb-4">

              <div className={`relative pb-[100%] ${visibleModule === "modul3" ? "" : "hidden"} lg:block`}>
                <div className={`absolute top-0 left-0 right-0 bottom-0 bg-white rounded-lg shadow p-4 overflow-hidden`}>

                  <ColorPicker onColorSelect={(selectedColor: Color | null) => setColor(selectedColor)}/>

                </div>
              </div>
            </div>

            <div className="lg:w-1/3 w-full lg:order-2 order-1 px-2 mb-4">
              <div className="relative pb-[100%]">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-white rounded-lg shadow  overflow-hidden">
                  <div className="w-full h-full">
                    {/* CloudinaryWrapper is documented here as CldImage: https://next.cloudinary.dev/cldimage/configuration*/}
                    {cloudinaryResult && color && (
                        <CloudinaryWrapper
                            width='1024'
                            height='1024'
                            src={cloudinaryResult}
                            alt="Uploaded image"
                            className="rounded-lg"
                            sizes="100vw"
                            recolor={['every wall and walls and portion of wall visible in the room', color?.hex]}
                        />
                    )}
                    {cloudinaryResult && !color && (
                        <CloudinaryWrapper
                            width='1024'
                            height='1024'
                            src={cloudinaryResult}
                            alt="Uploaded image"
                            className="rounded-lg"
                            sizes="100vw"
                        />
                    )}

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </main>
  );
}
 