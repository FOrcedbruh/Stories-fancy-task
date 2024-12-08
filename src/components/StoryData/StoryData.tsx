"use client"
import { FC, useState, useRef } from "react";
import styles from './StoryData.module.scss'
import { stories } from "@/data/stories";
import StoryInnner from "../StoryInner/StoryInner";
import {  Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper/modules";
import "swiper/scss/effect-cube";
import "swiper/scss";

interface IStoryDataProps {
    start: number
}

export const StoryData: FC<IStoryDataProps> = ({ start }) => {

    
    const [startProgress, setStartProgress] = useState<number>(0)
    const swiperRef = useRef<any>(null)

    const nextHandler = () => {
        swiperRef.current.swiper.slideNext()
    }

    const prevHandler = () => {
        swiperRef.current?.swiper.slidePrev()
    }


    return (
        <>
            <section className={styles.window}>
                <div className={styles.prev} onClick={prevHandler}></div>
                <div className={styles.next} onClick={nextHandler}></div>
                <Swiper ref={swiperRef} allowTouchMove={false} modules={[EffectCube]} effect="cube" className={styles.wrapperSwiper}>
                    {stories.map(story => {
                        return (
                            <SwiperSlide key={story.id}>
                                <StoryInnner startProgress={startProgress} setStartProgress={setStartProgress} props={story}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </section>
        </>
    )
}

