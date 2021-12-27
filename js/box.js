



function createDiv(){
    var aDiv = document.createElement("DIV")
    document.getElementById("bag").appendChild(aDiv)
    aDiv.setAttribute("class","form-control")
    var clrDiv = document.getElementById("aDivcl").value
    aDiv.setAttribute("style" , "width:100px;margin:5px;height:100px;background:" + clrDiv)
    
}






function createInput (){
    var aInput = document.createElement("INPUT")
    document.getElementById("sell").appendChild(aInput)
    aInput.setAttribute("class","form-control")
    
    var acase = document.getElementById("queen").value
    aInput.setAttribute("placeholder", + acase)
    switch(acase ) {
        case "1":
        case "2":
        case "3":
            aInput.setAttribute("style","background:green")
          break;
        case "4":
        case "5":
        case "6":
            aInput.setAttribute("style","background:black")
        break;
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
            aInput.setAttribute("style","background:aqua")
        break;
        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
            aInput.setAttribute("style","background:yellow")
        break;
        case "17":
        case "18":
        case "19":
        case "20":
        case "21":
            aInput.setAttribute("style","background: #2C041C")
        break;
        default:
          aInput.setAttribute("style","background:brown")
      }
}