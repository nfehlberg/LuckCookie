const firstPage = document.querySelector(".firstpage")
const secondPage = document.querySelector(".secondpage")
const imgCookie = document.querySelector(".img-cookie")
const btnOpenCookies = document.querySelector(".btn-opencookies")
const pMessage = document.querySelector(".p-msg")
let fortuneList = [
'A vida trará coisas boas se tiver paciência.',
'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
'Não compense na ira o que lhe falta na razão.',
'Defeitos e virtudes são apenas dois lados da mesma moeda.',
'A maior de todas as torres começa no solo.',
'Não há que ser forte. Há que ser flexível.',
'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
'A juventude não é uma época da vida, é um estado de espírito.',
'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
'Siga os bons e aprenda com eles.',
]



btnOpenCookies.addEventListener('click', retryLuck)
imgCookie.addEventListener('click', luckRoll)

function luckRoll (){
    toggleScreen ()
    let randomNumber = Math.round(Math.random()*10)
    pMessage.textContent = fortuneList[randomNumber]
}


function retryLuck (){
  toggleScreen()
}


function toggleScreen (){
firstPage.classList.toggle("hide")
secondPage.classList.toggle("hide")
}

