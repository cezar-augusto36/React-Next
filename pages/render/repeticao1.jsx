export default function repeticao1(){
    const ListaAprovados =[
        'Joao',
        'Ana',
        'Bia',
        'Carlos',
        'Laura',
        'Cezar',
    ]
    function renderizarLista(){
        const itens = []
        for (let i = 0; i < ListaAprovados.length; i++) {
        itens.push(<li key={i}>{ListaAprovados[i]}</li>)
            
        }
        return ListaAprovados.map((nome,i) =><li key={i}>{nome}</li>)
    }
    return(
        <ul>
            {renderizarLista()}
        </ul>
    )
}

//function renderizarLista(){
//    const itens = []
//    for (let i = 0; i < ListaAprovados.length; i++) {
//    itens.push(<li key={i}>{ListaAprovados[i]}</li>)
//        
//    }
//    return itens
//}