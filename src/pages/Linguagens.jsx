import Header from "../components/Header"
import Footer from "../components/Footer"
import Container from "../components/Container"

export default function Linguagens() {
    return(
        <> 
        <Header/>
        <Container>
            <section>
                <p className='text-sm font-semibold text-[#577399]'>Experiências</p>
                <h1 className='text-3xl my-4 text-[#025A7B]'>Linguagens</h1>
                <p className='text-[#025A7B]'>Aqui estão as linguagens em que tenho conhecimento.</p>
                <div className='flex gap-10 my-4'>
                <div className='border-2 shadow-md shadow-black w-28 text-center border-[#025A7B] hover:bg-[#025A7B] rounded'><p className='text-[#1F4268]  hover:text-white font-bold'>HTML</p></div>
                <div className='border-2 shadow-md shadow-black w-28 text-center border-[#025A7B] hover:bg-[#025A7B] rounded'><p className='text-[#1F4268] hover:text-white font-bold'>CSS</p></div>
                <div className='border-2 shadow-md shadow-black w-28 text-center border-[#025A7B] hover:bg-[#025A7B] rounded'><p className='text-[#1F4268] hover:text-white font-bold'>JAVASCRIPT</p></div>
                <div className='border-2 shadow-md shadow-black w-28 text-center border-[#025A7B] hover:bg-[#025A7B] rounded'><p className='text-[#1F4268] hover:text-white font-bold'>TYPESCRIPT</p></div>
                <div className='border-2 shadow-md shadow-black w-28 text-center border-[#025A7B] hover:bg-[#025A7B] rounded'><p className='text-[#1F4268] hover:text-white font-bold'>C#</p></div>
                <div className='border-2 shadow-md shadow-black w-28 text-center border-[#025A7B] hover:bg-[#025A7B] rounded'><p className='text-[#1F4268] hover:text-white font-bold'>PHP</p></div>
                </div>
            </section>
        </Container>
        <Footer/>
        </>
    )
}