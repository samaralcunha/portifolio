import Header from './../components/Header'
import Footer from './../components/Footer'
import Container from './../components/Container'
export default function Contatos() {
    return (
        <>
            <Header />
            <Container>
                <section>
                    <h1 className='text-[#025A7B] text-lg'>Contatos</h1>
                    <h2 className='text-[#0353A4] text-sm font-semibold'>Entre em contato :{')'}</h2>
                    <div className='flex w-max gap-24 m-5'>
                        <div>
                            <h3 className='text-[#577399] font-bold'>Telefone</h3>
                            <p className='text-[#0353A4]'>{'('}31{')'} 99674-9750</p>
                        </div>

                        <div>
                            <h3 className='text-[#577399] font-bold'>E-mail</h3>
                            <p className='text-[#0353A4]'>samaralcunhas@gmail.com</p>
                        </div>
                    </div>
                </section>
            </Container>
            <Footer />
        </>
    )
}