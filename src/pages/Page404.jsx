import Header from './../components/Header'
import Footer from './../components/Footer'
import Container from './../components/Container'

export default function Page404() {
    return (
        <>
            <Header />
            <Container>
                <div> 
                    <h1 className='text-[#1F4268] font-extrabold text-2xl text-center drop-shadow-lg'>{'*-*'} 404 {'*-*'}</h1>
                    <p className='text-[#DAF7FF] font-bold text-lg drop-shadow-lg'> Tenta ai de novo vai </p>
                </div>
            </Container >
            <Footer />
        </>
    )
}