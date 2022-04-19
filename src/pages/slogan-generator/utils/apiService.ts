import axios from "axios";

export const API_URL = 'http://5c91-85-117-98-181.ngrok.io';

export const getSlogans = async (word: string) => {
    return await axios.get(API_URL, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        params: {
            query: word,
        }
    })
}