function fixDropdowns() {
  let lastRow = listSheet.getLastRow();
  let dataLastRow = dataSheet.getLastRow();
  let nameRange = listSheet.getRange(startRow, 2, lastRow - startRow + 1, 1);
  let itemRange = listSheet.getRange(startRow, 3, lastRow - startRow + 1, 1);
  let deptRange = listSheet.getRange(startRow, 4, lastRow - startRow + 1, 1);
  let namesDataRange = dataSheet.getRange(6, 1, dataLastRow, 1);
  let itemsDataRange = dataSheet.getRange(6, 2, dataLastRow, 1);
  let departmentsdataRange = dataSheet.getRange(6, 3, dataLastRow, 1);
  let nameRule = SpreadsheetApp.newDataValidation().requireValueInRange(namesDataRange).setAllowInvalid(true).build();
  let itemRule = SpreadsheetApp.newDataValidation().requireValueInRange(itemsDataRange).setAllowInvalid(true).build();
  let departmentRule = SpreadsheetApp.newDataValidation().requireValueInRange(departmentsdataRange).setAllowInvalid(true).build();
  nameRange.setDataValidation(nameRule);
  itemRange.setDataValidation(itemRule);
  deptRange.setDataValidation(departmentRule);
}
