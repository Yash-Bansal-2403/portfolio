import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
export default function About({ pageInfo }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 py-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <Image
        className="-mb-20 md:mb-3 flex-shrink w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[300px]"
        src={urlFor(pageInfo?.profilePic).url()}
        alt="Portfolio profile picture"
        width={100}
        height={100}
      />
      <div className="space-y-6 px-0 md:px-10 mt-6">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
