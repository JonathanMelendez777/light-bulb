window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let led1 = document.getElementById('led1');
let led2 = document.getElementById('led2');
let led3 = document.getElementById('led3');
let led4 = document.getElementById('led4');
let led5 = document.getElementById('led5');

recognition.addEventListener('result', (e) => {
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  if (e.results[0].isFinal) {
    console.log(text);
    if (text.includes('led 1') || text.includes('Led 1')) {
      if(led1.checked == 0){
        led1.checked = 1;
      }else{
        led1.checked = 0;
      }
    }
    if (text.includes('led 2') || text.includes('Led 2')) {
      if(led2.checked == 0){
        led2.checked = 1;
      }else{
        led2.checked = 0;
      }
    }
    if (text.includes('led 3') || text.includes('Led 3')) {
      if(led3.checked == 0){
        led3.checked = 1;
      }else{
        led3.checked = 0;
      }
    }
    if (text.includes('led 4') || text.includes('Led 4')) {
      if(led4.checked == 0){
        led4.checked = 1;
      }else{
        led4.checked = 0;
      }
    }
    if (text.includes('led 5') || text.includes('Led 5')) {
      if(led5.checked == 0){
        led5.checked = 1;
      }else{
        led5.checked = 0;
      }
    }
    if(text.includes('Encender luces') || text.includes('encender luces')){
      led1.checked = 1;
      led2.checked = 1;
      led3.checked = 1;
      led4.checked = 1;
      led5.checked = 1;
    }
    if(text.includes('Luces fuera') || text.includes('luces fuera')){
      led1.checked = 0;
      led2.checked = 0;
      led3.checked = 0;
      led4.checked = 0;
      led5.checked = 0;
    }
  }
});


recognition.addEventListener('end', () => {
  recognition.start();
})

recognition.start();