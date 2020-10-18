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
  const jsonPos = JSON.stringify(positionAtls);

  console.log(jsonPos);

  const showPos = document.getElementById('showPos');
  showPos.innerHTML = jsonPos;
};

function dragEnd(ev) {
  // console.log(ev.currentTarget.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragStart(ev) {
  //console.log(ev.currentTarget.id);
  // const lastDiv = document.getElementById(ev.currentTarget.id);
  // lastDiv.className = "defaultDiv row align-items-center px-0";
}

function drop(ev) {
  ev.preventDefault();
  if (ev.target.childNodes.length < 1) {
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    targetInfo(ev);

    //console.log(ev.target.firstElementChild.innerHTML);
    // switch (ev.currentTarget.lastChild.id) {
    //   case "artikel1":
    //     ev.currentTarget.className = "artikel1 row align-items-center px-0";

    //     break;

    //   case "artikel2":
    //     ev.currentTarget.className = "artikel2 row align-items-center px-0";

    //     break;
    //   case "artikel3":
    //     ev.currentTarget.className = "artikel3 row align-items-center px-0";

    //     break;
    //   case "artikel4":
    //     ev.currentTarget.className = "artikel4 row align-items-center px-0";

    //     break;
    //   case "artikel5":
    //     ev.currentTarget.className = "artikel5 row align-items-center px-0";

    //     break;
    //     case "artikel6":
    //     ev.currentTarget.className = "artikel6 row align-items-center px-0";

    //     break;
    //     case "artikel7":
    //     ev.currentTarget.className = "artikel7 row align-items-center px-0";

    //     break;
    //     case "artikel8":
    //     ev.currentTarget.className = "artikel8 row align-items-center px-0";

    //     break;
    //     case "artikel9":
    //     ev.currentTarget.className = "artikel9 row align-items-center px-0";

    //     break;
    //     case "artikel10":
    //     ev.currentTarget.className = "artikel10 row align-items-center px-0";

    //     break;

    //   default:

    //     break;
    // }
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
      secondDiv.appendChild(divInner);
    }
  }
};
