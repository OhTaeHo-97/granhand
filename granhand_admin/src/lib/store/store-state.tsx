import { create } from "zustand";

export type StoreCategoryNode = {
    id: string
    title: string
    url: string
    children?: StoreCategoryNode[]
}

interface StoreCategoryState {
    categories: StoreCategoryNode[]
    setCategories: (cats: StoreCategoryNode[]) => void
}

export const useStoreCategoryStore = create<StoreCategoryState>((set) => ({
    categories: [
        {
            id: "store",
            title: "STORE",
            url: "/store/granhand/gwanghwa",
            children: [
                {
                    id: "granhand",
                    title: "granhand",
                    url: "/store/granhand/gwanghwa",
                    children: [
                        { id: "gwanghwa", title: "광화", url: "/store/granhand/gwanghwa" },
                        { id: "dosan", title: "도산", url: "/store/granhand/dosan" },
                        { id: "namsan", title: "남산", url: "/store/granhand/namsan" },
                        { id: "mapo", title: "마포", url: "/store/granhand/mapo" },
                        { id: "seochon", title: "서촌", url: "/store/granhand/seochon" },
                        { id: "sokyeok", title: "소격", url: "/store/granhand/sokyeok" },
                        { id: "bukchon", title: "북촌", url: "/store/granhand/bukchon" },
                        { id: "seokyo", title: "서교", url: "/store/granhand/seokyo" }
                    ],
                },
                {
                    id: "komfortabel",
                    title: "komfortabel",
                    url: "/store/komfortabel/namsan",
                    children: [
                        { id: "k_namsan", title: "남산", url: "/store/komfortabel/namsan" },
                        { id: "anguk", title: "안국", url: "/store/komfortabel/anguk" },
                        { id: "city_office", title: "시청", url: "/store/komfortabel/city_office" },
                    ],
                }
            ]
        }
    ],
    setCategories: (cats) => set({ categories: cats }),
}))