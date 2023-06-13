import "./PaginaComandos.css"

export function PaginaComandos() {
    return (
        <>
            <div className="degrade">
                <div className="aaa1">
                    <div className="teste1">
                        <div>
                            <h1 className="h1comandos">COMANDOS</h1>
                        </div>
                        <div className="divcomandos">
                            <p className="p-comandos"><strong>S!help: </strong>Mostra todos os comandos</p>
                        </div>
                        <div className="divcomandos">
                            <p className="p-comandos"><strong>S!criar + nome da jornada: </strong>Cria uma jornada com o nome</p>
                        </div>
                        <div className="divcomandos">
                            <p className="p-comandos"><strong>S!invite + nome da jornada: </strong>Cria um link para convidar p/a jornada</p>
                        </div>
                        <div className="divcomandos">
                            <p className="p-comandos"><strong>S!add + nome da jornada: </strong>Adiciona uma pessoa à jornada</p>
                        </div>
                        <div className="divcomandos">
                            <p className="p-comandos"><strong>S!addponto: </strong>Aparecerá opções de pontos para implementar na jornada</p>
                        </div>
                        <div className="divcomandos">
                            <p className="p-comandos"><strong>S!strateegia: </strong>Aparecerá um link para vir para o site do strateegia</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}