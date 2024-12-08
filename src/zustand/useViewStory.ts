import { create } from "zustand";

interface IStore {
    isView: boolean
    startStory: number
    setIsView: (isView: boolean, startStory: number) => void
}

export const useViewStory = create<IStore>((set) => ({
    startStory: 0,
    isView: false,
    setIsView: (isView: boolean, startStory: number) => set({isView: isView, startStory: startStory})
}))