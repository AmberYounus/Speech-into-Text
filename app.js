var speech = true;
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
const text = document.querySelector('.text');
text.appendChild(p);

recognition.addEventListener('result' , e=>{
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result.transcript)
    .join('')
    document.getElementById("p").innerHTML = transcript;
    console.log(transcript);
    console.log(text);
})
if(speech == true){
    recognition.start();
    recognition.addEventListener('end',recognition.start)
}