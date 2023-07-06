import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'

export default function Sobre() {
    return (
        <>
            <Header />
            <Container>
                <section className='grid grid-cols-[2fr_3fr] justify-center items-center '>
                <img className="mx-auto border-4 border-[#00B4D8] rounded p-4" src='../eu.svg'/>
                <div className='mx-auto w-8/12 flex flex-col'>
                    <p className='text-sm font-semibold text-[#577399]'>Um pouco sobre mim</p>
                    <h1 className='text-3xl my-4 text-[#025A7B]'>Sobre</h1>
                    <p className='text-[#025A7B]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                </section>
            </Container>
            <Footer />
        </>
    )
}

