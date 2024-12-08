import { StaticImageData } from "next/image"

interface IAuthor {
    name: string,
    avatar: string
}

export interface IStory {
    author: IAuthor,
    src: string[] | StaticImageData[],
    created_at: number,
    expiredIn: string,
    id: number,
    isVisited: boolean
}