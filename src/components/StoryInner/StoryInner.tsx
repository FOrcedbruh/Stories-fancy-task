"use client"
import { Dispatch, FC, SetStateAction, useState } from "react";
import styles from './StoryInner.module.scss'
import { IStory } from "@/types/IStory";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/scss";
import 'swiper/scss/effect-fade';
import { motion } from "framer-motion";

interface IStoryInner {
    props: IStory,
    startProgress: number,
    setStartProgress: Dispatch<SetStateAction<number>>
}


const StoryInnner: FC<IStoryInner> = ({ props, startProgress }) => {

    
    const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0)

    const TIME: number = 3

    const onChangeSwiperIndex = (swiper: SwiperType) => {
        setActiveMediaIndex(swiper.activeIndex)
    }


    return (
        <div className={styles.story}>
            <div className={styles.progress}>
                {props.src.map((el, index) => {
                    return (
                        <div key={index} className={styles.timeFrame}>
                            <motion.div
                                initial={{width: startProgress}}
                                animate={{width: activeMediaIndex === index ?  '100%' : "0"}}
                                exit={{width: startProgress}}
                                transition={{  duration: activeMediaIndex === index ? TIME : 0, ease: "linear" }}>
                            </motion.div>
                        </div>
                    )
                })}
            </div>
            <Swiper onSlideChange={onChangeSwiperIndex} className={styles.swiper} modules={[EffectFade]} navigation={true} effect="fade">
                {props.src.map((image, index) => {
                    return (
                        <SwiperSlide key={index} className={styles.slide}>
                            <Image src={image} alt="image"/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default StoryInnner