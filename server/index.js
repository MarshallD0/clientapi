const express = require('express');
const app = express();
const port = 3001;

console.log('Iniciando servidor...');

app.get('/operacion', (req, res) => {
    console.log('Solicitud recibida:', req.query);

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const operacion = req.query.operacion;

    if (isNaN(num1) || isNaN(num2)) {
        console.log('Error: Los parámetros num1 y num2 deben ser números.');
        return res.status(400).send('Los parámetros num1 y num2 deben ser números.');
    }

    let resultado;
    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 === 0) {
                console.log('Error: No se puede dividir por cero.');
                return res.status(400).send('No se puede dividir por cero.');
            }
            resultado = num1 / num2;
            break;
        default:
            console.log('Error: Operación no válida.');
            return res.status(400).send('Operación no válida.');
    }

    console.log('Resultado:', resultado);
    res.send({ resultado });
});

app.get('/', (req, res) => {
    console.log('Solicitud recibida en /');
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});