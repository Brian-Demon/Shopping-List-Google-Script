function getNameColors() {
  let arr = [];
  let lastRow = dataSheet.getLastRow();
  for( let r = dataStartRow; r < lastRow; r++ ){
    let obj = {
      name: "",
      color: "#ffffff"
    }
    let cell = dataSheet.getRange(r, 1);
    let name = cell.getValue();
    if( name === "" ) break;
    obj.name = name;
    obj.color = cell.getBackgrounds()[0];
    /*
    Logger.log("Row: " + r);
    Logger.log("Name: " + obj.name);
    Logger.log("Color: " + obj.color);
    Logger.log("");
    */
    arr.push(obj);
  }
  return arr;
}
