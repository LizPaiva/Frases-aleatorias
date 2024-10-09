const quotes = [
    ["1 Samuel 18:14", "Y como el señor lo ayudaba, David tenía éxito en todo lo que hacía."],
    ["Timoteo  4:7", "Aunque el ejercicio del cuerpo sirve para algo, la devoción a Dios es útil para todo."],
    ["Lucas  1:13", "Zacarias; no tengas miedo, porque Dios ha oído tu oración."],
    ["2 corintios  12:9", "Pero el señor me ha dicho: Mi amor es todo lo que necesitas."],
    ["Filipenses  4:13", "A todo puedo hacerle frente, pues Cristo es quien me sostiene."]
];

const colores = [
    ["#FF5733"],
    ["#33FF57"],
    ["#3357FF"],
    ["#FF33A1"],
    ["#HFFD33"],
    ["#70D334"],
    ["#AF34d3"],
    ["#EE1540"]
];


const part1 = document.getElementById('part1');
const part2 = document.getElementById('part2');
const button = document.getElementById('new-quote');
const starscontainer = document.getElementById('stars-container');

function generateQuote() {
    const randomIndex = Math.floor(Math.random()* quotes.length);
    part1.textContent = quotes[randomIndex][0];
    part2.textContent = quotes[randomIndex][1];

    changeBackgroundColor();

    createStars();

}

function changeBackgroundColor() {
    const randomColorIndex = Math.floor(Math.random()* colores.length);
    document.body.style.backgroundColor = colores[randomColorIndex];
}

function createStars() {
    starscontainer.innerHTML = '';
    const numberOfStars = 60;
    for (let i=0; i<numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random()* 100 + 'vh';
        star.style.left = Math.random()* 100 + 'vw';
        starscontainer.appendChild(star);

        setTimeout(() => {
            star.style.opacity = 0;
        },500);
    }
}


generateQuote();
button.addEventListener('click', generateQuote);