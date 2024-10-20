
const CardP = ({title, as, labels, link = "", img, imgl, imgt, imgm}) => {
    return (
        <a href={link} className='cursor-pixel-pointer'>
            <div className='relative laptop:w-[400px] laptop:h-[400px] w-[300px] h-[300px]'>
                <div className="bg-gradient-to-t from-fluorescent_cyan/50 to-transparent h-full mx-1">
                    <div className='relative h-full w-full p-2 pt-[10%]'>
                        <img src={img} className="" alt="" />
                        <img src={imgl} className="w-[98%] absolute top-[24%] left-1 drop-shadow-md" alt="" />
                        <img src={imgt} className="w-28 absolute top-[35%] m-1 drop-shadow-md" alt="" />
                        <img src={imgm} className='w-14 absolute right-4 top-[47%] drop-shadow-md' alt="" />
                    </div>
                </div>
                <div className='bg-mexican_pink w-full laptop:h-20 h-16 absolute bottom-0 border-l-[5px] border-b-[5px] border-r-[5px] border-robin_egg_blue flex justify-center items-center flex-col'>
                    <h2 className='font-semibold laptop:text-2xl text-xl'>{title}</h2>
                    <p>Frontend Programmer</p>
                </div>
                {/* label */}
                <div className='flex gap-3 flex-wrap mt-2 px-1'>
                    {labels.map((label, i) => (
                    <div className='p-1 px-3 bg-sunset' style={{ boxShadow: '-2px 2px 0px 1px #fffdff' }} key={i}>
                            <p className='text-russian_violet font-semibold laptop:text-xl'>{label}</p>
                    </div>
                    ))}
                </div>
            </div>
        </a>
    )
}

export default CardP