'use client'

import { motion } from "framer-motion"
import { ScrollAnimationWrapper } from "./misc/ScrollAnimationWrapper"
import { getScrollAnimation } from "./utils/getScrollAnimation";
import { useMemo, useState } from "react";
import { ButtonPrimary } from "./buttons/ButtonPrimary";
import { CalendlyWidget } from "./modals/CalendlyWidget";

export const Booking = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    const [active, setActive] = useState<boolean>(false)

    const onHandleClick = ({ target }: { target: any }) => {
        setActive(true)
    }

    return (
        <>
            <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14 py-12 pt-32 mb-12" id="book">
                <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                    <div className="mb-12">
                        <ScrollAnimationWrapper className="relative w-full mt-2 mb-8">
                            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                                <div className="absolute rounded-xl sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500 border-2 border-gray-500 hover:border-nutricare-100 transition-all">
                                    <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0 mt-2">
                                        <h5 className="text-nutricare-200 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                                            Agenda una cita con <br /> nuestros especialistas!
                                        </h5>
                                        <p className="nutricare-200">Para evaluar tus necesidades nutricionales específicas.</p>
                                    </div>
                                    <ButtonPrimary addClass={active?"text-white-500 bg-nutricare-200":"text-white-500 bg-nutricare-100"} onClick={onHandleClick}>Agendar Ahora</ButtonPrimary>
                                </div>
                                <div
                                    className="absolute bg-nutricare-200 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0 "
                                    style={{ filter: "blur(114px)" }}
                                ></div>
                            </motion.div>
                        </ScrollAnimationWrapper>
                    </div>
                </div>
            </div>
            {
                active && (
                    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full pt-16 mb-12" id="book">
                        <div className="max-w-screen-xl  sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                            <div className="mb-12">
                                <ScrollAnimationWrapper className="relative w-full mt-2 mb-8">
                                    <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                                        <div className="absolute rounded-xl sm:px-12 w-full justify-between items-center z-10 bg-white-500 border-2 border-gray-500 hover:border-nutricare-100 transition-all">
                                            <div className="mb-6 sm:mb-0 mt-2">
                                                <div className="h-auto w-auto"><CalendlyWidget addClass="h-96" /></div>
                                            </div>
                                        </div>
                                        <div
                                            className=" bg-nutricare-200 opacity-5 w-full roudned-lg h-60 sm:h-56 top-0 mx-auto left-0 right-0 "
                                            style={{ filter: "blur(114px)" }}
                                        ></div>
                                    </motion.div>
                                </ScrollAnimationWrapper>
                            </div>
                        </div>
                    </div >
                )
                    
            }

        </>
    )
}