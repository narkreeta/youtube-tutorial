import React from 'react'
import { RecoMends } from "../../Data"

function Cmp() {
    const [select, setSelect] = React.useState(1)
    return (
        <>
            <div className="w-auto h-10 bg-zinc-800 flex overflow-x-scroll overflow-y-hidden ">
                {
                    RecoMends.map(i => {
                        return (
                            <ScrollRecoMends unique={i.id === select} data={i.ln} getId={setSelect} key={i.id} uid={i.id} />
                        )
                    })
                }
            </div>
        </>
    )
}


const ScrollRecoMends = ({ unique, data, getId, uid }) => {
    let refer = React.useRef()
    let classList
    if (unique) {
        classList = "bg-white whitespace-nowrap text-black rounded-full hover:cursor-pointer text-sm flex items-center mx-4 px-4 my-1"
    } else {
        classList = "bg-zinc-600 hover:bg-zinc-500 whitespace-nowrap text-white rounded-full hover:cursor-pointer text-sm flex items-center mx-4 px-4 my-1"
    }
    return (
        <div ref={refer} onClick={() => getId(uid)} className={classList}>{data}</div>
    )
}


export default Cmp;