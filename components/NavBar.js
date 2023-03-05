import { SocialIcon } from "react-social-icons"; //displays the icon corresponding to the URL provided
import { motion } from "framer-motion";
import Link from "next/link";
import { urlFor } from "../sanity";
export default function NavBar({socials}) {
    return (
        
            <header className="sticky top-0 p-2 flex items-start justify-between max-w-7xl mx-auto z-20 " >
                <motion.div
                    initial={{ x: -500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-row  items-center"
                >
                    {socials.map((social) => (
                    <SocialIcon 
                    key={social._id}
                        url={social.url}
                    fgColor="gray"
                    bgColor="transparent"
                    />
                ))}
                   
                </motion.div>
                 <Link href='#contact'>
                    
                    <motion.div
                        initial={{ x: 500, opacity: 0, scale: 0.5 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-row items-center text-gray-300 cursor-pointers"
                    ><SocialIcon
                    network="email"
                    className="cursor-pointer"
                    bgColor="transparent"
                    fgColor="gray"
                />
                        
                        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                            Get in Touch
                        </p>
                    </motion.div>
                </Link> 
            </header>
      
    );
}
