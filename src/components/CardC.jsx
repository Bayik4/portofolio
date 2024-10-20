
const CardC = ({title, instansi, date, img}) => {
    return(
        <div className='relative laptop:w-[400px] laptop:h-[420px] w-[300px] h-[320px] overflow-hidden'>
            <div className="bg-gradient-to-t from-fluorescent_cyan/50 to-transparent h-full mx-1">
                <h2 className='font-semibold laptop:text-2xl text-xl text-center pt-5'>{title}</h2>
                <div className='m-3 mt-[4%] flex justify-center items-center'>
                    <img src={img} className="drop-shadow-md" alt="" />
                </div>
            </div>
            <div className='bg-mexican_pink w-full laptop:h-20 h-16 absolute bottom-0 border-l-[5px] border-b-[5px] border-r-[5px] border-robin_egg_blue flex flex-col justify-center items-center'>
                <p className='font-semibold laptop:text-2xl text-xl'>{instansi}</p>
                <p className="-mt-2 laptop:text-base text-xs">{date}</p>
            </div>
        </div>
    )
}

export default CardC