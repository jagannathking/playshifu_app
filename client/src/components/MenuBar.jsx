import { useState } from "react";

const menuItems = [
    {
        label: "Shop By Category",
        type: "dropdown",
        content: [
            { title: "Problem Solving Toys", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fproblem-solving.webp&w=3840&q=75" },
            { title: "Stem Toys", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fstem.webp&w=3840&q=75" },
            { title: "Social & Emotional Development Toys", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fsocial-skills.webp&w=3840&q=75" },
            { title: "Animals & Dinos Toys", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fanimals-and-dinos.webp&w=3840&q=75" },
            { title: "Pretend Play Toys", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fpretend-play.webp&w=3840&q=75" },
            { title: "Birthday Gift Toys", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fbirthday-gifts.webp&w=3840&q=75" },
            { title: "Super Saver Deals", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fsupersaver.webp&w=3840&q=75" },
            { title: "Best Seller Toys", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fbestseller.webp&w=3840&q=75" },
            { title: "Orboot", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Forboot.webp&w=3840&q=75" },
            { title: "Tacto", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Ftacto.webp&w=3840&q=75" },
            { title: "Plugo", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fplugo.webp&w=3840&q=75" },
            { title: "Lovabies", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Flovabies%2B.webp&w=3840&q=75" },
        ],
    },
    {
        label: "Shop By Age",
        type: "dropdown",
        content: [
            { title: "4-6", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fages%2F4-6.webp&w=3840&q=75" },
            { title: "6-8", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fages%2F6-8.webp&w=3840&q=75" },
            { title: "8-10", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fages%2F8-10.webp&w=3840&q=75" },
            { title: "10+", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fages%2F10-plus.webp&w=3840&q=75" },
        ],
    },
    { label: "Super Saver Deals", type: "link" },
    { label: "Birthday Gifts", type: "link" },
    { label: "Return Gifts", type: "link" },
    { label: "Shop All", type: "link" },
    {
        label: "More",
        type: "dropdown",
        content: [
            { title: "Device Compatibility", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fmore-pages%2Fdevice-compatability.webp&w=3840&q=75" },
            { title: "Free-E-Books", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fmore-pages%2Fe-book.webp&w=3840&q=75" },
            { title: "Parent Hub", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fmore-pages%2Fparent-hub.webp&w=3840&q=75" },
            { title: "Blogs", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fmore-pages%2Fblogs.webp&w=3840&q=75" },
            { title: "Contact Us", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fmore-pages%2Fcontact-us.webp&w=3840&q=75" },
            { title: "About Us", img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fmore-pages%2Fabout-us.webp&w=3840&q=75" },
        ],
    },
];

const MenuBar = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMouseEnter = (item) => {
        if (item.type === "dropdown") setActiveMenu(item);
        else setActiveMenu(null);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    return (
        <div className="bg-white border-b border-gray-200 font-[Inter] relative z-20" onMouseLeave={handleMouseLeave}>
            {/* Navbar */}
            <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between text-[18px] font-semibold text-gray-800 h-20">
                {menuItems.map((item) => (
                    <div
                        key={item.label}
                        onMouseEnter={() => handleMouseEnter(item)}
                        className="relative px-6 py-3 cursor-pointer hover:text-pink-600 transition-all duration-200"
                    >
                        {item.label}
                    </div>
                ))}
            </div>

            {/* Dropdown */}
            {activeMenu && (
                <div className="w-full bg-white border-t border-gray-200 py-10">
                    <div className="max-w-[1440px] mx-auto grid grid-cols-6 gap-8 px-6">
                        {activeMenu.content.map((entry, index) => (
                            <div key={index} className="flex flex-col items-center group hover:scale-105 transition-transform duration-200">
                                <img
                                    src={entry.img}
                                    alt={entry.title}
                                    className="w-24 h-24 rounded-full bg-gray-100 object-contain p-3 shadow-sm"
                                />
                                <p className="mt-3 text-center text-[16px] font-semibold text-gray-700 group-hover:text-pink-600 transition">
                                    {entry.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuBar;
