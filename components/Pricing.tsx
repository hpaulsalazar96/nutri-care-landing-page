'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { getScrollAnimation } from "./utils/getScrollAnimation";
import { ScrollAnimationWrapper } from "./misc/ScrollAnimationWrapper";
import { useMemo } from "react";
import { ModalButton } from "./misc/ModalButton";

export const Pricing = ({ }) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <>
            <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="pricing">
                <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                    <div className="flex flex-col w-full">
                        <ScrollAnimationWrapper>
                            <motion.h3
                                variants={scrollAnimation}
                                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-nutricare-200 leading-relaxed"
                            >
                                Agenda una Cita
                            </motion.h3>
                            <motion.p
                                variants={scrollAnimation}
                                className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
                            >
                                Mira lo que te ofrecemos en Nutri Care
                            </motion.p>
                        </ScrollAnimationWrapper>
                        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
                            <ScrollAnimationWrapper className="flex justify-center">
                                <motion.div
                                    variants={scrollAnimation}
                                    className="flex flex-col justify-center items-center border-2 border-gray-500 hover:border-nutricare-100 rounded-xl py-4 px-4 lg:px-6 xl:px-10"
                                    whileHover={{
                                        scale: 1.05,
                                        transition: {
                                            duration: .2
                                        }
                                    }}
                                >
                                    <div className="p-1 lg:p-0 mt-2 lg:mt-4">
                                        <Image
                                            src="/assets/firstcheck.png"
                                            width={145}
                                            height={165}
                                            alt="firstcheck"
                                        />
                                    </div>
                                    <p className="text-lg text-nutricare-200 font-medium capitalize sm:my-4">
                                        <strong>Tu Primera Consultoria Nutricional</strong>
                                    </p>
                                    <p className="flex flex-col list-inside items-start text-left text-nutricare-200 flex-grow">
                                        Realizaremos una valoración nutricional completa, te brindamos asesoría personalizada a tus necesidades para mejorar tu estado nutricional. Y te entregamos gratis un plan para tu nuevo estilo de vida
                                    </p>
                                    <div className="flex flex-col w-full justify-center mb-2 flex-none mt-2">
                                        <p className="text-2xl text-nutricare-200 text-center ">
                                            $25
                                        </p>
                                    </div>
                                </motion.div>
                            </ScrollAnimationWrapper>
                            <ScrollAnimationWrapper className="flex justify-center">
                                <motion.div
                                    variants={scrollAnimation}
                                    className="flex flex-col justify-center items-center border-2 border-gray-500 hover:border-nutricare-100 rounded-xl py-4 px-4 lg:px-6 xl:px-10"
                                    whileHover={{
                                        scale: 1.05,
                                        transition: {
                                            duration: .2
                                        }
                                    }}
                                >
                                    <div className="p-1 lg:p-0 mt-2 lg:mt-4">
                                        <Image
                                            src="/assets/diagnostic.png"
                                            width={145}
                                            height={165}
                                            alt="diagnostic"
                                        />
                                    </div>
                                    <p className="text-lg text-nutricare-200 font-medium capitalize sm:my-4">
                                        <strong>Diagnóstico y Asesoría Nutricional{" "}</strong>
                                    </p>
                                    <p className="flex flex-col list-inside items-start text-left text-nutricare-200 flex-grow">
                                        Tras evaluar tu caso obtendrás guias para alcanzar tu peso ideal y mejorar tu salud. Obtendrás acceso a una guía paso a paso para cambiar tus hábitos y logras tus objetivos
                                    </p>
                                    <div className="flex flex-col w-full justify-center mb-2 flex-none mt-2">
                                        <p className="text-2xl text-nutricare-200 text-center ">
                                            $49
                                        </p>
                                    </div>
                                </motion.div>
                            </ScrollAnimationWrapper>
                            <ScrollAnimationWrapper className="flex justify-center" >
                                <motion.div
                                    variants={scrollAnimation}
                                    className="flex flex-col justify-center items-center border-2 border-gray-500 hover:border-nutricare-100 rounded-xl py-4 px-4 lg:px-6 xl:px-10"
                                    whileHover={{
                                        scale: 1.05,
                                        transition: {
                                            duration: .2
                                        }
                                    }}
                                >
                                    <div className="p-1 lg:p-0 mt-2 lg:mt-4">
                                        <Image
                                            src="/assets/support.png"
                                            width={145}
                                            height={165}
                                            alt="support"
                                        />
                                    </div>
                                    <p className="text-lg text-nutricare-200 font-medium capitalize sm:my-4">
                                        <strong>Acompañamiento Nutricional a largo Plazo{" "}</strong>
                                    </p>
                                    <p className="flex flex-col list-inside items-start text-left text-nutricare-200 flex-grow">
                                        Te acompañamos en el proceso llevando un control y seguimiento de tu progreso hasta alcanzar los resultados esperados
                                    </p>
                                    <div className="flex flex-col w-full justify-center mb-2 flex-none mt-2">
                                        <p className="text-2xl text-nutricare-200 text-center ">
                                            $99
                                        </p>
                                    </div>
                                </motion.div>
                            </ScrollAnimationWrapper>
                        </div>
                    </div>
                    <ModalButton/>
                </div>

            </div>
        </>
    )
}