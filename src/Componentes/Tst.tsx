interface dtPretarja {
    pretarja: number;
    estado: string
    peso: number
    bultos: number
    esPeligrosa: boolean
}
interface Props {
    SimpleJSON: {
        dsDatos: {
            dtPretarja: dtPretarja[]
        }
    }
}
function Tst(props: Props) {
    console.log(props)
    console.log(props.SimpleJSON)
    console.log(props.SimpleJSON.dsDatos)
    props.SimpleJSON.dsDatos.dtPretarja.map(i => console.log(i))
    return (
        <div className="container">
            <h1>Testeando interfaces</h1>
            {props.SimpleJSON.dsDatos.dtPretarja.map((i,index)=><li key={index}>{i.pretarja}</li>)}
        </div>
    )
}
export default Tst;