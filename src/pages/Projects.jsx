
// components
import CardP from "../components/CardP"

import isism1 from '../assets/projects/isism1.png'
import isism2 from '../assets/projects/isism-laptop.png'
import isism3 from '../assets/projects/isism-tablet.png'
import isism4 from '../assets/projects/isism-mobile.png'

import erabc1 from '../assets//projects/erabc-desktop.png'
import erabc2 from '../assets//projects/erabc-laptop.png'
import erabc3 from '../assets//projects/erabc-tablet.png'
import erabc4 from '../assets//projects/erabc-mobile.png'


const Projects = () => {

    const projects = [
        {
            id: 1,
            title: 'ISISM Landing Page',
            as: 'Frontend Programmer',
            labels: ['ReactJS', 'Tailwind CSS'],
            link: '',
            img: isism1,
            imgl: isism2,
            imgt: isism3,
            imgm: isism4
        },
        {
            id: 2,
            title: 'ERABC Landing Page',
            as: 'Frontend Programmer',
            labels: ['ReactJS', 'Tailwind CSS'],
            link: '',
            img: erabc1,
            imgl: erabc2,
            imgt: erabc3,
            imgm: erabc4
        },
    ]

    return (
        <div className="w-full h-screen laptop:pt-24 pt-12">
            <div className="container mx-auto laptop:p-0 p-5">
                <h1 className="font-bold laptop:text-5xl text-3xl text-snow text-center">My Work</h1>
                <div className="flex flex-wrap justify-around items-center mt-10 gap-y-20">
                    {projects.map((project, i) => (
                        <CardP title={project.title} as={project.as} labels={project.labels} img={project.img} imgl={project.imgl} imgt={project.imgt} imgm={project.imgm} key={i}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects