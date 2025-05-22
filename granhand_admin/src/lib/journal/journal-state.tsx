import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"

export type JournalTagNode = {
    id: string
    title: string
}

interface JournalTagState {
    tags: JournalTagNode[]
    setTags: (tag: JournalTagNode[]) => void
}

export const useJournalTagStore = create<JournalTagState, [["zustand/persist", JournalTagState]]>(persist(
    (set) => ({
        tags: [
            {
                id: "news",
                title: "News"
            },
            {
                id: "culture",
                title: "Culture"
            },
            {
                id: "life",
                title: "Life"
            },
            {
                id: "team",
                title: "Team"
            },
            {
                id: "essay",
                title: "Essay"
            },
            {
                id: "Film",
                title: "film"
            }
        ],
        setTags: (tag) => set({ tags: tag }),
    }),
    {
        name: 'journal-tags-storage',
        storage: createJSONStorage(() => localStorage),
    }
))