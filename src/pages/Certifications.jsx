
// components
import CardC from "../components/CardC"

// assets
import introJs from '../assets/certifications/introduction-to-javascript.png'
import interJs from '../assets/certifications/javascript-intermediate.png'


const Certifications = () => {
    const items = [
        {
            id: 1,
            title: 'Introduction to Javascript',
            img: introJs,
            instansi: 'Solo Learn',
            date: '25 May, 2024'
        },
        {
            id: 2,
            title: 'Intermediate Javascript',
            img: interJs,
            instansi: 'Solo Learn',
            date: '05 August, 2024'
        }
    ]

    return (
        <div className="w-full h-screen laptop:pt-24 pt-12">
            <div className="container mx-auto laptop:p-0 p-5">
                <h1 className="font-bold laptop:text-5xl text-3xl text-snow text-center">Certifications</h1>
                <div className="flex flex-wrap justify-around items-center mt-6 gap-y-20">
                    {items.map((item, i) => (
                        <CardC title={item.title} img={item.img} instansi={item.instansi} date={item.date} key={i}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Certifications