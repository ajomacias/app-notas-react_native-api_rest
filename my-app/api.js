import { api, api2 } from './helpers/URL_API';

const API = api;
const API2 = api2;

export const getTasks = async () => {
    const res = await fetch(API);
    return await res.json();
};