import { IStory } from "@/types/IStory";
import ilyaImg from "@/images/ilyaImg.jpg"
import kolyaIng from "@/images/kolyaImg.jpg"

export const stories: IStory[] = [
    {
        author: {
            name: "Kolya",
            avatar: "https://avatar.iran.liara.run/public/50"
        },
        src: [kolyaIng],
        created_at: Date.now(),
        expiredIn: "24h",
        id: 0,
        isVisited: false
    },
    {
        author: {
            name: "Ilya",
            avatar: "https://avatar.iran.liara.run/public/23"
        },
        created_at: Date.now(),
        src: [kolyaIng, ilyaImg],
        id: 1,
        isVisited: false,
        expiredIn: "24h"
    }
]