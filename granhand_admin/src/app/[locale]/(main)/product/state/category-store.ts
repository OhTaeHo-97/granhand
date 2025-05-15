import { create } from "zustand";

export type CategoryNode = {
    id: string
    title: string
    url: string
    children?: CategoryNode[]
}

interface CategoryState {
    categories: CategoryNode[]
    setCategories: (cats: CategoryNode[]) => void
}

export const useCategoryStore = create<CategoryState>((set) => ({
    categories: [
        {
            id: "granhand",
            title: "granhand",
            url: "/product/giftset",
            children: [
                {
                    id: "giftset",
                    title: "giftset",
                    url: "/product/giftset",
                    children: [{ id: "granhand_all", title: "all", url: "/product/giftset" }],
                },
                {
                    id: "perfume",
                    title: "perfume",
                    url: "/product/signiture",
                    children: [
                        { id: "signature", title: "signature", url: "/product/signiture" },
                        { id: "sub_perfume", title: "perfume", url: "/product/perfume" },
                        { id: "multiperfume", title: "multiperfume", url: "/product/multiperfume" },
                    ],
                },
                {
                    id: "space",
                    title: "space",
                    url: "/product/diffuser",
                    children: [
                        { id: "diffuser", title: "diffuser", url: "/product/diffuser" },
                        { id: "candle", title: "candle", url: "/product/candle" },
                        { id: "sachet", title: "sachet", url: "/product/sashe" },
                    ],
                },
                {
                    id: "body",
                    title: "body",
                    url: "/product/handcream",
                    children: [
                        { id: "handcream", title: "handcream", url: "/product/handcream" },
                        { id: "handwash", title: "handwash", url: "/product/handwash" },
                    ],
                },
                {
                    id: "natural",
                    title: "natural",
                    url: "/product/natural",
                    children: [
                        { id: "natural_spray", title: "natural_spray", url: "/product/natural" },
                        { id: "tea", title: "tea", url: "/product/tea" },
                    ],
                },
                {
                    id: "tools",
                    title: "tools",
                    url: "/product/tools",
                    children: [
                        { id: "tools_all", title: "all", url: "/product/tools" },
                    ],
                },
            ]
        },
        {
            id: "komfortabel",
            title: "komfortabel",
            url: "/product/komfortabel",
            children: [
                {
                    id: "komfortabel",
                    title: "sub_komfortabel",
                    url: "/product/komfortabel",
                    children: [
                        { id: "sub_komfortabel_all", title: "all", url: "/product/komfortabel" },
                    ]
                }
            ]
        }
    ],
    setCategories: (cats) => set({ categories: cats }),
}))