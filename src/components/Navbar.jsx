 import { NavLink, Outlet } from "react-router-dom"
 import { useState } from "react"
 import { AnimatePresence, motion } from "framer-motion"

//  assets
import homeIcon from '../assets/navbar/home-icon.svg'
import aboutIcon from '../assets/navbar/about-icon.svg'
import projectsIcon from '../assets/navbar/projects-icon.svg'
import certifIcon from '../assets/navbar/certif-icon.svg'
import contactIcon from '../assets/navbar/contact-icon.svg'

 
 const Navbar = () => {
    const links = [
        {
            id: 1,
            name: 'HOME',
            path: '/',
            icon: homeIcon
        },
        {
            id: 2,
            name: 'ABOUT',
            path: '/about',
            icon: aboutIcon
        },
        {
            id: 1,
            name: 'PROJECTS',
            path: '/projects',
            icon: projectsIcon
        },
        {
            id: 1,
            name: 'CERTIFICATIONS',
            path: '/certifications',
            icon: certifIcon
        },
        {
            id: 1,
            name: 'CONTACT',
            path: '/contact',
            icon: contactIcon
        }
    ]

    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <nav className="w-full flex items-center justify-between text-fluorescent_cyan laptop:bg-transparent laptop:p-5 laptop:px-8 fixed z-10 backdrop-blur-lg p-2 px-4 bg-snow/20">
                <div>
                    <h1 className="laptop:text-4xl text-2xl" style={{textShadow: '2px 2px 1px #fe546f'}}>Bayik</h1>
                </div>

                <div className="flex flex-col gap-[0.40rem] cursor-pixel-pointer laptop:hidden" onClick={() => setOpen(!isOpen)}>
                    <span className={`block w-9 h-1 bg-fluorescent_cyan rounded-2xl transition-transform ${isOpen ? 'rotate-45 translate-y-4' : 'rotate-0 translate-y-0'}`} style={{ boxShadow: '1px 1px 0px 0px #DE0771' }}></span>
                    <span className={`block w-9 h-1 bg-fluorescent_cyan rounded-2xl transition-transform ${isOpen ? 'scale-0' : 'scale-100'}`} style={{ boxShadow: '1px 1px 0px 0px #DE0771' }}></span>
                    <span className={`block w-9 h-1 bg-fluorescent_cyan rounded-2xl transition-transform ${isOpen ? '-rotate-45 -translate-y-1' : 'rotate-0 translate-y-0'}`} style={{ boxShadow: '1px 1px 0px 0px #DE0771' }}></span>
                </div>

                {/* laptop */}
                <div className="laptop:flex hidden gap-4 text-lg">
                    {links.map((item, i) => (
                        <NavLink className={({ isActive }) => isActive ? "text-bright_pink_(crayola) cursor-pixel-pointer flex items-center gap-1" : "cursor-pixel-pointer flex items-center gap-1"
                          }to={item.path} key={i}>
                            <img src={item.icon} width={21} className="drop-shadow-md opacity-80" alt="" />
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* mobile */}
                <AnimatePresence>
                    {isOpen && (
                        <div className="fixed -z-10 top-0 left-0 w-full h-screen backdrop-blur-sm overflow-hidden" onClick={() => setOpen(state => !state)}>
                            <motion.div 
                            initial={{ opacity: 0, translateX: '75%'}}
                            animate={{ opacity: 1, translateX: '0%'}}
                            exit={{ opacity: 0, translateX: '75%'}} 
                            transition={{ ease: 'easeInOut' }}
                            className="flex flex-col gap-5 text-base w-[70%] h-screen fixed top-0 right-0 p-5 pt-14 bg-blue_(munsell)/50 drop-shadow-md" onClick={e => e.stopPropagation()}>
                            {links.map((item, i) => (
                                <NavLink className={({ isActive }) => isActive ? "text-bright_pink_(crayola) cursor-pixel-pointer flex items-center gap-1" : "cursor-pixel-pointer flex items-center gap-1"
                                }to={item.path} key={i} onClick={() => setOpen(state => !state)}>
                                    <img src={item.icon} width={21} className="drop-shadow-md opacity-80" alt="" />
                                    {item.name}
                                </NavLink>
                                ))}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </nav>

            <Outlet/>
        </>
    )
 }

 export default Navbar