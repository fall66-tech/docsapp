import React from 'react'
import { TbFileStar } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"


function Card({data, reference}) {
  return (
    <div>
      <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} className=" relative flex-shrink-0 cards w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden">
        <TbFileStar />
        <p className=' text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
        <div className="footer absolute bottom-0  w-full  left-0">
            <div className=' flex items-center justify-between px-8 py-3 mb5'>
                <h5>{data.filesize}</h5>
                <span className=' w-5 h-5 bg-white rounded-full flex text-black items-center justify-center'>
                    {
                        data.close? <IoIosClose /> : <FiDownload />
                    }
                    </span>
            </div>
            {
                data.tag.isOpen && (<div className={`tag w-full py-4 ${data.tag.tagcolor === "blue" ? "bg-blue-600" : data.tag.tagcolor === "purple" ? "bg-purple-600" :
                "bg-green-600"} flex justify-center items-center`}> 
                <h3 className=' text-sm font-semibold'>{data.tag.tagtitle}</h3>
                </div>)
            }
            
        </div>
      </motion.div>
    </div>
  )
}

export default Card
