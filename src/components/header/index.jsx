export default function Header() {
    return (
        <header className="flex items-center p-4 py-6 justify-between gap-8 bg-black/10 font-roboto font-regular">
            <hr className="h-2 w-28 bg-[#CFE8EF] rounded" />

            <Title />

            <hr className="h-2 w-full bg-[#CFE8EF] rounded" />

            <nav className="flex gap-8 text-lg text-[#025A7B]">
                <a className="hover:underline hover:text-[#1F4268]">Home</a>
                <a className="hover:underline hover:text-[#1F4268]">Sobre</a>
                <a className="hover:underline hover:text-[#1F4268]">Linguagens</a>
                <a className="hover:underline hover:text-[#1F4268]">Projetos</a>
                <a className="hover:underline hover:text-[#1F4268]">Contatos</a>
            </nav>
            <hr className="h-2 w-10 bg-[#CFE8EF] rounded" />
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