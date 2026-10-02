function SaludoHijo(props) {
    //NECESITAMOS CAPTURAR EN UNA VARIABLE EL
    //MÉTODO DE PROPS DEL MÉTODO PADRE
    let ejecutarPadre = props.metodoPadre;

    return (
        <div>
            <h2>Saludo Hijo</h2>
            <button onClick={ () => ejecutarPadre("Luke " + props.idhijo) }>
                Llamar al parent
            </button>
        </div>
    )
}

export default SaludoHijo;