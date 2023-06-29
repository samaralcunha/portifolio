import Footer from '../../components/footer'
import Header from '../../components/header'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <main className="bg-[#BBDDF2] h-full">
                <Header />
                <section className='flex justify-around font-roboto py-10'>
                    <div className='flex flex-col'>
                        <p className='text-xs font-semibold'>Olá meu nome é</p>
                        <h1 className='text-2xl my-4'>Samara Luiza <br /> Cunha Silva</h1>
                        <Link to='/sobre' className='rounded border-2 border-[#025A7B] p-1 text-sm 
                        hover:bg-[#025A7B] hover:text-white hover:scale-105 ease-in duration-300'>
                            Saiba mais sobre mim
                        </Link>
                    </div>
                    <figure >
                        <img className='h-60' src="/undraw_blooming_re_2kc4.svg" />
                    </figure>
                </section>
                <Footer />
            </main>
        </>
    )
}