import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
export default function ContactMe() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => (
        window.location.href = `mailto:ybansal2403@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}.${data.message}`
    );
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}

            className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact
            </h3>
            <div className="flex flex-col space-y-10">

                <div className="space-y-3">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">+91-9758743722</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">ybansal2403@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">Uttar Pradesh, India</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                        <div className="flex space-x-2">
                            <input {...register('name')} placeholder='Name' className='contactInput' type='text'></input>
                            <input {...register('email')} placeholder='Email' className='contactInput' type='text'></input>
                        </div>
                        <input {...register('subject')} placeholder='Subject' className='contactInput' type='text'></input>
                        <textarea {...register('message')} placeholder='Message' className='contactInput' />
                        <button type='submit' className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold">Submit</button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}