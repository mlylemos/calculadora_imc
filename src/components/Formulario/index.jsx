import { useState } from 'react';

function Formulario() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    function calcularIMC() {
        const alturaNum = parseFloat(altura);
        const pesoNum = parseFloat(peso);

        if (!alturaNum || !pesoNum) return;

        const resultado = pesoNum / (alturaNum * alturaNum);
        setImc(resultado.toFixed(2));

        if (resultado < 18.5) {
            setClassificacao('Abaixo do peso');
        } else if (resultado < 25) {
            setClassificacao('Peso normal');
        } else if (resultado < 30) {
            setClassificacao('Sobrepeso');
        } else {
            setClassificacao('Obesidade');
        }
    }

    return (
        <div>
            <h2>Calculadora de IMC</h2>

            <label>
                Altura (m):
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="Ex: 1.70"
                />
            </label>

            <br />

            <label>
                Peso (kg):
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder="Ex: 65"
                />
            </label>

            <br />
            <button onClick={calcularIMC}>Calcular IMC</button>

            {imc && (
                <div>
                    <p>IMC: {imc}</p>
                    <p>Classificação: {classificacao}</p>
                </div>
            )}
        </div>
    );
}

export default Formulario;
