import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import { BiLinkExternal } from "react-icons/bi"
import { AiFillCheckCircle } from "react-icons/ai"
import { ChannelsData } from "../../Data"

//Loader
const Loader = () => {
    return (
        <div className="animate-pulse">
            <div className="h-3/5 w-full bg-zinc-400" />
            <div className="flex justify-between my-2">
                <div className="h-8 w-8 rounded-full bg-zinc-400" />
                <div className="h-2 w-3/4 bg-zinc-400" />
                <BsThreeDotsVertical color="white" />
            </div>
            <div className="h-2 w-2/4 mx-12 my-3 bg-zinc-400" />
            <div className="h-2 w-1/4 mx-12 my-3 bg-zinc-400" />
        </div>
    )
}

//Main component
function Cmp() {
    return (
        <div className="grid grid-cols-4 gap-y-6">
            {ChannelsData.map(i => {
                return i.Type === "Ads" ? <Adbox key={i.id} Cover={i.Cover} Title={i.Title} SubTitle={i.SubTitle} AdSubTitle={i.AdSubTitle} /> : i.Type === "Normal" ? <NormalVideo key={i.id} Cover={i.Cover} AvatarUrl={i.AvatarUrl} Title={i.Title} ChannelName={i.ChannelName} verified={i.Verified} Views={i.Views} Time={i.Time} /> : i.Type === "Live" ? <LiveVideo key={i.id} Cover={i.Cover} AvatarUrl={i.AvatarUrl} Title={i.Title} ChannelName={i.ChannelName} verified={i.Verified} Views={i.Views} /> : null
            })}
        </div>
    )
}


//for normalvideo box
const NormalVideo = ({ verified, Cover, AvatarUrl, Title, ChannelName, Views, Time }) => {
    const [Loaded, setLoaded] = React.useState(false)
    return (
        <div className="m-4 hover:cursor-pointer">
            <img src={Cover} alt="video" className="w-full" onLoad={() => { setLoaded(true) }} />
            {Loaded ? (
                <>
                    <AvatarTitleDot AvatarUrl={AvatarUrl} Title={Title} />
                    <ChanView verified={verified} ChannelName={ChannelName} Views={Views} Time={Time} />
                </>
            ) : <Loader />}
        </div>
    )
}

const ChanView = ({ verified, ChannelName, Views, Time }) => {
    const [Val, SetVal] = React.useState(Views)
    if (Val > 1000) {
        SetVal((Val / 1000).toFixed(1) + "K")
    }
    if (Val > 1000000) {
        SetVal((Val / 1000000).toFixed(1) + "M")
    }
    return (
        <div className="flex flex-col gap-1 mx-12">
            <div className="text-xs flex text-zinc-400 items-center gap-1 font-bold">
                <h3>{ChannelName}</h3>
                {verified ? <AiFillCheckCircle /> : null}
            </div>
            <h3 className="text-xs  text-zinc-400  gap-1 font-bold">{Val} views &middot; {Time}</h3>
        </div>
    )
}


//for Live video box
const LiveVideo = ({ verified, Cover, AvatarUrl, Title, ChannelName, Views }) => {
    const [Loaded, setLoaded] = React.useState(false)
    return (
        <div className="m-4 hover:cursor-pointer">
            <img src={Cover} alt="video" className="w-full" onLoad={() => { setLoaded(true) }} />
            {Loaded ? (
                <>
                    <AvatarTitleDot AvatarUrl={AvatarUrl} Title={Title} />
                    <LiveSignal verified={verified} ChannelName={ChannelName} Views={Views} />
                </>
            ) : <Loader />}
        </div>
    )
}

const AvatarTitleDot = ({ AvatarUrl, Title }) => {
    const [classes, setClasses] = React.useState("opacity-0")
    return (
        <div className="flex justify-between my-2" onMouseEnter={() => { setClasses("opacity-100 ease-in duration-300") }} onMouseLeave={() => { setClasses("opacity-0") }} >
            <img src={AvatarUrl} alt="avatar" className="w-8 h-8 rounded-full" />
            <h3 className="text-white font-sans text-sm font-bold w-3/4">{Title}</h3>
            <BsThreeDotsVertical color="white" className={classes} />
        </div>
    )
}

const LiveSignal = ({ verified, ChannelName, Views }) => {
    const [Val, SetVal] = React.useState(Views)
    if (Val > 1000) {
        SetVal((Val / 1000).toFixed(0) + "K")
    }
    if (Val > 1000000) {
        SetVal((Val / 1000000).toFixed(0) + "M")
    }
    return (
        <div className="flex flex-col gap-1 mx-12">
            <div className="text-xs flex text-zinc-400 items-center gap-1 font-bold">
                <h3>{ChannelName}</h3>
                {verified ? <AiFillCheckCircle /> : null}
            </div>
            <h3 className="text-xs text-zinc-400 gap-1 font-bold font-sans">{Val} watching</h3>
            <div className="text-red-500 text-xs w-4/12 text-center whitespace-nowrap font-bold border-red-500 rounded border-2 font-sans">
                LIVE NOW
            </div>
        </div>
    )
}


// for advertise box
const Adbox = ({ Cover, Title, SubTitle, AdSubTitle }) => {
    const [Loaded, setLoaded] = React.useState(false)
    return (
        <div className="m-4 hover:cursor-pointer">
            <ImagWithExt Cover={Cover} Check={setLoaded} />
            {Loaded ? (
                <>
                    <TitleDot Title={Title} />
                    <h4 className="text-sm text-zinc-400 w-5/6">{SubTitle}</h4>
                    <Adtag AdSubTitle={AdSubTitle} />
                </>
            ) : <Loader />}
        </div>
    )
}


const ImagWithExt = ({ Cover, Check }) => {
    const [vis, setvis] = React.useState(false)
    return (
        <div className="relative">
            <img src={Cover} alt="ads" className="w-full" onLoad={() => {
                setvis(true)
                Check(true)
            }} />
            {vis ? <div className="bg-black absolute bottom-2 right-2 w-6 h-6 flex items-center justify-center  "><BiLinkExternal color="white" /></div> : null}
        </div>
    )
}


const Adtag = ({ AdSubTitle }) => {
    return (
        <div className="flex my-1">
            <h4 className="text-xs text-black bg-yellow-500 w-5 text-center rounded-sm">Ad</h4>
            <h4 className="text-xs font-bold text-zinc-400 mx-2">{AdSubTitle}</h4>
        </div>
    )
}

const TitleDot = ({ Title }) => {
    return (
        <div className="flex justify-between my-2">
            <h3 className="text-white font-sans text-sm font-bold w-3/4">{Title}</h3>
            <BsThreeDotsVertical color="white" />
        </div>
    )
}

export default Cmp