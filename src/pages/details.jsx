import clsx from 'clsx';
import * as React from 'react';
import { useParams } from 'react-router';
import useSWR from 'swr';
import { useState } from 'react';
import { getLinkForProxy } from '@/utils/proxy';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

import DetailsSkeleton from '@/layouts/partials/DetailsSkeleton';
import useToggle from '@/hooks/useToggle';

/* interface DetailsProps {
    id: string
} */

const Details = () => {

  const params = useParams()
  const fetcher = (url) => fetch(url).then(resp => resp.json())

  const { data, error } = useSWR(`https://pets-v2.dev-apis.com/pets?id=${params.id}`, fetcher)

  const pet = !!data ? data.pets[0] : null
  console.log(pet)

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [modal, toggleModal] = useToggle(true)


  return (
    <>
      <div className="md:px-16 px-5">
        {(!data && !error) && DetailsSkeleton}
        {data && <div className={clsx('w-full max-w-3xl mx-auto mb-10 mt-8 md:mt-20',
        )}>
          <div className="flex flex-col">
            <div className="flex ">
              <div className="flex justify-between w-full items-center">
                <div className="flex items-center">
                  <div className={clsx("mr-2 h-12 w-12 md:w-20 md:h-20 px-5 py-5 rounded-full",
                    " bg-[#f0f6ff] dark:bg-i-neutral-2 flex items-center justify-center",
                    "text-i-foreground dark:text-i-gray-2 text-2xl md:text-5xl font-semibold")}>
                    {pet.name.charAt(0)}
                  </div>
                  <div className="block">
                    <h1 className="text-slate-500 dark:text-slate-400">{pet.name}</h1>
                    <span>{pet.breed}</span>
                  </div>
                </div>
                <div><img src={`/src/assets/img/${pet.animal}.svg`} /></div>
              </div>
            </div>

            <div className={clsx("flex-col rounded-md bg-[#f0f6ff] dark:bg-i-neutral-2",
              "px-2 py-2 mt-3",
              "md:px-5 md:py-6")}>
              <h2 className="py-2 text-xl md:text-2xl font-medium text-i-foreground dark:text-i-gray-2">Luna Pictures</h2>
              <div className="flex-col">
                <div className="mt-5 bg-white dark:bg-i-neutral-1 px-1 py-1 rounded-md">

                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={false}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className=""
                  >
                    {pet.images.map((i, index) =>
                      <SwiperSlide key={index}>
                        {<img className="rounded-md object-cover w-full h-[260px] sm:h-[320px] md:h-[380px]" src={getLinkForproxy(pet.images[index])} alt="dog image" />}
                      </SwiperSlide>
                    )}
                  </Swiper>
                </div>
                <div className="rounded-md mt-4">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="bg-transparent"
                  >
                    {pet.images.map((i, index) =>
                      <SwiperSlide key={index}>
                        {<img className="rounded-md object-cover w-full" src={getLinkForproxy(pet.images[index])} alt="dog image" />}
                      </SwiperSlide>
                    )}
                  </Swiper>
                </div>

                <div className="mt-3 block p-5 bg-white dark:bg-i-neutral rounded-md">
                  <h2 className="py-2 text-2xl md:text-4xl font-medium text-i-foreground dark:text-i-gray-2">Description</h2>
                  <span>{pet.desscription}</span>
                  <button type="button" className="bg-i-primary/5 text-i-primary p-3 rounded-lg font-medium flex space-x-2 items-center hover:bg-opacity-10">
                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.56146 2.30617C3.07732 1.83976 3.69088 1.46951 4.36681 1.21674C5.04275 0.963961 5.76772 0.83365 6.5 0.833304C7.97643 0.833304 9.39343 1.36245 10.4385 2.30617C11.4852 3.25245 12.0722 4.5319 12.0714 5.86521C12.0714 8.16763 10.6489 10.2517 9.16686 11.7904C8.54233 12.4357 7.86524 13.0385 7.14118 13.5937C6.87839 13.7954 6.65832 13.9533 6.5 14.0628C6.34214 13.9533 6.12161 13.7954 5.85882 13.5937C5.13476 13.0385 4.45767 12.4357 3.83314 11.7904C2.35114 10.2517 0.928572 8.16763 0.928572 5.86521C0.928572 4.52984 1.51636 3.24989 2.56146 2.30617ZM6.23257 14.9232L6.5 14.5828L6.76743 14.9232C6.68911 14.9726 6.59572 14.9991 6.5 14.9991C6.40428 14.9991 6.31089 14.9726 6.23257 14.9232ZM6.23257 14.9232L6.5 14.5828L6.76743 14.9232L6.76929 14.9224L6.77393 14.9195L6.78786 14.9099L6.84264 14.8745C6.88907 14.8436 6.95686 14.7987 7.04229 14.7395C7.21314 14.622 7.4555 14.4491 7.74475 14.227C8.50405 13.6446 9.21404 13.0123 9.86886 12.3354C11.4047 10.7413 13 8.46595 13 5.8648C13 4.31068 12.3156 2.81907 11.0974 1.71911C10.4952 1.17471 9.779 0.742551 8.99 0.447516C8.20099 0.152481 7.35476 0.00039096 6.5 0C5.64527 0.000336382 4.79906 0.152361 4.01006 0.447323C3.22106 0.742286 2.50484 1.17436 1.90264 1.71869C0.683161 2.82117 -0.000818544 4.3118 7.35158e-07 5.86521C7.35158e-07 8.46595 1.59529 10.7413 3.13114 12.3354C3.78596 13.0123 4.49595 13.6446 5.25525 14.227C5.54496 14.4491 5.78686 14.622 5.95772 14.7395C6.04152 14.7974 6.12618 14.8544 6.21168 14.9103L6.22654 14.9195L6.23071 14.9224L6.23257 14.9232ZM4.64286 5.83313C4.64286 5.39112 4.83852 4.96721 5.1868 4.65466C5.53508 4.34211 6.00746 4.16652 6.5 4.16652C6.99255 4.16652 7.46492 4.34211 7.8132 4.65466C8.16148 4.96721 8.35714 5.39112 8.35714 5.83313C8.35714 6.27514 8.16148 6.69905 7.8132 7.0116C7.46492 7.32415 6.99255 7.49974 6.5 7.49974C6.00746 7.49974 5.53508 7.32415 5.1868 7.0116C4.83852 6.69905 4.64286 6.27514 4.64286 5.83313ZM6.5 3.33322C5.76118 3.33322 5.05263 3.5966 4.5302 4.06542C4.00778 4.53425 3.71429 5.17011 3.71429 5.83313C3.71429 6.49615 4.00778 7.13201 4.5302 7.60084C5.05263 8.06966 5.76118 8.33304 6.5 8.33304C7.23882 8.33304 7.94738 8.06966 8.4698 7.60084C8.99222 7.13201 9.28571 6.49615 9.28571 5.83313C9.28571 5.17011 8.99222 4.53425 8.4698 4.06542C7.94738 3.5966 7.23882 3.33322 6.5 3.33322Z" fill="#0D75FF" />
                    </svg>
                    <span>{`${pet.city}, ${pet.state}`}</span>
                  </button>
                </div>
                <button onClick={toggleModal} type="button" className="py-3 px-10 bg-i-primary text-white rounded-full mt-10 mb-12">{`Adopt ${pet.name}`}</button>
              </div>
            </div>
          </div>
          <div  className={clsx({"hidden":modal},"flex justify-center items-center fixed inset-0 z-[500] bg-slate-700/60")} >
            <div className="flex-col py-12 px-6 bg-white rounded-md z-[5001]">
              <h2 className="text-md  md:text-sm max-w-xs text-center text-i-gray">Are you sure you want to adopt <span className="text-red-400">{pet.name}</span>?</h2>
              <div className="flex space-x-2 justify-center mt-2">
                <button  className="bg-i-primary text-white px-5 py-3 rounded-md text-xs" >Adopt</button>
                <button onClick={toggleModal} className="bg-slate-200 text-slate-500 px-5 py-3 rounded-md text-xs" >Cancel</button>
              </div>
            </div>
          </div>
        </div>}
      </div>

    </>

  )
};

export default Details;
