const question = document.querySelector('.question');
question.textContent =
  'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';

const answer = prompt('give me an answer');

const answerElement = document.querySelector('.answer__text');
answerElement.textContent = answer;

if (answer === 'Bell') {
  document.querySelector('.answer').classList.add('answer--correct');
} else {
  document.querySelector('.answer').classList.add('answer--wrong');
}
