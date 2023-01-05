import { ErrorInfo } from "react";

const USERAPI = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"

export const getAllusers = async () => {
    try {
        const res = await fetch(USERAPI)
        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log(error.message);
    }
}


export const getSingleUser = async (id:string|undefined) => {
    try {
        const res = await fetch(USERAPI + `/${id}`)
        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log(error.message);
    }
}