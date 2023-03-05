import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: 'b06rtnv9',
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
};

// Set up the client for fetching data in the getProps page functions 
export const sanityClient = createClient(config);

export const urlFor = (source) => 
imageUrlBuilder(config).image(source);