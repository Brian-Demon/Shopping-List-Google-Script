function getData() {
  let sheet = dataSheet;
  let arr = [[],[],[]];
  let namesData = [];
  let itemsData = [];
  let departmentsData = [];
  let lastRow = sheet.getLastRow();
  for( let r = dataStartRow; r <= lastRow; r++ ) {
    let name = sheet.getRange(r, 1).getValue();
    if( name !== "" ) namesData.push(name);
    let item = sheet.getRange(r, 2).getValue();
    if( item !== "" ) itemsData.push(item);
    let department = sheet.getRange(r, 3).getValue();
    if( department !== "" ) departmentsData.push(department);
    arr[0] = namesData;
    arr[1] = itemsData;
    arr[2] = departmentsData;
  }
//  loggerTwoDArray(arr);
  return arr;
}
