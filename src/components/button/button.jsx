import React from "react";
import Link from "next/link";

const Button=({text,url})=>{
    return(
        <>
        <Link href={url}>
        <button className="inline-block w-fit px-8 py-3 bg-[#368d63] text-white font-bold rounded-md text-lg hover:bg-[#47a876] transition">{text}
            </button>
            </Link>
        </>
    )
}
export default Button;