const Navigation = () => {
    return (
        <nav className="border w-[1360px] flex justify-between px-[40px] py-[4.5px] rounded-[32px] items-center bg-white shadow-md mt-[40px]">
            <h1 className="text-h2-heading font-heebo">Deeya</h1>
            <div className="flex gap-[50px] items-center">
                <ul className="flex gap-6 font-heebo text-body-text">
                    <li className="cursor-pointer hover:text-green-600">Home</li>
                    <li className="cursor-pointer hover:text-green-600">Marketplace</li>
                    <li className="cursor-pointer hover:text-green-600">Blog</li>
                    <li className="cursor-pointer hover:text-green-600">About Us</li>
                    <li className="cursor-pointer hover:text-green-600">Contact Us</li>
                </ul>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </span>
                <div className="space-x-[32px]">
                    <button>Log In</button>
                    <button className="px-[14px] py-[10px] rounded-2xl bg-[#2FB078] text-white w-[120px]">Register</button>
                </div>
            </div>
        </nav>
    );
}



export default Navigation;