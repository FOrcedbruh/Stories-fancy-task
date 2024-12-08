"use client"
import { FC } from "react";
import styles from './Header.module.scss'
import addIcon from './../../icons/addIcon.svg';
import Image from "next/image";
import { Story } from "../Story/Story";
import { stories } from "@/data/stories";
import { useViewStory } from "@/zustand/useViewStory";



const Header: FC = () => {


    const { setIsView } = useViewStory()


    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Stories</h1>
            </div>
            <div className={styles.stories}>
                <div className={styles.addBtn}>
                    <Image alt="" src={addIcon} width={40} height={40}/>
                </div>
                {stories.map(story => {
                    return (
                        <div key={story.id} onClick={() => setIsView(true, story.id)}>
                            <Story  props={story}/>
                        </div>
                    )
                })}
            </div>
        </header>
    )
}

export default Header;