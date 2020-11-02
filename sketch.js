var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var myVoice = new p5.Speech(); 


function setup() {

    createCanvas(displayWidth, 100);
    background (255,255,255)
    sentiment = ml5.sentiment('movieReviews');
    
}


function draw()
{

}

function start_rec(){
    myRec.resultString = "";
    myRec.start();
    setTimeout(() => {myVoice.speak("mi hai detto" + myRec.resultString)}, 5000);
    setTimeout(() => {sentiment_analisis()}, 5000);
                        
}

function showResult()
{
    if(myRec.resultValue==true) {
        background(255, 255, 255);
        text(myRec.resultString, 100, 100);
    }
    sentiment_analisis();
}

function sentiment_analisis(){

    // make the prediction
  const  prediction = sentiment.predict(myRec.resultString);
  console.log(prediction)
  text("Il tuo punteggio è :" + prediction.score, 100,100)
  if (prediction.score > 0.5){
      myVoice.speak("In base al tuo racconto sei emotivamente positivo")
  } else {
      myVoice.speak("In base a quello che mi hai detto sei un po' triste")
  }


}