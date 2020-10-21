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

const isDark = (hexcolor) => {
  var input = document.getElementById("input");
  var r = parseInt(hexcolor.substr(1, 2), 16);
  var g = parseInt(hexcolor.substr(3, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var rgb = r * 0.299 + g * 0.587 + b * 0.114;
  
  if(rgb <= 186 ) {
    return true;
  } else{
    return false;
  }  
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

const handleRemove = (ev)=>{
    
 
  
  
  const NameRemAtl = ev.target.parentElement.parentElement.children[1].children[0].innerText;

  const findArrayinx = positionAtls.findIndex(
    (ind) => ind.name == NameRemAtl
  );

  const findDivList = document.getElementById("myList");
  const myLiMenu = document.createElement("li");
  myLiMenu.className = "list-unstyled col";
  myLiMenu.draggable= true;
  myLiMenu.innerHTML = NameRemAtl;
  myLiMenu.id =positionAtls[findArrayinx].id;
  myLiMenu.ondragstart = (event) => {
    dragStart(event);
  };
  myLiMenu.ondragend = (event) => {
    dragEnd(event);
  };
  findDivList.appendChild(myLiMenu);
  
  const mainEl =ev.target.parentElement.parentElement.children;
  ev.target.parentElement.parentElement.style.backgroundColor = '#9f9faa';
  ev.target.parentElement.parentElement.children[1].i

  
  mainEl[0].children[0].style.visibility = 'hidden';
  mainEl[1].children[0].innerHTML = 'keine Auswahl';
  mainEl[1].style.color = '#000000'; 
  mainEl[1].children[0].style.fontSize = '13px';
  
  mainEl[2].children[0].style.visibility = 'hidden';  
  mainEl[2].children[1].style.visibility = 'hidden';  
  mainEl[2].children[2].style.visibility = 'hidden';  
    
    
    
    
    
}

const xdivOndragEnter= (ev)=>{

  
  const tempDiv = document.createElement("div");
  
  
  const targetId = ev.dataTransfer.getData("id");
  const findArrayinx = positionAtls.findIndex(
    (ind) => ind.id == targetId
  );
  


    
  document.getElementById(ev.dataTransfer.getData("id"));

      

}

const onInnerEnter=(ev)=>{
 
  
  
}

const onInnerExit=(ev)=>{
 
  
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

  const showPos = document.getElementById("showPos");
  showPos.innerHTML = jsonPos;
};

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

const  dropFromHolder = (ev)=>{
  ev.preventDefault();

  


}


function dropFromList(ev) {
  ev.preventDefault();
 
    
    
    const data = ev.dataTransfer.getData("id");
    var itemDrag =ev.target.appendChild(document.getElementById(data));
    itemDrag.style.display = 'none';
    
   
    
    const findInx = positionAtls.findIndex((artikel)=> artikel.id == data);
    
    ev.currentTarget.style.backgroundColor = positionAtls[findInx].color;
    
    ev.currentTarget.children[0].children[0].style.visibility = 'visible';
   
    
    if (isDark(positionAtls[findInx].color)) {
      ev.currentTarget.children[0].style.color = 'white';
      ev.currentTarget.children[1].style.color = 'white';
      ev.currentTarget.children[2].children[2].style.color = 'white';
      ev.currentTarget.children[2].children[0].style.color = 'white';
      ev.currentTarget.children[2].children[1].style.color = 'white';
    }

    if (!isDark(positionAtls[findInx].color)) {
      ev.currentTarget.children[0].style.color = '#1a0000';
      ev.currentTarget.children[1].style.color = '#1a0000';
      ev.currentTarget.children[2].children[2].style.color = '#1a0000';
      ev.currentTarget.children[2].children[0].style.color = '#1a0000';
      ev.currentTarget.children[2].children[1].style.color = '#1a0000';
    }

    
    ev.currentTarget.children[2].children[2].style.visibility = 'visible';
    ev.currentTarget.children[1].children[0].innerText = positionAtls[findInx].name;
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

    

    

    // targetInfo(ev);

    // switch (ev.currentTarget.lastChild.id) {
    //   case "artikel1":
    //     ev.currentTarget.className = "artikel1 ";

    //     var id = ev.dataTransfer.getData("id");
    //     var parentDiv = ev.dataTransfer.getData("parentDiv");
    //     document.querySelector(`#${parentDiv} > #${id}`).className =
    //       "defaultDiv";

   
  
}

const generateDiv = () => {
  const spalten = document.getElementById("spalten");
  const zeilen = document.getElementById("zeilen");
  const mainDiv = document.getElementById("mainDiv");

  for (let index = 0; index < spalten.value; index++) {
    const xDiv = document.createElement("div");
    xDiv.className = "col";
    xDiv.id = `Xdiv${index}`;
    xDiv.ondragenter = (event)=>{
      xdivOndragEnter(event);
    }
    xDiv.ondrag = (event)=>{
      allowDrop(event);
    }
   
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
      removeAtk.className = "fas fa-times-circle  text-left ";
      removeAtk.style.visibility = 'hidden';
      removeAtk.style.cursor = "pointer";
      removeAtk.onclick = (event)=>{
        handleRemove(event);
      };
      
      discountable.className = "fas fa-percentage ml-1";
      discountable.style.visibility = 'hidden';
      

      price.innerHTML = "0.00";
      price.className = 'float-right';
      price.style.visibility = 'hidden';
      nameAtk.innerHTML= 'keine Auswahl';
      nameAtk.ondrop = (event)=>{
        dropFromHolder(event)
      };

      nameAtk.style.fontSize = '13px';
      divIn1.appendChild(removeAtk);
      divIn2.appendChild(nameAtk);
      divIn3.appendChild(deposit);
      divIn3.appendChild(discountable);
      divIn3.appendChild(price);

      divInner.ondragover = (event) => {
        allowDrop(event);
      };
      divInner.ondrop = (event) => {
        dropFromList(event);
      };
      divInner.ondragenter = (event) => {
        onInnerEnter(event);
      };

      divInner.ondragexit = (event) => {
        onInnerExit(event);
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
