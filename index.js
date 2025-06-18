let arr = [];
const storageKey = "DataKey"

const itmDiv = document.getElementById("items_div");

function loadItems() {
    const data = localStorage.getItem(storageKey);
    if(data) arr = JSON.parse(data);
    renderItems();
}

function saveItems(){
    localStorage.setItem(storageKey,JSON.stringify(arr));
}

function renderItems() {
    itmDiv.innerHTML = null;
    for(let i =0;i<arr.length;i++){
        const some_div = document.createElement("div");
        some_div.style.marginBottom = "20px";
        const pEle = document.createElement("p");
        pEle.innerHTML = arr[i];
        const pRemove = document.createElement("button");
        pRemove.textContent = "X";
        pEle.style.display = "inline";
        pEle.style.marginRight = "20px";
        pEle.style.fontSize = "30px";
        pEle.style.color = "#5A827E";
        pRemove.style.color = "#EEEFE0"
        pRemove.style.border = "1px solid #819A91"
        pRemove.style.backgroundColor = "#b78282"
        pRemove.style.fontSize = "10px"
        some_div.style.display = "flex";
        some_div.style.alignContent = "center";
        some_div.style.justifyContent = "center";
        pRemove.style.padding = "10px 15px";
        pRemove.addEventListener("mouseover",() => pRemove.style.backgroundColor = "#bc7575")
        pRemove.addEventListener("mouseout",() => pRemove.style.backgroundColor = "#b78282")
        pRemove.onclick = () => removeItem(i);
        some_div.style.backgroundColor = "#D1D8BE"
        pEle.style.backgroundColor = "#D1D8BE"
        some_div.style.padding = "10px"
        some_div.style.borderRadius = "20px"
        some_div.appendChild(pEle);
        some_div.appendChild(pRemove);
        itmDiv.appendChild(some_div);

    }
}

function addItem() {
    const itm = document.getElementById("inp").value;
    arr.push(itm);
    document.getElementById("inp").value = "";
    renderItems();
    saveItems();
}

function removeItem(index) {
    arr.splice(index,1);
    renderItems();
    saveItems();
}

document.addEventListener("DOMContentLoaded",loadItems);