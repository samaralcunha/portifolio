import { Link } from "react-router-dom"


export default function Header() {
    return (
        <header className="flex items-center p-4 py-6 justify-between gap-8 font-roboto font-regular">
            <hr className="h-2 w-28 bg-[#DAF7FF] rounded" />

            <Title />

            <hr className="h-2 w-full bg-[#DAF7FF] rounded" />

            <nav className="flex gap-8 text-lg text-[#025A7B]">
                <Link to='/' className="hover:underline hover:text-[#1F4268]">Home</Link>
                <Link to='/sobre' className="hover:underline hover:text-[#1F4268]">Sobre</Link>
                <Link to='/linguagens' className="hover:underline hover:text-[#1F4268]">Linguagens</Link>
                <Link to='/projetos' className="hover:underline hover:text-[#1F4268]">Projetos</Link>
                <Link to='/contatos' className="hover:underline hover:text-[#1F4268]">Contatos</Link>
            </nav>

            <hr className="h-2 w-10 bg-[#DAF7FF] rounded" />
        </header>
    )
}

function Title() {
    return (
        <div className='flex gap-2 items-center text-xl text-[#495867]'>
            <p>{`{`}</p>
            <p>Samara</p>
            <p>Luiza</p>
            <p>{`}`}</p>
        </div>
    )
}