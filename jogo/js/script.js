const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe'); // Adicionei ponto para indicar a classe "pipe"

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}
 

const loop = setInterval(() => {
    console.log('loop')
  const pipePosition = pipe.offsetLeft;
  const marioPosition = parseInt(window.getComputedStyle(mario).bottom); // Corrigi a obtenção da posição bottom

  console.log(pipePosition);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 70) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none'; // Adicionei para parar a animação do Mario
    mario.style.left = `${marioPosition}px`;

    mario.src = './imagens/rip.png';
    mario.style.width = '75px';
    mario.style.left = '50px'

    clearInterval(loop)
  }
}, 10);



document.addEventListener('keydown', jump);
