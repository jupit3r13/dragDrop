const positionAtls = [
  { name: "artikel1", x: "", y: "" },
  { name: "artikel2", x: "", y: "" },
  { name: "artikel3", x: "", y: "" },
  { name: "artikel4", x: "", y: "" },
  { name: "artikel5", x: "", y: "" },
  { name: "artikel6", x: "", y: "" },
  { name: "artikel7", x: "", y: "" },
  { name: "artikel8", x: "", y: "" },
  { name: "artikel9", x: "", y: "" },
  { name: "artikel10", x: "", y: "" },
];



const onDivEnter = (ev) =>{

    
  if(ev.currentTarget.childElementCount == 0) {
    ev.currentTarget.className = 'atlEnter';
  }
   
   
}

const dragExit = (ev)=>{
  
  if(ev.currentTarget.childElementCount == 0) {
    ev.currentTarget.className = 'defaultDiv';
  }
 

}

const dragEnd = (ev)=>{
 
  var id = ev.dataTransfer.getData('id');
  var parentDiv = ev.dataTransfer.getData('parentDiv');
  document.querySelector(`#${parentDiv} > #${id}`).className ='defaultDiv';
  
  
}

function dragStart(ev) {
 
 ev.dataTransfer.setData('id' , ev.currentTarget.id);
 ev.dataTransfer.setData('parentDiv' , ev.currentTarget.parentElement.id);
 

  
  
  
}

const removeArtikel = (ev)=>{

  
  const myList = document.getElementById('myList');
  ev.target.style.visibility = 'hidden';
  ev.target.parentElement.id
  const findArrayinx = positionAtls.findIndex(
    (ind) => ind.name == ev.target.parentElement.id
  );
  const artikel = positionAtls[findArrayinx];
  artikel.name = ev.target.parentElement.id;
  artikel.x = "";
  artikel.y = "";

  positionAtls[findArrayinx] = artikel;

  myList.appendChild(ev.target.parentElement);
  
  
  

}


function targetInfo(ev) {
  const findArrayinx = positionAtls.findIndex(
    (ind) => ind.name == ev.target.firstChild.id
  );
  const artikel = positionAtls[findArrayinx];
  artikel.name = ev.target.firstChild.id;
  artikel.x = ev.target.parentElement.id[4];
  artikel.y = ev.target.id[4];

  positionAtls[findArrayinx] = artikel;
}

const exportJs = () => {

  const filtredArtikel = positionAtls.filter((artikel) => artikel.x !== "");
  const jsonPos = JSON.stringify(filtredArtikel);

  console.log(jsonPos);

  const showPos = document.getElementById('showPos');
  showPos.innerHTML = jsonPos;
};



function allowDrop(ev) {
  ev.preventDefault();
}


function drag(ev) {
  
  ev.dataTransfer.setData("text", ev.target.id);
  
    
}



function drop(ev) {
  ev.preventDefault();
  if (ev.target.childNodes.length < 1  ) {
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
    
    ev.target.firstChild.firstElementChild.style.visibility = 'visible';

    
    
    targetInfo(ev);

    
    switch (ev.currentTarget.lastChild.id) {
      case "artikel1":
        ev.currentTarget.className = "artikel1 ";
       console.log(ev.currentTarget);
        
        break;

      case "artikel2":
        ev.currentTarget.className = "artikel2";

        break;
      case "artikel3":
        ev.currentTarget.className = "artikel3";

        break;
      case "artikel4":
        ev.currentTarget.className = "artikel4";

        break;
      case "artikel5":
        ev.currentTarget.className = "artikel5";

        break;
        case "artikel6":
        ev.currentTarget.className = "artikel6";

        break;
        case "artikel7":
        ev.currentTarget.className = "artikel7";

        break;
        case "artikel8":
        ev.currentTarget.className = "artikel8";

        break;
        case "artikel9":
        ev.currentTarget.className = "artikel9";

        break;
        case "artikel10":
        ev.currentTarget.className = "artikel10";

        break;

      default:

        break;
    }
  }
}

const generateDiv = () => {
  const spalten = document.getElementById("spalten");
  const zeilen = document.getElementById("zeilen");
  const mainDiv = document.getElementById("mainDiv");

  for (let index = 0; index < spalten.value; index++) {
    const xDiv = document.createElement("div");
    xDiv.className = "col";
    xDiv.id = `Xdiv${index}`;
    xDiv.ondragover = (event) => {
      allowDrop(event);
    };
    xDiv.ondrop = (event) => {
      drop(event);
    };
    mainDiv.appendChild(xDiv);

    for (let ind = 0; ind < zeilen.value; ind++) {
      const secondDiv = document.getElementById(`Xdiv${index}`);
      // const childInner = document.createTextNode("chetori");
      // divInner.appendChild(childInner);
      


      const divInner = document.createElement("div");
      divInner.id = `ydiv${ind}`;
      divInner.className = "defaultDiv";

      divInner.ondragover = (event) => {
        allowDrop(event);
      };
      divInner.ondrop = (event) => {
        drop(event);
      };
      divInner.ondragenter = (event)=>{
        onDivEnter(event);
      }

      divInner.ondragexit = (event)=>{
        dragExit(event);
      }
     
      divInner.ondragstart = (event)=>{
        dragStart(event);
      }

      divInner.ondragend = (event)=>{
        dragEnd(event);
      }

      secondDiv.appendChild(divInner);
      
      
     
    }
  }
};
