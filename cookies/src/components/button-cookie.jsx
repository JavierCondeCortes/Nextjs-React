'use client';

import React, { useTransition } from "react";

import {createCookie as serverCreateCookie} from "../cookies/create-cookie/set-cookie";


export default function ButtonCookie() {
    const [isPending, startTransition] = useTransition();

    const data={ numbers:[0,1,2,3], sum:6,total:4}
    const cadena=JSON.stringify(data);
    const data2=JSON.parse(cadena);

    
    const handleClick = () => {
        startTransition(() => {
            serverCreateCookie();
        });
    };
    
    return (
            <button className="cursor-pointer"
            onClick={handleClick}>Incrementar</button>
    );
}


