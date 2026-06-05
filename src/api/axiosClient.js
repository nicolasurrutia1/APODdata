import axios from "axios";

export const nasaClient = axios.create({
    baseURL: "https://api.nasa.gov/planetary/apod",
    timeout: 15000,
})