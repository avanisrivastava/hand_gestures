//https://teachablemachine.withgoogle.com/models/4b353HOQ1/

function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4b353HOQ1/model.json',modelReady);
    }

    function modelReady(){
        classifier.classify(gotResult);
    }

    function gotResult(error,result){
        if(error){
            console.error(error)
        }
        else{
           console.log(results)
           document.getElementById("result_label").innerHTML="i can hear -"+results[0].label;
        img=document.getElementById("the_hearing_gif");
           if(result[0].label=="barking"){
               img.src="dog.jpg";
                          }
                          else if( result[0].label=="meow"){
                              img.src="cat.jpg";
                             
                          }
        }
    }