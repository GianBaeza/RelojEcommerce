

export default function Seccion1({ img, descripcion, title }) {
    return (
        <section className="bg-slate-700 flex flex-col h-screen w-screen">
            <div className="flex">
                <h1 className="text-black  text-3xl bg-slate-50 ">{title}</h1>
                <img src={img} alt={descripcion} className="h-48" />
            </div>
            <input type="button" value="Mas Informacion" />
        </section>
    )
}
