import { useState } from "react";
import { Squeeze as Hamburger } from 'hamburger-react';

const logo = 'https://media6.festinagroup.com/static/tiendas_online/festina/images/assets/img/logos/festina_black_es-ES.svg';

export default function Nav() {
    const [open, setOpen] = useState(false);

    const handleOpenNav = () => {
        setOpen(!open);
    };

    return (
        <header>
            <img src={logo} alt="logo" className="h-24 m-auto p-3 absolute z-50 right-2/2 lg:hidden" />

            <div className=" lg:hidden flex justify-end  pr-4 pt-5">
                <Hamburger toggled={open} toggle={setOpen} className='h-10' onClick={handleOpenNav} />
            </div>

            <nav className={` lg:flex lg:flex-row lg:gap-96  lg:items-center lg:justify-center lg:pt-16 ${open ? 'block' : 'hidden'} flex flex-col w-full`}>
                <img src={logo} alt="logo" className="h-20 hidden lg:block lg:fixed lg:left-24 " />
                <ul className={`flex flex-col items-end p-5 gap-4 relative h-screen z-20 lg:flex lg:flex-row lg:gap-7 lg:h-auto lg:w-auto `}>
                    <li><a href="#">Inicio</a></li>
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li><a href="#">Sobre Nosotros</a></li>
                    <li><a href="#">Contactos</a></li>
                </ul>
            </nav>

        </header>
    );
}
