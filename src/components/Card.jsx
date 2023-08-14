import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from "react-router-dom";


export default function Card({ name, description, html_url }) {
    return (
        <section>
            <h3>{name}</h3>
            <p>{description}</p>

            <div className='flex gap-8'>
                <div className='flex'>
                    <FaJs />
                    <FaReact />
                </div>
                <Link to={html_url} className="botao w-10 h-10 rounded-lg backdrop-blur-md bg-[#219ebc] text-white text-xl flex items-center justify-center cursor-pointer hover:bg-indigo-500 transition-all duration-500">
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    )
}