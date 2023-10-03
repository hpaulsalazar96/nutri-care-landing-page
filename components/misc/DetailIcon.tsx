'use client'

import { motion } from "framer-motion"
import { getScrollAnimation } from "./../utils/getScrollAnimation";
import { useMemo } from "react";

type Props = {
    index: number,
    name?: string,
    description?: string,
    Icon?: any
}

export const DetailIcon: React.FC<Props> = ({ index, name, description, Icon }) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <>
            <motion.div
                className="flex items-center justify-start rounded-xl sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                custom={{ duration: 2 + index }}
                variants={scrollAnimation}
                whileHover={{
                    scale: 1.15,
                    transition: {
                        duration: .2
                    }
                }}
            >
                <div className="flex mx-auto w-40 sm:w-auto ">
                    <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full transition ease-in-out shadow shadow-md hover:drop-shadow-[0_0_0.3rem_#07cce3]">
                        <Icon className="h-6 w-6 fill-nutricare-200 hover:fill-nutricare-100 transition ease-in-out delay-25" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xl text-nutricare-200 font-bold">
                            {description}
                        </p>
                        <p className="text-lg text-nutricare-200">{name}</p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}