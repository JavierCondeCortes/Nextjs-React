'use server';

import { cookies } from 'next/headers'; 

export async function createCookie() {
    try {
        
        const cookieStore = await cookies();
        const cookie = cookieStore.get("number");
        cookieStore.set("number", parseInt(cookie?.value ?? 0) + 1);

    } catch (error) {
        console.log();
    }
}   