//eslint-disable-next-line react/prop-types
export default function Container({ children }) {
    return (
        <section className="flex justify-center items-center">
            {children}
        </section>
    )
}