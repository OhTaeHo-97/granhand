'use client'

import { useState } from "react";

const categories = ['All', 'News', 'Culture', 'Life', 'Team', 'Essay', 'Film'];

export default function JournalTitle({ showSubmenu }: { showSubmenu: boolean }) {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // const filteredPosts = selectedCategory === 'All'
    // ? posts
    // : posts.filter(post => post.category.replace('#', '') === selectedCategory);

    return (
        <>
            {!showSubmenu ? (
                    <h2 className={`text-lg font-medium text-left mb-8 border-t pt-4`}>JOURNAL</h2>
                ) : (
                    <div className={`flex flex-col md:flex-row md:items-center md:justify-between mb-8 border-t pt-4`}>
                        <h2 className={`text-lg font-medium text-left`}>JOURNAL</h2>

                        {/* 카테고리 메뉴 */}
                        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
                            {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`text-sm ${
                                selectedCategory === category
                                    ? 'text-black font-semibold'
                                    : 'text-gray-400'
                                } transition-colors min-w-[5%]`}
                            >
                                {category}
                            </button>
                            ))}
                        </div>
                    </div>
                )
            }
        </>
    )
}