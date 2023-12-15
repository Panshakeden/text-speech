if ('webkitSpeechRecognition' in window && 'speechSynthesis' in window) {
  let SpeechRecognition = window.webkitSpeechRecognition;
  let recognition = new SpeechRecognition();
  const textToRead = document.getElementById('textToRead');
  
  recognition.continuous = true;
  recognition.lang = 'en-US'; // Set the recognition language
  

  
  
// Check if the browser supports the SpeechSynthesis API
if ('speechSynthesis' in window) {
  const textToRead = document.getElementById('textToRead');
  const readButton = document.getElementById('readButton');

  // Add an event listener for the "Read Aloud" button
  readButton.addEventListener('click', () => {
    const content = textToRead.innerText; // Get the inner text of the element

    // Create a SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = content;

    // Speak the content using the speech synthesis
    window.speechSynthesis.speak(utterance);
  });
} else {
  // SpeechSynthesis API not supported
  console.error('SpeechSynthesis API is not supported in this browser.');
}

} else {
  console.error('Speech recognition or speech synthesis not supported.');
}









// // Check if the browser supports the SpeechSynthesis API


// let SpeechRecognition = window.webkitSpeechRecognition;
//    let recognition= new SpeechRecognition();
//    const textToRead = document.getElementById('textToRead');
//    recognition.continuous = true;

// //    var transcriptions = [];

//     recognition.onstart = () => {
//       //  action.innerHTML = "Listening...";


//        //interval

//        recognition.onend = function() {
//         recognition.start();
//        }
   
//        let counter = 0;
//    let interval = setInterval(function(){
//          counter++;
//    },50000)
   
   
//    recognition.onend = function() {
//     if(counter <= 5 * 60)
//      recognition.start();
//     else
//       clearInterval(interval)
//    }
       
//     }


//     recognition.onresult = (event) => {
//       const speechResult = event.results[0][0].transcript;
     
//       // Check the voice command
//       if (speechResult.toLowerCase().trim()==='go') {
//         const content = textToRead.innerText;
        
//         // Create a SpeechSynthesisUtterance object
//         const utterance = new SpeechSynthesisUtterance();
//         utterance.text = content;
  
//         // Speak the content using the speech synthesis
//         window.speechSynthesis.speak(utterance);
      
//       }
  
      
//     };

//     recognition.start();
    // recognition.onresult = (e)=> {
    //     let transcript = e.results[0][0].transcript;
    //   //  output.innerHTML = transcript;
    //   //  output.classList.remove("hide")
    //   //  action.innerHTML="";
    //   //  var transcriptions = [];
    // }
      //  transcriptions.push(transcript);

          //  if(transcript.toLowerCase().trim()==="stop recording") {
          //     recognition.stop();
          //   }
// if ('speechSynthesis' in window && 'webkitSpeechRecognition' in window) {
//   const textToRead = document.getElementById('textToRead');

  // Create a SpeechRecognition object
  // const recognition = new webkitSpeechRecognition();
  // recognition.continuous = false;
  // recognition.interimResults = false;
  // recognition.lang = 'en-US';

  // Add an event listener for when speech is recognized
  

  // Add event listener for recognition errors (optional)
  

  // Start listening for voice commands
  // recognition.start();






// // Check if the browser supports the SpeechSynthesis API
// if ('speechSynthesis' in window) {
//   const textToRead = document.getElementById('textToRead');
//   const readButton = document.getElementById('readButton');

//   // Add an event listener for the "Read Aloud" button
//   readButton.addEventListener('click', () => {
//     const content = textToRead.innerText; // Get the inner text of the element

//     // Create a SpeechSynthesisUtterance object
//     const utterance = new SpeechSynthesisUtterance();
//     utterance.text = content;

//     // Speak the content using the speech synthesis
//     window.speechSynthesis.speak(utterance);
//   });
// } else {
//   // SpeechSynthesis API not supported
//   console.error('SpeechSynthesis API is not supported in this browser.');
// }







// // Check if the SpeechSynthesis API is available
// if ('speechSynthesis' in window) {
//   // Create a new SpeechSynthesisUtterance instance
//   const speechUtterance = new SpeechSynthesisUtterance();

//   let textarea = document.getElementById('myTextarea');
  
//   // Set the text to be spoken
//   // speechUtterance.text = textarea.value;
 
  
//   // Speak the text automatically
//   speechSynthesis.speak(speechUtterance);

// }

// Using a button

      //  readText =()=> {
      //   // Get the textarea element
      //   let textarea = document.getElementById('myTextarea');
        
      //   // Create a new SpeechSynthesisUtterance instance
      //   let speechUtterance = new SpeechSynthesisUtterance();
        
      //   // Set the text to be spoken as the value of the textarea
      //   speechUtterance.text = textarea.value;
        
      //   // Speak the text
      //   speechSynthesis.speak(speechUtterance);
      // }

      
// responsiveVoice.speak("hello world")
     
  





//Text to speech

// if ('speechSynthesis' in window) {
//  console.log("Speech Synthesis is supported");
// }else{
//   console.log("Speech Synthesis is supported");
// }

// simple text to speech

// let utterance = new SpeechSynthesisUtterance("Hello world");
// speechSynthesis.speak(utterance);

//get  voice

// speechSynthesis.getVoices();

//  getting the voice

// function getVoices() {
//   let voices = speechSynthesis.getVoices();
//   if(!voices.length){
//     let utterance = new SpeechSynthesisUtterance("");
//     speechSynthesis.speak(utterance);
//     voices = speechSynthesis.getVoices();
//   }
//   return voices;
// }

//passing options
// let textToSpeak = "I Love Educative.io";

// let speakData = new SpeechSynthesisUtterance();
// speakData.volume = 1; // From 0 to 1
// speakData.rate = 1; // From 0.1 to 10
// speakData.pitch = 2; // From 0 to 2
// speakData.text = textToSpeak;
// speakData.lang = 'en';
// speakData.voice = getVoices()[0];

// speechSynthesis.speak(speakData);

// //complete code
// function speak(text, voice, rate, pitch, volume) {
//   // create a SpeechSynthesisUtterance to configure the how text to be spoken 
//   let speakData = new SpeechSynthesisUtterance();
//   speakData.volume = volume; // From 0 to 1
//   speakData.rate = rate; // From 0.1 to 10
//   speakData.pitch = pitch; // From 0 to 2
//   speakData.text = text;
//   speakData.lang = 'en';
//   speakData.voice = voice;

//   //speak after two seconds

// if ('speechSynthesis' in window) {

//   let voices = getVoices();
//   let rate = 1, pitch = 2, volume = 1;
//   let text = "Spaecking with volume = 1 rate =1 pitch =2 ";

//   speak(text, voices[5], rate, pitch, volume);

//   setTimeout(()=>{
//     rate = 0.5; pitch = 1.5, volume = 0.5;
//     text = "Spaecking with volume = 0.5 rate = 0.5 pitch = 1.5 ";
//     speak(text, voices[10],rate, pitch, volume );
//   }, 2000);
// }else{
//   console.log(' Speech Synthesis Not Supported '); 
// }
  
  //pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
//   speechSynthesis.speak(speakData);

// }
