"use client"
import { FC } from "react";
import { useViewStory } from "@/zustand/useViewStory";
import { StoryData } from "@/components/StoryData/StoryData";

const App: FC = () => {

    const { isView, startStory } = useViewStory()

    return (
        <main className="main">
            Home
            {isView && <StoryData start={startStory}/>}
        </main>
    )
}

export default App;