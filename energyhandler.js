

var globalBase = 3;
var globalEnergy = sessionStorage.getItem("Energy");
var baseEnergy;
if(globalEnergy == null){
    baseEnergy = globalBase;
}else {
    baseEnergy = parseInt(globalEnergy);
}

window.onload = function() {
    setEnergyDisplay(baseEnergy)
}
let energy = baseEnergy;
function addEnergy() {
    energy++;
    setEnergyDisplay(energy)
    
};
function removeEnergy() {
    if(energy > 0){
        energy--;
    }
    setEnergyDisplay(energy)
    
    
};
function setEnergyDisplay(amount){
    document.getElementById("energyCount").innerHTML = amount;
    sessionStorage.setItem("Energy", energy)
}
function resetSession(){
    energy = globalBase;
    setEnergyDisplay(energy);
    sessionStorage.clear();
}


function rollDie(){
    dieNumber = Math.floor(Math.random() * 6) + 1 
    energy += dieNumber;
    setEnergyDisplay(energy);
    historyText("You rolled: " + dieNumber);
}

//roll history
function historyText(textToDisplay){
    const para = document.createElement("p");
    var node = document.createTextNode(textToDisplay)
    para.appendChild(node);
    const element = document.getElementById("rollHistory");
    element.appendChild(para);
}

function clearHistory(){
    location.reload();
}