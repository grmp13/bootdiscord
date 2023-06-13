import "./PaginaPrincipal.css"
import Image from 'next/image'


export function PaginaPrincipal() {
    return (
        <div className="divbackground">
            <div className="degrade">
                <div className="teste">
                    <div className="divimagelogo">
                        <Image
                            src="/img/logographeen.png"
                            width={537}
                            height={383}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="divletra">
                        <h1 className="h11">
                            O Melhor dos dois mundos!
                        </h1>
                        <p className="p11">Junte a interatividade do Discord com a praticidade do Strateegia e torne seu ambiente de trabalho mais dinâmico e interativo com Grapheen. </p>
                        <a href="" className="aa"><div className="divbotao">
                            <Image
                                src="/img/discord.png"
                                width={60}
                                height={45}
                                alt="Picture of the author"
                            />
                            <div className="divdiscord">
                                <p className="pdiscord"><strong>Adicione  o bot ao Discord!</strong></p>
                            </div>
                        </div></a>
                    </div>
                </div>
                <div className="teste">
                    <div className=" divletra2">
                        <h1 className="h12">
                            POR QUE O STRATEEGIA?
                        </h1>
                        <p className="p12">O Strateegia oferece um plataforma para construir projetos de forma criativa, prática e colaborativa, de forma que motive sua equipe em um projeto. Então porque não facilitar ainda mais conectando com uma das maiores plataformas de comunicação da atualidade?
                            Com o Grapheen bot você poderá facilitar sua interação com os integrantes de seu grupo, sem precisas sair do Discord!</p>
                    </div>
                    <div className="divimagelogo">
                        <Image
                            src="/img/assetsstrateegia.png"
                            width={507}
                            height={460}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className="teste">
                    <div className="divimagelogo">
                        <Image
                            src="/img/asserts.png"
                            width={507}
                            height={460}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className=" divletra2">
                        <h1 className="h12">
                            POR QUE O DISCORD?
                        </h1>
                        <p className="p12">O Discord é uma das maiores plataformas de comunicação disponível, sendo completamente gratuita e fornecendo seus serviços globalmente. Além disso ela também uma das poucas plataformas que permite o uso de bots interativos de simples e fácil operação gratuitamente. O Grapheen busca juntar tudo isso a criação de projetos do Strateegia e tornar a interação entre grupos cada vez mais interativa e dinâmica.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}