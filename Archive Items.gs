function archiveItems() {
  // *** REMOVE CHECK BOX ALREADY UNCHECKED ***
  if( areThereCheckedBoxes() === false ){ return; }
  let sheet = listSheet;
  // -- SORT ROWS FOR EASE OF COPYING AND DELETING -- //
  sortBy(10);
  
  let truthArray = getArrayOfTruth(5);
  let length = truthArray.length;
  let lastRow = sheet.getLastRow();
  
  let startDelRow = lastRow - length + 1;
  let targetNextRow = archiveSheet.getLastRow() + 1;
  let toArchive = {
    nameArray: [],
    itemArray: [],
    departmentArray: []
  }
  for(i = 0; i < length; i++){
    let name = sheet.getRange(startDelRow + i, 2).getValue();
    let item = sheet.getRange(startDelRow + i, 3).getValue();
    let department = sheet.getRange(startDelRow + i, 4).getValue();
    toArchive.nameArray.push(name);
    toArchive.itemArray.push(item);
    toArchive.departmentArray.push(department);
  }
  sheet.deleteRows(startDelRow, length);
  pushArchive(toArchive);
  setConditionalFormating();
}

function pushArchive(toArchive) {
  let sheet = archiveSheet;
  let nextRow = archiveSheet.getLastRow() + 1;
  let color = brianColor;
  for(i = 0; i < toArchive.nameArray.length; i++){
    if( toArchive.nameArray[i] == 'Laura' ){ color = lauraColor; }
    sheet.getRange(nextRow + i, 1).setValue(toArchive.nameArray[i]).setBorder(true, true, true, true, true, true, black, solid).setBackground(color).setHorizontalAlignment('center').setVerticalAlignment('middle').setFontSize(12);
    sheet.getRange(nextRow + i, 2).setValue(toArchive.itemArray[i]).setBorder(true, true, true, true, true, true, black, solid).setBackground(color).setHorizontalAlignment('center').setVerticalAlignment('middle').setFontSize(12);
    sheet.getRange(nextRow + i, 3).setValue(toArchive.departmentArray[i]).setBorder(true, true, true, true, true, true, black, solid).setBackground(color).setHorizontalAlignment('center').setVerticalAlignment('middle').setFontSize(12);
    sheet.getRange(nextRow + i, 4).setValue(today).setBorder(true, true, true, true, true, true, black, solid).setBackground(color).setHorizontalAlignment('center').setVerticalAlignment('middle').setFontSize(12);
  }
  sheet.autoResizeColumns(1, 4);
//  let width = getNameLength(getArray(1)) * 10;
//  sheet.setColumnWidth(1, width);
}