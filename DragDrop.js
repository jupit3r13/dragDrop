const positionAtls = [
  {
    id: 176,
    name: "Bier Gross",
    name_in_checkout: "Name auf der Kasse",
    color: "#d11414",
    price: "15.00",
    deposit: 0,
    discountable: 0,
    x: "",
    y: "",
  },
  {
    id: 177,
    name: "wein gross",
    name_in_checkout: null,
    color: "#d11414",
    price: "0.00",
    deposit: 0,
    discountable: 0,
    x: "",
    y: "",
  },
  {
    id: 931,
    name: "fanta",
    name_in_checkout: "fanta",
    color: "#ff9900",
    price: "1.50",
    deposit: 0,
    discountable: 0,
    x: "",
    y: "",
  },
  {
    id: 970,
    name: "test",
    name_in_checkout: null,
    color: "#eeeeee",
    price: "3.00",
    deposit: 1,
    discountable: 0,
    x: "",
    y: "",
  },
  {
    id: 517,
    name: "test19",
    name_in_checkout: "test19",
    color: "#cc5656",
    price: "0.00",
    deposit: 0,
    discountable: 1,
    x: "",
    y: "",
  },
];

const showAtlMenu = (arrayList) => {
  arrayList.map((lists) => {
    const menuDiv = document.getElementById("myList");
    const myLiMenu = document.createElement("li");

    const textList = lists.name;

    myLiMenu.innerHTML = textList;
    myLiMenu.className = "list-unstyled col";
    myLiMenu.draggable = "true";
    myLiMenu.id = lists.id;
    myLiMenu.ondragstart = (event) => {
      dragStart(event);
    };
    myLiMenu.ondragend = (event) => {
      dragEnd(event);
    };

    menuDiv.appendChild(myLiMenu);
  });
};

const onDivEnter = (ev) => {
  if (ev.currentTarget.childElementCount == 0) {
    ev.currentTarget.className = "atlEnter";
  }
};

const dragExit = (ev) => {
  if (ev.currentTarget.childElementCount == 0) {
    ev.currentTarget.className = "defaultDiv";
  }
};
function dragStart(ev) {
  ev.dataTransfer.setData("id", ev.currentTarget.id);
  console.log(ev.currentTarget.id);
  ev.dataTransfer.setData("parentDiv", ev.currentTarget.parentElement.id);
}

const dragEnd = (ev) => {};

const removeArtikel = (ev) => {
  const myList = document.getElementById("myList");
  ev.target.style.visibility = "hidden";
  const findArrayinx = positionAtls.findIndex(
    (ind) => ind.name == ev.target.parentElement.id
  );
  const artikel = positionAtls[findArrayinx];
  artikel.name = ev.target.parentElement.id;
  artikel.x = "";
  artikel.y = "";

  positionAtls[findArrayinx] = artikel;

  myList.appendChild(ev.target.parentElement);
};

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

  const showPos = document.getElementById("showPos");
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
  if (ev.target.childNodes.length < 3) {
    
    console.log(ev.currentTarget);
    console.log(ev.currentTarget.children[2].children[0]);
    
    var data = ev.dataTransfer.getData("id");
    const itemList = document.getElementById(data);
    itemList.style.visibility = 'hidden';

    const findInx = positionAtls.findIndex((artikel)=> artikel.id == data);

    ev.currentTarget.style.backgroundColor = positionAtls[findInx].color;
    ev.currentTarget.children[1].innerText = positionAtls[findInx].name;
    ev.currentTarget.children[2].children[2].innerHTML = positionAtls[findInx].price;

    if(positionAtls[findInx].deposit === 1) {
      ev.currentTarget.children[2].children[0].style.visibility = 'visible';
    } else if(positionAtls[findInx].deposit === 0) {
      
      ev.currentTarget.children[2].children[0].style.visibility = 'hidden';
    }

    if (positionAtls[findInx].discountable === 1) {
      ev.currentTarget.children[2].children[1].style.visibility = 'visible';
    } else if(positionAtls[findInx].discountable === 0){
      ev.currentTarget.children[2].children[1].style.visibility = 'hidden';
    }

    //ev.target.appendChild(document.getElementById(data));

    

    // targetInfo(ev);

    // switch (ev.currentTarget.lastChild.id) {
    //   case "artikel1":
    //     ev.currentTarget.className = "artikel1 ";

    //     var id = ev.dataTransfer.getData("id");
    //     var parentDiv = ev.dataTransfer.getData("parentDiv");
    //     document.querySelector(`#${parentDiv} > #${id}`).className =
    //       "defaultDiv";

    //     break;

    //   case "artikel2":
    //     ev.currentTarget.className = "artikel2";
    //     var id = ev.dataTransfer.getData("id");
    //     var parentDiv = ev.dataTransfer.getData("parentDiv");
    //     document.querySelector(`#${parentDiv} > #${id}`).className =
    //       "defaultDiv";
    //     break;
    //   case "artikel3":
    //     ev.currentTarget.className = "artikel3";
    //     var id = ev.dataTransfer.getData("id");
    //     var parentDiv = ev.dataTransfer.getData("parentDiv");
    //     document.querySelector(`#${parentDiv} > #${id}`).className =
    //       "defaultDiv";
    //     break;
    //   case "artikel4":
    //     ev.currentTarget.className = "artikel4";
    //     var id = ev.dataTransfer.getData("id");
    //     var parentDiv = ev.dataTransfer.getData("parentDiv");
    //     document.querySelector(`#${parentDiv} > #${id}`).className =
    //       "defaultDiv";
    //     break;
    //   case "artikel5":
    //     ev.currentTarget.className = "artikel5";
    //     var id = ev.dataTransfer.getData("id");
    //     var parentDiv = ev.dataTransfer.getData("parentDiv");
    //     document.querySelector(`#${parentDiv} > #${id}`).className =
    //       "defaultDiv";
    //     break;
    //   case "artikel6":
    //     ev.currentTarget.className = "artikel6";
    //     var id = ev.dataTransfer.getData("id");
    //     var parentDiv = ev.dataTransfer.getData("parentDiv");
    //     document.querySelector(`#${parentDiv} > #${id}`).className =
    //       "defaultDiv";
    //     break;
    //   case "artikel7":
    //     ev.currentTarget.className = "artikel7";
    //     var id = ev.dataTransfer.getData("id");
    //     var parentDiv = ev.dataTransfer.getData("parentDiv");
    //     document.querySelector(`#${parentDiv} > #${id}`).className =
    //       "defaultDiv";
    //     break;
    //   case "artikel8":
    //     ev.currentTarget.className = "artikel8";
    //     var id = ev.dataTransfer.getData("id");
    //     var parentDiv = ev.dataTransfer.getData("parentDiv");
    //     document.querySelector(`#${parentDiv} > #${id}`).className =
    //       "defaultDiv";
    //     break;
    //   case "artikel9":
    //     ev.currentTarget.className = "artikel9";
    //     var id = ev.dataTransfer.getData("id");
    //     var parentDiv = ev.dataTransfer.getData("parentDiv");
    //     document.querySelector(`#${parentDiv} > #${id}`).className =
    //       "defaultDiv";
    //     break;
    //   case "artikel10":
    //     ev.currentTarget.className = "artikel10";
    //     var id = ev.dataTransfer.getData("id");
    //     var parentDiv = ev.dataTransfer.getData("parentDiv");
    //     document.querySelector(`#${parentDiv} > #${id}`).className =
    //       "defaultDiv";
    //     break;

    //   default:
    //     break;
    // }
  }else{
    console.log('nemishe ');
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
   
    mainDiv.appendChild(xDiv);

    for (let ind = 0; ind < zeilen.value; ind++) {
      const secondDiv = document.getElementById(`Xdiv${index}`);
      // const childInner = document.createTextNode("chetori");
      // divInner.appendChild(childInner);

      const divInner = document.createElement("div");
      const divIn1 = document.createElement("div");
      const divIn2= document.createElement("div");
      const divIn3 = document.createElement("div");
      divInner.id = `ydiv${ind}`;
      divInner.className = "defaultDiv ";
      divIn2.draggable = true;
      divInner.appendChild(divIn1);
      divInner.appendChild(divIn2);
      divInner.appendChild(divIn3);

      const nameAtk = document.createElement("i");
      const removeAtk = document.createElement("i");
      const deposit = document.createElement("i");
      const discountable = document.createElement("i");
      const price = document.createElement("i");
      deposit.className = "fas fa-recycle";
      deposit.style.visibility = 'hidden';
      removeAtk.className = "fas fa-times-circle w-100 text-left ";
      discountable.className = "fas fa-percentage ml-1";
      discountable.style.visibility = 'hidden';
      

      price.innerHTML = "0.00";
      price.className = 'float-right';
      nameAtk.innerHTML= 'defaultname';
      divIn1.appendChild(removeAtk);
      divIn2.appendChild(nameAtk);
      divIn3.appendChild(deposit);
      divIn3.appendChild(discountable);
      divIn3.appendChild(price);

      divInner.ondragover = (event) => {
        allowDrop(event);
      };
      divInner.ondrop = (event) => {
        drop(event);
      };
      divInner.ondragenter = (event) => {
        onDivEnter(event);
      };

      divInner.ondragexit = (event) => {
        dragExit(event);
      };

      divInner.ondragstart = (event) => {
        dragStart(event);
      };

      divInner.ondragend = (event) => {
        dragEnd(event);
      };

      secondDiv.appendChild(divInner);
    }
  }
};
