import { FC } from "react";
import styles from './Story.module.scss'
import { IStory } from "@/types/IStory";
import Image from "next/image";

interface IStoryProps {
    props: IStory
}


const Story: FC<IStoryProps> = ({props}) => {
    return (
        <div className={styles.story}>
            <Image priority src={props.author.avatar} alt="" width={70} height={70}/>
        </div>
    )
}

export { Story };