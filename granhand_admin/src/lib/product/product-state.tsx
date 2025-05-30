import { create } from "zustand";

// export type ProductCategoryNode = {
//     id: string
//     title: string
//     url: string
//     children?: ProductCategoryNode[]
// }
export type ProductCategoryNode = {
    idx: number
    catename: string
    catecode: string
    upcate: string
    isshow?: string
    orders: number
    children?: ProductCategoryNode[]
}

export function buildCategoryTree(categories: ProductCategoryNode[]): ProductCategoryNode[] {
    const sortedCategories = [...categories].sort((a, b) => a.orders - b.orders)
    const categoryMap = new Map<string, ProductCategoryNode>()

    sortedCategories.forEach((category) => {
        categoryMap.set(category.catename, { ...category, children: [] })
    })

    const tree: ProductCategoryNode[] = []

    sortedCategories.forEach((category) => {
        const node = categoryMap.get(category.catename)!
        if(category.upcate === '') {
            tree.push(node)
        } else {
            const parent = categoryMap.get(category.upcate)
            if(parent) {
                parent.children!.push(node)
            }
        }
    })

    return tree
}

interface ProductCategoryState {
    categories: ProductCategoryNode[]
    setCategories: (cats: ProductCategoryNode[]) => void
}

export const useProductCategoryStore = create<ProductCategoryState>((set) => ({
    // categories: [
    //     {
    //         idx: 1,
    //         catename: 'granhand',
    //         catecode: 'granhand',
    //         upcate: '',
    //         // isshow: 'Y',
    //         orders: 1,
    //         children: [
    //             {
    //                 idx: 3,
    //                 catename: 'giftset',
    //                 catecode: 'giftset',
    //                 upcate: 'granhand',
    //                 // isshow: 'Y',
    //                 orders: 1,
    //                 children: [{
    //                     idx: 10,
    //                     catename: 'all',
    //                     catecode: 'all',
    //                     upcate: 'giftset',
    //                     isshow: 'Y',
    //                     orders: 1,
    //                     // id: "granhand_all", title: "all", url: "/product/giftset"
    //                 }],
    //             },
    //             {
    //                 idx: 4,
    //                 catename: 'perfume',
    //                 catecode: 'perfume',
    //                 upcate: 'granhand',
    //                 // isshow: 'Y',
    //                 orders: 2,
    //                 // id: "perfume",
    //                 // title: "perfume",
    //                 // url: "/product/signiture",
    //                 children: [
    //                     {
    //                         idx: 11,
    //                         catename: 'signature',
    //                         catecode: 'signature',
    //                         upcate: 'perfume',
    //                         // isshow: 'Y',
    //                         orders: 1,
    //                         // id: "signature", title: "signature", url: "/product/signiture"
    //                     },
    //                     {
    //                         idx: 12,
    //                         catename: 'sub_perfume',
    //                         catecode: 'sub_perfume',
    //                         upcate: 'perfume',
    //                         // isshow: 'Y',
    //                         orders: 2,
    //                         // id: "sub_perfume", title: "perfume", url: "/product/perfume"
    //                     },
    //                     {
    //                         idx: 13,
    //                         catename: 'multiperfume',
    //                         catecode: 'multiperfume',
    //                         upcate: 'perfume',
    //                         // isshow: 'Y',
    //                         orders: 3,
    //                         // id: "multiperfume", title: "multiperfume", url: "/product/multiperfume"
    //                     },
    //                 ],
    //             },
    //             {
    //                 idx: 5,
    //                 catename: 'space',
    //                 catecode: 'space',
    //                 upcate: 'granhand',
    //                 // isshow: 'Y',
    //                 orders: 3,
    //                 // id: "space",
    //                 // title: "space",
    //                 // url: "/product/diffuser",
    //                 children: [
    //                     {
    //                         idx: 14,
    //                         catename: 'diffuser',
    //                         catecode: 'diffuser',
    //                         upcate: 'space',
    //                         // isshow: 'Y',
    //                         orders: 1,
    //                         // id: "diffuser", title: "diffuser", url: "/product/diffuser"
    //                     },
    //                     {
    //                         idx: 15,
    //                         catename: 'candle',
    //                         catecode: 'candle',
    //                         upcate: 'space',
    //                         // isshow: 'Y',
    //                         orders: 2,
    //                         // id: "candle", title: "candle", url: "/product/candle"
    //                     },
    //                     {
    //                         idx: 16,
    //                         catename: 'sachet',
    //                         catecode: 'sachet',
    //                         upcate: 'space',
    //                         // isshow: 'Y',
    //                         orders: 3,
    //                         // id: "sachet", title: "sachet", url: "/product/sashe"
    //                     },
    //                 ],
    //             },
    //             {
    //                 idx: 6,
    //                 catename: 'body',
    //                 catecode: 'body',
    //                 upcate: 'granhand',
    //                 // isshow: 'Y',
    //                 orders: 4,
    //                 // id: "body",
    //                 // title: "body",
    //                 // url: "/product/handcream",
    //                 children: [
    //                     {
    //                         idx: 17,
    //                         catename: 'handcream',
    //                         catecode: 'handcream',
    //                         upcate: 'body',
    //                         // isshow: 'Y',
    //                         orders: 1,
    //                         // id: "handcream", title: "handcream", url: "/product/handcream"
    //                     },
    //                     {
    //                         idx: 18,
    //                         catename: 'handwash',
    //                         catecode: 'handwash',
    //                         upcate: 'body',
    //                         // isshow: 'Y',
    //                         orders: 2,
    //                         // id: "handwash", title: "handwash", url: "/product/handwash"
    //                     },
    //                 ],
    //             },
    //             {
    //                 idx: 7,
    //                 catename: 'natural',
    //                 catecode: 'natural',
    //                 upcate: 'granhand',
    //                 // isshow: 'Y',
    //                 orders: 5,
    //                 // id: "natural",
    //                 // title: "natural",
    //                 // url: "/product/natural",
    //                 children: [
    //                     {
    //                         idx: 19,
    //                         catename: 'natural_spray',
    //                         catecode: 'natural_spray',
    //                         upcate: 'natural',
    //                         // isshow: 'Y',
    //                         orders: 1,
    //                         // id: "natural_spray", title: "natural_spray", url: "/product/natural"
    //                     },
    //                     {
    //                         idx: 20,
    //                         catename: 'tea',
    //                         catecode: 'tea',
    //                         upcate: 'natural',
    //                         // isshow: 'Y',
    //                         orders: 2,
    //                         // id: "tea", title: "tea", url: "/product/tea"
    //                     },
    //                 ],
    //             },
    //             {
    //                 idx: 8,
    //                 catename: 'tools',
    //                 catecode: 'tools',
    //                 upcate: 'granhand',
    //                 // isshow: 'Y',
    //                 orders: 6,
    //                 // id: "tools",
    //                 // title: "tools",
    //                 // url: "/product/tools",
    //                 children: [
    //                     {
    //                         idx: 20,
    //                         catename: 'all',
    //                         catecode: 'all',
    //                         upcate: 'tools',
    //                         // isshow: 'Y',
    //                         orders: 2,
    //                         // id: "tools_all", title: "all", url: "/product/tools"
    //                     },
    //                 ],
    //             },
    //         ]
    //         // id: "granhand",
    //         // title: "granhand",
    //         // url: "/product/giftset",
    //         // children: [
    //         //     {
    //         //         id: "giftset",
    //         //         title: "giftset",
    //         //         url: "/product/giftset",
    //         //         children: [{ id: "granhand_all", title: "all", url: "/product/giftset" }],
    //         //     },
    //         //     {
    //         //         id: "perfume",
    //         //         title: "perfume",
    //         //         url: "/product/signiture",
    //         //         children: [
    //         //             { id: "signature", title: "signature", url: "/product/signiture" },
    //         //             { id: "sub_perfume", title: "perfume", url: "/product/perfume" },
    //         //             { id: "multiperfume", title: "multiperfume", url: "/product/multiperfume" },
    //         //         ],
    //         //     },
    //         //     {
    //         //         id: "space",
    //         //         title: "space",
    //         //         url: "/product/diffuser",
    //         //         children: [
    //         //             { id: "diffuser", title: "diffuser", url: "/product/diffuser" },
    //         //             { id: "candle", title: "candle", url: "/product/candle" },
    //         //             { id: "sachet", title: "sachet", url: "/product/sashe" },
    //         //         ],
    //         //     },
    //         //     {
    //         //         id: "body",
    //         //         title: "body",
    //         //         url: "/product/handcream",
    //         //         children: [
    //         //             { id: "handcream", title: "handcream", url: "/product/handcream" },
    //         //             { id: "handwash", title: "handwash", url: "/product/handwash" },
    //         //         ],
    //         //     },
    //         //     {
    //         //         id: "natural",
    //         //         title: "natural",
    //         //         url: "/product/natural",
    //         //         children: [
    //         //             { id: "natural_spray", title: "natural_spray", url: "/product/natural" },
    //         //             { id: "tea", title: "tea", url: "/product/tea" },
    //         //         ],
    //         //     },
    //         //     {
    //         //         id: "tools",
    //         //         title: "tools",
    //         //         url: "/product/tools",
    //         //         children: [
    //         //             { id: "tools_all", title: "all", url: "/product/tools" },
    //         //         ],
    //         //     },
    //         // ]
    //     },
    //     {
    //         idx: 2,
    //         catename: 'komfortabel',
    //         catecode: 'komfortabel',
    //         upcate: '',
    //         // isshow: 'Y',
    //         orders: 2,
    //         children: [
    //             {
    //                 idx: 9,
    //                 catename: 'sub_komfortabel',
    //                 catecode: 'sub_komfortabel',
    //                 upcate: 'komfortabel',
    //                 // isshow: 'Y',
    //                 orders: 1,
    //                 // id: "komfortabel",
    //                 // title: "sub_komfortabel",
    //                 // url: "/product/komfortabel",
    //                 children: [
    //                     {
    //                         idx: 21,
    //                         catename: 'all',
    //                         catecode: 'all',
    //                         upcate: 'sub_komfortabel',
    //                         // isshow: 'Y',
    //                         orders: 1,
    //                         // id: "sub_komfortabel_all", title: "all", url: "/product/komfortabel"
    //                     },
    //                 ]
    //             }
    //         ]
    //         // id: "komfortabel",
    //         // title: "komfortabel",
    //         // url: "/product/komfortabel",
    //         // children: [
    //         //     {
    //         //         id: "komfortabel",
    //         //         title: "sub_komfortabel",
    //         //         url: "/product/komfortabel",
    //         //         children: [
    //         //             { id: "sub_komfortabel_all", title: "all", url: "/product/komfortabel" },
    //         //         ]
    //         //     }
    //         // ]
    //     }
    // ],
    categories: [],
    setCategories: (cats) => set({ categories: cats }),
}))