import React from "react";

import {getCookie} from "@/cookies/get-cookie/get-cookie";
import ButtonCookie from "./button-cookie";

export default async function Cookie() {
    const cookie = await getCookie();
    
    return (
        <div>
            <h1>Valor de la cookie: {cookie}</h1>
            <ButtonCookie />
        </div>
    );
}
