import React from 'react'
import { GoSearch } from "react-icons/go"
import { MdKeyboardVoice, MdApps } from "react-icons/md"
import { BiVideoPlus } from "react-icons/bi"
import { BsBell } from "react-icons/bs"

function Cmp() {
    return (
        <div className=" bg-zinc-800 flex justify-evenly w-4/6 ">
            <Search />
            <IconGrids />
        </div>
    )
}

const Search = () => {
    return (
        <div className="flex items-center">
            <input type="search" placeholder="Search" className='h-8 w-96 bg-zinc-900 placeholder:font-bold px-5 text-white focus:border-zinc-600 ' />
            <button className="bg-zinc-700 h-8 w-16 flex justify-center items-center"><GoSearch color="white" /></button>
            <button className="bg-zinc-900 h-10 w-10 flex justify-center items-center text-2xl mx-1 rounded-full"><MdKeyboardVoice color="white" /></button>
        </div>
    )
}

const IconGrids = () => {
    return (
        <div className="flex items-center text-2xl gap-6 text-white">
            <BiVideoPlus className="hover:cursor-pointer" />
            <MdApps className="hover:cursor-pointer" />
            <BsBell className="hover:cursor-pointer" />
            <img src={"https://res.cloudinary.com/practicaldev/image/fetch/s--jZD90FP2--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/716988/48d8d479-07b2-442d-adf4-ba2fa986b901.png"} className="inline-block h-8 w-8  hover:cursor-pointer rounded-full ring-2 ring-white" alt="profile" />
        </div>
    )
}

export default Cmp