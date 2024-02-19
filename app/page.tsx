"use client";
import CloudinaryWrapper from "../components/cloudinarywrapper";
import ColorPicker from "../components/ColorPicker";
import ImageGridCard from "../components/ImageGridCard";

import React, { useState } from "react";

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
      <body className="new-style page-proxiedContentWrapper pageType-ContentPage template-pages-layout-landingLayout2Page pageLabel-proxiedContentWrapper smartedit-page-uid-proxiedContentWrapper smartedit-page-uuid-eyJpdGVtSWQiOiJwcm94aWVkQ29udGVudFdyYXBwZXIiLCJjYXRhbG9nSWQiOiJjbkNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ== smartedit-catalog-version-uuid-cnContentCatalog/Online language-no">
  <main className="mm-page mm-slideout bg-primary-100">
        <div className="w-full">
          <div className="c-site-header">
            <div className="container">
              <div className="c-site-header__top text-white text-2xl">
                <h1>Visualiseringsverktøy</h1>
              </div>
            </div>
          </div>

          <div id="__next">
            <div id="next-app-element" className="next-content-wrapper">
              <div className="py-8 sm:py-10 md:py-14 px:4 relative">
                <div className="top-0 absolute w-full h-[calc(100%-32px)] sm:h-[calc(100%-40px)] md:h-[calc(100%-56px)] bg-jernia-image">
                  <div className="relative z-10 mx-auto px-4 md:px-8 xl:container">
                     <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                          <div className="md:col-span-10 lg:col-span-12">
                            <h1 className="text-3xl">Fargeradgiver</h1>
                              <div className="mt-1 md:mt-2 max-w-4xl">
                              <p className="leading-p text-p-lg-m md:text-p-lg">
                                Lorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem
                                impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem
                                impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem
                                impsumLorem impsumLorem impsumLorem impsumLorem
                              </p>
                              </div>
                          </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="px:4 bg-primary-300 py-8 md:py-14">

          </div>
          <div className="flex flex-wrap w-full justify-around items-start bg-primary-100">
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


            <div className="lg:w-1/3 w-full lg:order-1 order-2 px-2 mb-4 bg-primary-300">
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
          <section></section>

        </div>
      </main>
  </body>
  );
}
 