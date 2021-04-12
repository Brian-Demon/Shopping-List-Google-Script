function newItem() {
  let numberOfNewItems = listSheet.getRange(newItemRow, (boxColumn + 2)).getValue();
  if( numberOfNewItems === "" ) numberOfNewItems = 1;
  let row;
  let lastRow = listSheet.getLastRow();
  if( lastRow < startRow ) {
    row = startRow;
  } else {
    row = lastRow + 1;
  }
  let newItemRange = listSheet.getRange(row, nameColumn, 1 + numberOfNewItems - 1, 4);
  let nameCell = listSheet.getRange(row, nameColumn, numberOfNewItems, 1);
  let itemCell = listSheet.getRange(row, itemColumn, numberOfNewItems, 1);
  let departmentCell = listSheet.getRange(row, departmentColumn, numberOfNewItems, 1);
  let dataLastRow = dataSheet.getLastRow() + 1;
  let nameLastRow;
  let itemLastRow;
  let departmentLastRow;
  
  for( let r = dataStartRow; r <= dataLastRow; r++ ) {
    let nameValue = dataSheet.getRange(r, 1).getValue();
    let itemValue = dataSheet.getRange(r, 2).getValue();
    let departmentValue = dataSheet.getRange(r, 3).getValue();
    if( nameValue === '' && !nameLastRow ) nameLastRow = r - 1;
    if( itemValue === '' && !itemLastRow ) itemLastRow = r - 1;
    if( departmentValue === '' && !departmentLastRow ) departmentLastRow = r - 1;
  }
  
  let namesDataRange = dataSheet.getRange(1, 1, dataLastRow, 1);
  let itemsDataRange = dataSheet.getRange(1, 2, dataLastRow, 1);
  let departmentsdataRange = dataSheet.getRange(1, 3, dataLastRow, 1);
  let nameRule = SpreadsheetApp.newDataValidation().requireValueInRange(namesDataRange).setAllowInvalid(true).build();
  let itemRule = SpreadsheetApp.newDataValidation().requireValueInRange(itemsDataRange).setAllowInvalid(true).build();
  let departmentRule = SpreadsheetApp.newDataValidation().requireValueInRange(departmentsdataRange).setAllowInvalid(true).build();
  for( let i = 1; i <= numberOfNewItems; i++ ) {
    nameCell.setDataValidation(nameRule).setVerticalAlignment('middle').setFontSize(12);
    itemCell.setDataValidation(itemRule).setVerticalAlignment('middle').setFontSize(12);
    departmentCell.setDataValidation(departmentRule).setVerticalAlignment('middle').setFontSize(12);
    listSheet.getRange(row + i - 1, boxColumn).insertCheckboxes().setVerticalAlignment('middle').setFontSize(12);
    newItemRange.setBorder(true, true, true, true,true, true, black, solid);
  }
  fixColumns();
  setConditionalFormating();
  listSheet.getRange(newItemRow, (boxColumn + 2)).setValue("");
}
