import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'

export default function Sobre() {
    return (
        <>
            <Header />
            <Container>
                <section className='grid grid-cols-[2fr_3fr] justify-center items-center '>
                    <img className="mx-auto border-4 border-[#00B4D8] rounded p-4" src='../eu.svg' />
                    <div className='mx-auto w-8/12 flex flex-col'>
                        <p className='text-sm font-semibold text-[#577399]'>Um pouco sobre mim</p>
                        <h1 className='text-3xl my-4 text-[#025A7B]'>Sobre</h1>
                        <p className='text-[#025A7B]'>Aos 17 anos e prestes a concluir o ensino médio, descobri no front-end da programação minha verdadeira paixão. Cada linha de código se torna uma oportunidade empolgante de criar experiências visuais incríveis. Mal posso esperar para embarcar nessa jornada de aprendizado, enquanto estou no último ano do ensino médio.</p>
                    </div>
                </section>
            </Container>
            <Footer />
        </>
    )
}

