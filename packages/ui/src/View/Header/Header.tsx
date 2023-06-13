import Image from 'next/image'
import "./Header.css"

interface HeaderProps {
    children: React.ReactNode
}

export function Header({ children }: HeaderProps) {

    return (
        <>
            <div className="headercolor">

                <a href="/">
                    <div>
                        <Image
                            src="/img/grapheen.png"
                            width={160}
                            height={45}
                            alt="Picture of the author"
                        />
                    </div>
                </a>

                <div>
                    <nav>
                        <li>
                            <a href="" className='logstra aheader'>
                                <Image
                                    src="/img/discord.png"
                                    width={24}
                                    height={18}
                                    alt="Picture of the author"
                                />
                            </a>
                        </li>
                        <li>
                            <a className='aheader' href="/paginacomandos">Comandos</a>
                        </li>
                        <li>
                            <a className='aheader' href="/faq">FAQ</a>
                        </li>
                        <li>
                            <a href="https://strateegia.digital" className='logstra aheader'>
                                <Image
                                    src="/img/strateegia.png"
                                    width={19}
                                    height={21}
                                    alt="Picture of the author"
                                />
                            </a>
                        </li>
                    </nav>
                </div>
            </div>
            <div>
                {children}
            </div>


        </>

    )
}