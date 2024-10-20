import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// assets
import download from '../assets/home/download-icon.svg'
import Github from '../assets/home/github-icon.jsx'
import Mail from '../assets/home/mail-icon.jsx'
import Linkedin from '../assets/home/linkedin-icon.jsx'


const Home = () => {
    const [weather, setWeather] = useState({})
    const [dataReady, setDataReady] = useState(false)
    const [ready, setReady] = useState(false)
    const endpoint = "http://api.weatherapi.com/v1/current.json"
    const apikey = import.meta.env.VITE_WEATHER_API_KEY

    const fetchData = async () => {
        try {
            const res = await fetch(endpoint + `?key=${apikey}&&q=malang`)
            const result = await res.json()

            console.log(result)
            setWeather(result)
            setDataReady(true)
        } catch (err) {
            console.log(err)
        } finally {
            setTimeout(() => {
                setReady(true)
            }, 2000);
            // console.log('fetch data done')
        }
        
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="container w-full h-screen flex laptop:flex-row flex-col laptop:justify-around justify-center laptop:gap-0 gap-2 items-center laptop:pt-0 pt-32">
            <div className='flex flex-col items-center gap-6 laptop:order-first order-last'>
                <div className='flex flex-col items-center'>
                    <div className='laptop:order-first order-last w-full drop-shadow-md backdrop-blur-xl bg-snow/20 p-3 rounded-md laptop:m-0 m-5 laptop:mt-0 mt-10'>
                        {ready && dataReady ? (
                            <div className='flex laptop:flex-row flex-col justify-between laptop:text-start text-center'>
                                <div className='laptop:order-first order-last'>
                                    <p className='text-base'>{dataReady ? weather.location.country : ''}</p>
                                    <p className='font-bold laptop:text-2xl text-lg'>{dataReady ? weather.location.name : ''}, {dataReady ? weather.location.region : ''}</p>
                                    <p className='font-semibold mt-4 laptop:text-lg text-base'>{dataReady ? weather.current.temp_c : ''} °C</p>
                                </div>
                                <div className='flex flex-col justify-center items-center laptop:order-last order-first'>
                                    <img className='laptop:w-20 w-16' src={dataReady ? weather.current.condition.icon : ''}/>
                                    <p className='font-semibold laptop:text-lg text-base'>{dataReady ? weather.current.condition.text : ''}</p>
                                </div>
                            </div>
                        ) : (
                            <div className='w-full h-20 flex justify-center items-center'>
                                <motion.div className='w-10 h-10 border-2 border-mexican_pink rounded-full flex justify-center items-center m-0' animate={{
                                    scale: [0, 1, 0],
                                    transition: {repeat: Infinity}
                                }}>
                                    <motion.div className='w-10 h-10 border border-fluorescent_cyan rounded-full m-0' animate={{
                                    scale: [0, 1, 0],
                                    transition: {repeat: Infinity, delay: 1}
                                }}></motion.div>
                                </motion.div>      
                            </div>
                        )}
                    </div>

                    <div className='laptop:order-last order-first mt-6'>
                        {/* text */}
                        <div className='laptop:text-start text-center'>
                            <p className="laptop:text-3xl text-xl">Welcome to My</p>
                            <h1 className="laptop:text-6xl text-5xl font-bold">PORTOFOLIO</h1>
                            <div className="flex items-baseline laptop:justify-start justify-center">
                                <h1 className="laptop:text-3xl text-xl">My Name is <span className="laptop:text-7xl text-5xl text-fluorescent_cyan font-bold" style={{
                                    textShadow: '2px 2px 1px #fe546f'
                                }}>AYYIK</span></h1>
                            </div>
                        </div>

                        {/* buttons */}
                        <div className='flex laptop:gap-10 gap-5 items-center mt-2'>
                            {/* CV */}
                            <div className='bg-bright_pink_(crayola) w-fit flex gap-1 p-2 px-3' style={{ boxShadow: '3px 3px 0px #FFD080' }}>
                                <img src={download} alt="" />
                                <a href="" className="font-semibold laptop:text-xl text-base cursor-pixel-pointer">Download CV</a>
                            </div>

                            {/* sosmed */}
                            <div className='flex gap-2'>
                                <a href="" className='cursor-pixel-pointer'>
                                    <div className='laptop:w-10 w-8 border border-mexican_pink p-2 rounded-full'>
                                        <Mail color="#0bffe6"/>
                                    </div>
                                </a>
                                <a href="" className='cursor-pixel-pointer'>
                                    <div className='laptop:w-10 w-8 border border-mexican_pink p-2 rounded-full'>
                                        <Github color="#0bffe6"/>
                                    </div>
                                </a>
                                <a href="" className='cursor-pixel-pointer'>
                                    <div className='laptop:w-10 w-8 border border-mexican_pink p-2 rounded-full'>
                                        <Linkedin color="#0bffe6"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* photo */}
            <div className="border border-snow/10 laptop:order-last order-first">
                <div className="laptop:h-[350px] h-[270px]">
                    <img src="" alt="" />
                </div>
                <div className="text-center p-3 bg-robin_egg_blue" style={{boxShadow: '3px 3px 0px #fe546f'}}>
                    <p className="laptop:text-2xl font-bold">PROGRAMMER | WEB DEVELOPER</p>
                </div>
            </div>
        </div>
    )
}

export default Home