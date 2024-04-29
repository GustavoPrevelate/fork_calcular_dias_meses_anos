let displayValue = '';

function appendValue(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}


// Alteração para criar conflito
function appendValue(value) {
    displayValue += value + " ";
    document.getElementById('display').value = displayValue;
}

// Alterações no arquivo script.js para introduzir erros de sintaxe

// Erro 1: Adicionando um ponto e vírgula extra
let displayValue = '';;;

function appendValue(value) {
    displayValue += value + " ";
    document.getElementById('display').value = displayValue;
}

// Erro 2: Removendo um parêntese de fechamento
function calculate() {
    try {
        const result = eval(displayValue;
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

// Erro 3: Usando uma variável não definida
function clearDisplay() {
    displayValue = '';
    document.getElementById('output').value = '';
}
