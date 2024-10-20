
// assets
import lineE from '../assets/about/lineE.svg'
import lineS from '../assets/about/lineS.svg'


const About = () => {
    return (
        <div className="w-full h-screen laptop:pt-24 pt-16">
            <div className="container laptop:p-0 p-5 mx-auto flex laptop:flex-row flex-col justify-between laptop:items-start items-center">
                {/* left section */}
                <div className='laptop:w-1/2'>
                    {/* about me */}
                    <div className="mb-8">
                        <h1 className="font-bold laptop:text-5xl text-3xl text-snow">About Me</h1>
                        <p className="text-sunset laptop:text-xl">My name is AYYIK ARBA'IL IDIA, I am a Programmer and Web Developer who comes from the city of Malang, East Java. I have completed my studies in 2024 at the Diploma 1 level majoring in Informatics Engineering.</p>
                    </div>

                    {/* experience */}
                    <div>
                        <h1 className="font-bold laptop:text-5xl text-3xl text-snow">My Experience</h1>
                        <div className='relative mt-3'>
                            <img src={lineE} className='laptop:w-auto w-4' alt="" />
                            <div className='absolute -top-1 left-[30px]'>
                                <p className='laptop:text-2xl text-xl'>Freelancer</p>
                                <p className='laptop:text-base text-sm'>October 2024 - Now</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right section */}
                <div className="relative laptop:w-1/2 laptop:mt-0 my-10">
                    <div className='flex flex-col items-center'>
                        <h1 className="font-bold laptop:text-5xl text-3xl text-snow mb-5">My Skill</h1>
                        <img src={lineS} className='laptop:w-auto w-7' alt="" />

                        <div className='absolute laptop:translate-x-16 laptop:translate-y-16 translate-x-12 translate-y-[3.6rem]'>
                            <p className='laptop:text-2xl font-bold'>HTML</p>
                        </div>

                        <div className='absolute laptop:-translate-x-14 laptop:translate-y-[6.2rem] -translate-x-[2.6rem] translate-y-[5.6rem]'>
                            <p className='laptop:text-2xl font-bold'>CSS</p>
                        </div>

                        <div className='absolute laptop:translate-x-[6.3rem] laptop:translate-y-[8.3rem] translate-x-[4.6rem] translate-y-[7.50rem]'>
                            <p className='laptop:text-2xl font-bold'>JavaScript</p>
                        </div>

                        <div className='absolute laptop:-translate-x-14 laptop:translate-y-[10.6rem] -translate-x-[2.6rem] translate-y-[9.6rem]'>
                            <p className='laptop:text-2xl font-bold'>PHP</p>
                        </div>

                        <div className='absolute laptop:translate-x-20 laptop:translate-y-[12.7rem] translate-x-[3.8rem] translate-y-[11.6rem]'>
                            <p className='laptop:text-2xl font-bold'>Laravel</p>
                        </div>

                        <div className='absolute laptop:-translate-x-[4.8rem] laptop:translate-y-60 -translate-x-[3.5rem] translate-y-[13.7rem]'>
                            <p className='laptop:text-2xl font-bold'>NodeJS</p>
                        </div>

                        <div className='absolute laptop:translate-x-[5.4rem] laptop:translate-y-[17rem] translate-x-[4rem] translate-y-[15.6rem]'>
                            <p className='laptop:text-2xl font-bold'>ReactJS</p>
                        </div>

                        <div className='absolute laptop:-translate-x-[6.5rem] laptop:translate-y-[19.4rem] -translate-x-[4.7rem] translate-y-[17.7rem]'>
                            <p className='laptop:text-2xl font-bold'>Tailwind CSS</p>
                        </div>

                        <div className='absolute laptop:translate-x-[6.3rem] laptop:translate-y-[21.5rem] translate-x-[4.6rem] translate-y-[19.7rem]'>
                            <p className='laptop:text-2xl font-bold'>Bootstrap</p>
                        </div>

                        <div className='absolute laptop:-translate-x-[3.2rem] laptop:translate-y-96 -translate-x-[2.6rem] translate-y-[21.9rem]'>
                            <p className='laptop:text-2xl font-bold'>Git</p>
                        </div>

                        <div className='absolute laptop:translate-x-[4.6rem] laptop:translate-y-[26rem] translate-x-[3.5rem] translate-y-[23.9rem]'>
                            <p className='laptop:text-2xl font-bold'>MySQL</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About