function sumarNumeros(props){
    const realizarSuma = (num1, num2) => {
        //let suma = num1 + num2;
        let suma = parseInt(props.num1) + parseInt(props.num2);
        console.log("La suma de " + props.num1 + " + " + props.num2 + " = " + suma);
    }

    return (
        <div>
            <h1>Sumar números</h1>
            <button onClick={ () => realizarSuma(2, 4) }>Sumar Números</button>
        </div>
    );
}

export default sumarNumeros;