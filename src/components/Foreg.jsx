import React, { useRef} from "react";
import Card from "./Card";


function Foreg() {
  const ref = useRef();
  const data = [
    {
      desc: "Todays notes, finish his project quickly and then get on to next big project",
      filesize: "4mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Not started", tagcolor:"blue" },
    },
    {
        desc: "Todays notes, finish his project quickly and then get on to next big project",
        filesize: "10mb",
        close: false,
        tag: { isOpen: true, tagtitle: "Finished", tagcolor:"green" },
      },
      {
        desc: "Todays notes, finish his project quickly and then get on to next big project",
        filesize: "2mb",
        close: true,
        tag: { isOpen: true, tagtitle: "pending", tagcolor:"purple" },
      },
  ];
  return (
    <div>
      <div ref={ref} className="foreground w-full h-full p-5  top-0 left-0 fixed z-[3] flex gap-5 flex-wrap">
        { data.map((item, index)=>(
           <div key={index}>
            <Card data={item} reference={ref} />
            </div>
        ))}
        {/* <Card /> */}
      </div>
    </div>
  );
}

export default Foreg;
