function carTrackLog(){
    
    //intializing the variables
    let destination = 100;
    let moves = 1;
    let distanceTravelled = 0;
    let available = 30;
    let bunk = 0; 
    let totalBunk = 5;
    let petrolBunkArr=[];
    let stepsDistanceLog = document.getElementById("stepsDistanceLog");
    let bunks = document.getElementById("bunks");
    let end = document.getElementById("end");
    let carmove=document.getElementById("carmove").style.transform = "translateX(800px)";
    
      //logic for refresh the moves so that by clicking start button car gets initialised and move from starting point
    while (stepsDistanceLog.firstChild)
    {
      stepsDistanceLog.firstChild.remove()
      
    } 
    while(bunks.firstChild)
        {
            bunks.firstChild.remove()
        }
        while(end.firstChild){
            end.firstChild.remove()
        }
  
      //logic for calculating the other stuffs like distance travelled, number of petrol bunks, petrol available in fuel tank
     for(let i=0;distanceTravelled<destination;i++){
       let factor = Math.floor((Math.random() * 6) +1);
       distanceTravelled = distanceTravelled+factor;
       available = available - factor;
       if(available<10){
          bunk = bunk+1;
          petrolBunkArr.push(distanceTravelled)
          available = available+20;
       }
    
       
       //printing the statement
       let logNode = document.createElement("div");
       let logNodeText = document.createTextNode(`Move ${moves} - car at ${distanceTravelled} petrol remaining ${available}`);
       logNode.appendChild(logNodeText);
       stepsDistanceLog.appendChild(logNode);
       moves= moves+1;
      
     }
     
     let n=document.createElement("div");
     let m=document.createTextNode(`Petrol pump generated at:  ${petrolBunkArr}`);
     n.appendChild(m)
     bunks.appendChild(n);

     let p=document.createElement("div");
     let q=document.createTextNode(`Its already ${distanceTravelled} , Destination Reached...! `);
     p.appendChild(q);
     end.appendChild(p);

    //  car animate
   

    }
    
    