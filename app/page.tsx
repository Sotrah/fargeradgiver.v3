"use client";
import CldImage from "../components/CldImage";
import ColorPicker from "../components/ColorPicker";
import RecentColorPicker from "../components/RecentColorPicker";
import ImageGridCard from "../components/ImageGridCard";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useSpinDelay } from 'spin-delay';
import React, { useState, useEffect } from "react";

export default function Home() {
  // type ImageToTransform = {
  //   width: number;
  //   height: number;
  //   public_id: string;
  // };
  type Color = {
    name: string;
    hex: string;
  }

  const [visibleModule, setVisibleModule] = useState("modul2");
  const [loading, setLoading] = useState(false);

  const [imageToTransform, setImageToTransform] = useState<String | null>('http://res.cloudinary.com/dj6mfsxnu/image/upload/v1707474684/jgxom27mvriax5av0prr.png');
  const [color, setColor] = useState<Color | null>(null);

  const handleImageSelect = (selectedPicture: String) => {
      setLoading(true);
      setImageToTransform(selectedPicture)
  }
  const handleColorSelect = (selectedColor: Color | null) => {
    setLoading(true);
    setColor(selectedColor)
  }

  const showSpinner = useSpinDelay(loading, { delay: 300, minDuration: 700 });
  

  return (
      <body className="new-style page-proxiedContentWrapper pageType-ContentPage template-pages-layout-landingLayout2Page pageLabel-proxiedContentWrapper smartedit-page-uid-proxiedContentWrapper smartedit-page-uuid-eyJpdGVtSWQiOiJwcm94aWVkQ29udGVudFdyYXBwZXIiLCJjYXRhbG9nSWQiOiJjbkNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ== smartedit-catalog-version-uuid-cnContentCatalog/Online language-no">
        <div className="c-site-header"> {/*Navbar opplegg*/}
          <div className="container">
            <div className="c-site-header__top text-white text-2xl">
              <h1></h1>
            </div>
          </div>
        </div>

      <main className="main-responsive-padding px-20 mm-page mm-slideout bg-primary-100">
        <div className="w-full">


          <div id="__next">
            <div id="next-app-element" className="next-content-wrapper">
              <div className="py-8 sm:py-10 md:py-14 relative">
                <div className="top-0 absolute w-full h-[calc(100%-32px)] sm:h-[calc(100%-40px)] md:h-[calc(100%-56px)] bg-jernia-image">
                  <div className="relative z-10 mx-2">
                     <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                          <div className="pt-16 md:col-span-10 lg:col-span-12">{/*Info området*/}
                            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold">Visualiseringsverktøy</h1>
                              <div className="mt-1 md:mt-2 max-w-4xl">
                              <p className="pt-6 leading-p text-xl md:text-2xl lg:3xl">
                                La deg inspirere av Jotuns fantastiske fargeunivers.
                                Finn fargene som passer best til din stil og last opp bilde av rommet du vil male.
                                Etter at bildet er lastet opp kan du enkelt endre veggfargen til den fargen du ønsker.
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
          <div className="pt-24 flex flex-wrap justify-around items-start bg-primary-100">
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


            <div className="lg:w-1/3 w-full lg:order-1 order-2 px-2 pt-6 mb-4 bg-primary-300">
              <div className={`relative pb-[100%] ${visibleModule === "modul2" ? "" : "hidden"} lg:block`}>
                <div className={`absolute top-0 left-0 right-0 bottom-0 bg-white rounded-lg shadow p-4 overflow-hidden`} >
                  <ImageGridCard onPictureSelect={handleImageSelect}/>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 w-full lg:order-3 order-2 px-2 pt-6 mb-4">

              <div className={`relative pb-[100%] ${visibleModule === "modul3" ? "" : "hidden"} lg:block`}>
                <div className={`absolute top-0 left-0 right-0 bottom-0 bg-white rounded-lg shadow p-4 overflow-hidden`}>

                  <ColorPicker onColorSelect={handleColorSelect}/>

                </div>
              </div>
            </div>

            <div className="lg:w-1/3 w-full lg:order-2 order-1 px-2 pt-6 mb-4 bg-primary-300">
              <div className="relative pb-[100%]">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-white rounded-lg shadow  overflow-hidden">
                  {/* The below section is dimmed until the image is loaded */}
                  <div className={`${showSpinner ? "opacity-50" : ""} w-full h-full`}>
                    {/* CldImage is documented here: https://next.cloudinary.dev/cldimage/configuration
                    
                    If there is an image and a color selected, transform it with Recolor */}
                    {imageToTransform && color && (
                        <CldImage
                            placeholder = "empty"
                            onLoad={() => setLoading(false)}
                            width='1024'
                            height='1024'
                            src={imageToTransform}
                            alt="Uploaded image"
                            className="rounded-lg"
                            sizes="100vw"
                            recolor={['every wall and walls', color?.hex]}
                        />
                    )}
                    {imageToTransform && !color && (
                        <CldImage
                            placeholder = "empty"
                            onLoad={() => setLoading(false)}
                            width='1024'
                            height='1024'
                            src={imageToTransform}
                            alt="Uploaded image"
                            className="rounded-lg"
                            sizes="100vw"
                        />
                    )}
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <ScaleLoader
                  color="#000000"
                  speedMultiplier={0.5}
                  loading={showSpinner}
                />
                </div>
              </div>
              
            </div>
          </div>
        </div>

          <section className="lg:mt-4">
            <div className="py-8 pb-0 mx-auto px-4 md:px-8 xl:container">
              <div className="flex">
                <div className="max-w-full flex-grow">
                  {/* Legg til filter osv */}
                  <div className="mb-8">
                    <div className="mb-8 grid grid-cols-2 gap-2 md:grid-cols-3">

                      <article
                          className="group transform cursor-pointer space-y-4 rounded transition-all w-full bg-neutral-300 p-2 sm:p-4">
                        <a href="" className="relative- flex h-full flex-col">
                          <figure
                              className="relative w-full aspect-square rounded overflow-hidden mb-4 bg-jernia-farge">{/*Referer til fargen her. Den er foreløpig et bg objekt i globals.css*/}
                            <img className="w-full" alt="Fargegjengivning av undefined" src="./blob-large-gray-1.png">
                            </img>
                          </figure>
                        </a>
                      </article>

                      <article
                          className="group transform cursor-pointer space-y-4 rounded transition-all w-full bg-neutral-300 p-2 sm:p-4">
                        <a href="" className="relative- flex h-full flex-col">
                          <figure
                              className="relative w-full aspect-square rounded overflow-hidden mb-4 bg-jernia-farge">{/*Referer til fargen her. Den er foreløpig et bg objekt i globals.css*/}
                            <img className="w-full" alt="Fargegjengivning av undefined" src="./blob-large-gray-1.png">
                            </img>
                          </figure>
                        </a>
                      </article>

                      <article
                          className="group transform cursor-pointer space-y-4 rounded transition-all w-full bg-neutral-300 p-2 sm:p-4">
                        <a href="" className="relative- flex h-full flex-col">
                          <figure
                              className="relative w-full aspect-square rounded overflow-hidden mb-4 bg-jernia-farge">{/*Referer til fargen her. Den er foreløpig et bg objekt i globals.css*/}
                            <img className="w-full" alt="Fargegjengivning av undefined" src="./blob-large-gray-1.png">
                            </img>
                          </figure>
                        </a>
                      </article>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

  </main>
      </body>
  );
}
 