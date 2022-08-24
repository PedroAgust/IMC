import './Form.css'
import {useState} from 'react'

function Form (){

    const [nome, setNome] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [resultado, setResultado] = useState('Aguardando resultados...')

    function validarDados(e){
        e.preventDefault()

        if(nome === '' || altura === '' || peso === ''){
            setResultado('Preencha todos os dados!')
        }else{
            calcularIMC()
        }
    }

    function calcularIMC(){
        let imc = peso / (altura ** 2)
        let textoResultado

        if(imc < 18.5){
            textoResultado = 'Abaixo do peso IDEAL'
        }else if(imc >= 18.8 && imc < 25){
            textoResultado =  'no peso IDEAL'
        }else if(imc >= 25 && imc <30){
            textoResultado =  'com Sobrepeso'
        }else if(imc >= 30 && imc < 40){
            textoResultado = 'com Obesidade'
        }else if(imc >= 40){
            textoResultado = 'com Obesidade Mórbita'
        }
        setResultado(`Ola ${nome} Seu IMC é de ${imc.toFixed(2)} e você esta ${textoResultado}`)
    }

    return(
        <div className='container'>

            <div className='testando123'>
                <form onSubmit={validarDados} className='testando'>
                    <h2>Calculadora IMC</h2>
                    <label>Nome:</label>
                    <input 
                        type='text' 
                        placeholder="Digite seu nome..."
                        id='nome'
                        onChange={(e) => setNome(e.target.value)}
                    
                    />

                    <label>Altura:</label>
                    <input 
                        type='number' 
                        placeholder="Digite sua altura..."
                        id='altura'
                        onChange={(e) => setAltura(e.target.value)}
                    />

                    <label>Peso:</label>
                    <input 
                        type='number' 
                        placeholder="Digite seu peso..."
                        id='peso'
                        onChange={(e) => setPeso(e.target.value)}
                    />

                    <button className='button' onClick={validarDados} value='Calcular'>Calcular</button>
                    <div className='testando1234'>
                        {resultado}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form