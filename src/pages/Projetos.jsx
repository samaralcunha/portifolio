import { useEffect, useState } from 'react'
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card"


export default function Projetos() {

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/samaralcunha/repos')
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <>
            <Header />
            <Container>
                <main className='flex flex-col items-center justify-between'>
                    {/* <h2>Projetos</h2> */}
                    {
                        repositories.length > 0 ? (
                            <section className='flex-auto flex flex-wrap items-center justify-center gap-20'>
                                {
                                    repositories.map((repo) => (
                                        <Card
                                            key={repo.id}
                                            name={repo.name}
                                            description={repo.description}
                                            html_url={repo.html_url}
                                        />
                                    ))
                                }
                            </section>
                        ) : (
                            <p>Carregando repositórios...</p>
                        )
                    }
                </main>
            </Container>
            <Footer />
        </>
    )
}