'use client'

import Slider from "react-slick"
import Image from "next/image"
import { StarIcon, ArrowLeftIcon, ArrowRightIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { useMemo, useState } from "react"
import { testimonialsList } from "./utils/testimonialsList"
import { ScrollAnimationWrapper } from "./misc/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import { getScrollAnimation } from "./utils/getScrollAnimation";

export const Testimonial = ({ }) => {

    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    const settings = {
        dots: true,
        customPaging: function (i: any) {
            return (
                <a className="">
                    <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
                </a>
            );
        },
        dotsClass: "slick-dots w-max absolute mt-20  ",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    const [sliderRef, setSliderRef] = useState<any>(null);

    return (
        <>
            <div
                className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
                id="pricing"
            >
                <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col w-full pt-16" id="testimoni">
                            <ScrollAnimationWrapper className={""}>
                                <motion.h3
                                    variants={scrollAnimation}
                                    className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
                                    Testimonios{" "}
                                </motion.h3>
                                <motion.p
                                    variants={scrollAnimation}
                                    className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
                                >
                                    Estos son los relatos de algunos de nuestros clientes.
                                </motion.p>
                            </ScrollAnimationWrapper>
                        </div>
                        <ScrollAnimationWrapper className="w-full flex flex-col py-12">
                            <motion.div variants={scrollAnimation}>
                                <Slider
                                    {...settings}
                                    arrows={false}
                                    ref={setSliderRef}
                                    className="flex items-stretch justify-items-stretch"
                                >
                                    {testimonialsList.map((listTestimonis, index) => (
                                        <div className="px-3 flex items-stretch" key={index}>
                                            <div className="border-2 border-gray-500 hover:border-nutricare-100 transition-all rounded-lg p-8 flex flex-col">
                                                <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                                                    <div className="flex order-2 xl:order-1">
                                                        {
                                                            listTestimonis.image
                                                                ?
                                                                <Image
                                                                    src={listTestimonis.image}
                                                                    height={50}
                                                                    width={50}
                                                                    alt="Icon People"
                                                                />
                                                                :
                                                                <UserCircleIcon className="h-12 w-12 text-nutricare-100" />
                                                        }

                                                        <div className="flex flex-col ml-5 text-left">
                                                            <p className="text-lg text-nutricare-200 capitalize">
                                                                {listTestimonis.name}
                                                            </p>
                                                            <p className="text-sm text-nutricare-300 capitalize">
                                                                {listTestimonis.career}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                                                        <p className="text-sm text-nutricare-200">{listTestimonis.rating}</p>
                                                        <span className="flex ml-4">
                                                            <StarIcon className="h-4 w-4 text-nutricare-100" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="mt-5 text-left text-nutricare-200">“{listTestimonis.testimoni}”</p>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                                <div className="flex w-full items-center justify-end">
                                    <div className="flex flex-none justify-between w-auto mt-14">
                                        <div
                                            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-nutricare-100 border hover:bg-nutricare-200 hover:text-white-500 hover:border-nutricare-200 transition-all text-nutricare-100 cursor-pointer"
                                            onClick={sliderRef?.slickPrev}
                                        >
                                            <ArrowLeftIcon className="h-6 w-6 " />
                                        </div>
                                        <div
                                            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-nutricare-100 border hover:bg-nutricare-200 hover:text-white-500 hover:border-nutricare-200 transition-all text-nutricare-100 cursor-pointer"
                                            onClick={sliderRef?.slickNext}
                                        >
                                            <ArrowRightIcon className="h-6 w-6" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollAnimationWrapper>

                    </div>
                </div>
            </div>
        </>
    )
}
