import Footer from '../components/Footer'
import Header from '../components/Header'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <section className='flex justify-around items-center gap-96 py-10'>
                    <div className='flex flex-col'>
                        <p className='text-sm font-semibold text-[#577399]'>Olá meu nome é</p>
                        <h1 className='text-3xl my-4 text-[#025A7B]'>Samara Luiza <br /> Cunha Silva</h1>
                        <Link to='/sobre' className='rounded border-2 border-[#025A7B] p-1 text-base text-center text-[#025A7B]
                        hover:bg-[#025A7B] hover:text-white hover:scale-105 ease-in duration-300'>
                            Saiba mais sobre mim
                        </Link>
                    </div>
                    <figure >
                        <img className='h-60' src="/undraw_blooming_re_2kc4.svg" />
                    </figure>
                </section>
            </Container>
            <Footer />
        </>
    )
}