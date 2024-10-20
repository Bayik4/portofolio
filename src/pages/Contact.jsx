import { useRef } from "react"
import emailjs from '@emailjs/browser'


const Contact = () => {
    const form = useRef();
    const formM = useRef();
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const sendEmailLaptop = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(serviceID, templateID, form.current, {
            publicKey: publicID,
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error);
            },
        );
    };

    const sendEmailMobile = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(serviceID, templateID, formM.current, {
            publicKey: publicID,
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error);
            },
        );
    };


    return (
        <div className="w-full h-screen laptop:pt-24 pt-12">
            <div className="container mx-auto laptop:p-0 p-5">
                <h1 className="font-bold laptop:text-5xl text-3xl text-snow text-center">Contact Me</h1>
                <div className="p-5 px-8 flex justify-center items-center">
                    <div className="bg-robin_egg_blue/20 w-fit border-4 border-fluorescent_cyan backdrop-blur-sm laptop:p-6 laptop:px-8 p-3 px-4">

                        {/* laptop */}
                        <form action="" ref={form} onSubmit={sendEmailLaptop} method="post" className="laptop:flex justify-center items-start gap-8 hidden">
                            <div className="h-[340px] flex flex-col justify-between">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col items-start text-russian_violet">
                                        <label htmlFor="name" className="text-sunset text-2xl">Your Name</label>
                                        <input type="text" id="name" name="from_name" className="w-72 h-9 border-2 border-sunset bg-snow/80 text-lg p-2 cursor-pixel-text"/>
                                    </div>
                                    <div className="flex flex-col items-start text-russian_violet">
                                        <label htmlFor="email" className="text-sunset text-2xl">Your Email</label>
                                        <input type="text" id="email" name="email" className="w-72 h-11 border-2 border-sunset bg-snow/80 text-xl p-2 cursor-pixel-text"/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <button type="submit" className="w-full bg-sunset text-russian_violet-300 p-2 text-xl font-semibold cursor-pixel-pointer" style={{ boxShadow: '3px 3px 0px 0px #fffdff' }}>SEND</button>
                                    <button type="reset" className="w-full bg-bright_pink_(crayola) text-snow p-2 text-xl font-semibold cursor-pixel-pointer" style={{ boxShadow: '3px 3px 0px 0px #fffdff' }}>CLEAR</button>
                                </div>
                            </div>
                            <div className="flex flex-col items-start text-russian_violet">
                                <label htmlFor="message" className="text-sunset text-2xl">Your Message</label>
                                <textarea name="message" id="message" className="border-2 border-sunset bg-snow/80 text-xl p-2 cursor-pixel-text" cols="30" rows="11"></textarea>
                            </div>
                        </form>

                        {/* mobile */}
                        <form action="" method="post" className="laptop:hidden justify-center items-center gap-4 flex flex-col" ref={formM} onSubmit={sendEmailMobile}>
                            <div className="flex flex-col items-start text-russian_violet">
                                <label htmlFor="name" className="text-sunset text-xl">Your Name</label>
                                <input type="text" id="name" name="from_name" className="w-72 h-8 border-2 border-sunset bg-snow/80 text-base p-1 cursor-pixel-text"/>
                            </div>
                            <div className="flex flex-col items-start text-russian_violet">
                                <label htmlFor="email" className="text-sunset text-xl">Your Email</label>
                                <input type="text" id="email" name="email" className="w-72 h-9 border-2 border-sunset bg-snow/80 text-base p-1 cursor-pixel-text"/>
                            </div>
                            <div className="flex flex-col items-start text-russian_violet">
                                <label htmlFor="message" className="text-sunset text-xl">Your Message</label>
                                <textarea name="message" id="message" className="border-2 border-sunset bg-snow/80 text-xl p-2 cursor-pixel-text" cols="21" rows="6"></textarea>
                            </div>

                            <div className="flex flex-col gap-3 w-full mt-5">
                                <button type="submit" className="w-full bg-sunset text-russian_violet-300 p-2 text-lg font-semibold cursor-pixel-pointer" style={{ boxShadow: '3px 3px 0px 0px #fffdff' }}>SEND</button>
                                <button type="reset" className="w-full bg-bright_pink_(crayola) text-snow p-2 text-lg font-semibold cursor-pixel-pointer" style={{ boxShadow: '3px 3px 0px 0px #fffdff' }}>CLEAR</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact