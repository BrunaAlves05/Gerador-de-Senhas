const passInput = document.getElementById('inputPasswordId')
const lenInput = document.getElementById('inputLengthId')
const infoLength = document.getElementById('label')
const btnGerar = document.getElementById('btnGerar')

const lower = document.getElementById('lowerId')
const upper = document.getElementById('upperId')
const number = document.getElementById('numberId')
const simbol = document.getElementById('simbolId')

const numbers = [0,1,2,3,4,5,6,7,8,8,9]
const simbols = ['!', '@', '#', '$', '%']

// pega as letras do alfabeto
const caracteres = Array.from(Array(26)).map((_, i) => i + 97)

// transforma as letras em upper ou lower
const lowerCaracteres = caracteres.map((item) => String.fromCharCode(item))
const upperCaracteres = lowerCaracteres.map((item) => item.toUpperCase())

infoLength.innerHTML = lenInput.value;

lenInput.addEventListener('change', () => {
    infoLength.innerHTML = lenInput.value;
})

btnGerar.addEventListener('click', ()=> {
    gerarSenha(
        lower.checked, 
        upper.checked,
        number.checked,
        simbol.checked,
        lenInput.value
    )
})

const gerarSenha = (
    hasNumbers,
    hasSymbols, 
    hasUpperCase,
    hasLowerCase,
    length
) => {
    const newArray = [
        ... (hasNumbers ? numbers : []),
        ... (hasSymbols ? simbols : []),
        ... (hasUpperCase ? upperCaracteres : []),
        ... (hasLowerCase ? lowerCaracteres : [])
    ]

    if (newArray === 0) return

    let password = ""

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * newArray.length)
        password += newArray[randomIndex]
    }

    passInput.value = password;
}
