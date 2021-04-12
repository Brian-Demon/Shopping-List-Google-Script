function setConditionalFormating() {
  let namesAndColors = getNameColors();
  let source = listSheet;
  source.clearConditionalFormatRules();
  let rules = source.getConditionalFormatRules();
  let lastRow = source.getLastRow();
  
  let newItemLeft = source.getRange(newItemRow, 2, 1, 3);
  let newItemLeftArray = [ newItemLeft ];
  let newItemRight = source.getRange(newItemRow, 5, 1, 1);
  let newItemRightArray = [ newItemRight ];
  let newItemQuantity = source.getRange(newItemRow, 7, 1, 1);
  let newItemQuantityArray = [ newItemQuantity ];
  
  let sortLeft = source.getRange(sortByNameRow, 2, 3, 3);
  let sortLeftArray = [ sortLeft ];
  let sortRight = source.getRange(sortByNameRow, 5, 3, 1);
  let sortRightArray = [ sortRight ];
  
  let addInfoToDataLeft = source.getRange(addNewInfoToDataRow, 2, 1, 3);
  let addInfoToDataLeftArray = [ addInfoToDataLeft ];
  let addInfoToDataRight = source.getRange(addNewInfoToDataRow, 5, 1, 1);
  let addInfoToDataRightArray = [ addInfoToDataRight ];
  
  let archiveItemLeft = source.getRange(archiveCheckedItemsRow, 2, 1, 3);
  let archiveItemLeftArray = [ archiveItemLeft ];
  let archiveItemRight = source.getRange(archiveCheckedItemsRow, 5, 1, 1);
  let archiveItemRightArray = [ archiveItemRight ];
  
  // Ranges for current list //
  let nameSelection1 = source.getRange(startRow, nameColumn, lastRow - startRow + 1, 1);
  let nameSelection2 = source.getRange(startRow, itemColumn, lastRow - startRow + 1, 1);
  let nameSelection3 = source.getRange(startRow, departmentColumn, lastRow - startRow + 1, 1);
  let nameSelection4 = source.getRange(startRow, boxColumn, lastRow - startRow + 1, 1);
  let name = source.getRange(startRow, nameColumn, lastRow - startRow + 1, 1);
  let item = source.getRange(startRow, itemColumn, lastRow - startRow + 1, 1);
  let dept = source.getRange(startRow, departmentColumn, lastRow - startRow + 1, 1);
  let box = source.getRange(startRow, boxColumn, lastRow - startRow + 1, 1);
  let nameSelectionArray1 = [ nameSelection1 ];
  let nameSelectionArray2 = [ nameSelection2 ];
  let nameSelectionArray3 = [ nameSelection3 ];
  let nameSelectionArray4 = [ nameSelection4 ];
  let nameArray = [ name ];
  let itemArray = [ item ];
  let deptArray = [ dept ];
  let boxArray = [ box ];
  
  let newItemLeftRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied("=E4:E12=TRUE()")
    .setBackground(newItemColor)
    .setRanges(newItemLeftArray)
    .build();
  let newItemRightRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied("=E4:E12=TRUE()")
    .setBackground(newItemColor)
    .setRanges(newItemRightArray)
    .build();
  let newItemQuantityRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied("=E4:E12=TRUE()")
    .setBackground(newItemColor)
    .setRanges(newItemQuantityArray)
    .build();
  
  let sortLeftRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied("=E4:E12=TRUE()")
    .setBackground(sortSelectColor)
    .setRanges(sortLeftArray)
    .build();
  let sortRightRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied("=E4:E12=TRUE()")
    .setBackground(sortSelectColor)
    .setRanges(sortRightArray)
    .build();
  
  let addInfoToDataLeftRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied("=E4:E12=TRUE()")
    .setBackground(addInfoToDataColor)
    .setRanges(addInfoToDataLeftArray)
    .build();
  let addInfoToDataRightRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied("=E4:E12=TRUE()")
    .setBackground(addInfoToDataColor)
    .setRanges(addInfoToDataRightArray)
    .build();
  
  let archiveItemLeftRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied("=E4:E12=TRUE()")
    .setBackground(archiveItemColor)
    .setRanges(archiveItemLeftArray)
    .build();
  let archiveItemRightRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied("=E4:E12=TRUE()")
    .setBackground(archiveItemColor)
    .setRanges(archiveItemRightArray)
    .build();
  
  // Format rules for current list //
  for( let i = 0; i < namesAndColors.length; i++ ){
    let name = namesAndColors[i].name;
    let color = namesAndColors[i].color;
    /*
    Logger.log("Index: " + i);
    Logger.log("Name: " + name);
    Logger.log("Color: " + color);
    Logger.log("");
    */
    let rule1 = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=AND(B${startRow}:B="${name}", E${startRow}:E=FALSE())`)
    .setBackground(color)
    .setRanges(nameSelectionArray1)
    .build();
    let rule2 = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=AND(B${startRow}:B="${name}", E${startRow}:E=FALSE())`)
    .setBackground(color)
    .setRanges(nameSelectionArray2)
    .build();
    let rule3 = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=AND(B${startRow}:B="${name}", E${startRow}:E=FALSE())`)
    .setBackground(color)
    .setRanges(nameSelectionArray3)
    .build();
    let rule4 = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=AND(B${startRow}:B="${name}", E${startRow}:E=FALSE())`)
    .setBackground(color)
    .setRanges(nameSelectionArray4)
    .build();
    rules.push(rule1);
    rules.push(rule2);
    rules.push(rule3);
    rules.push(rule4);
  }
  /*
  let brianRule1 = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=AND(B${startRow}:B="Brian", E${startRow}:E=FALSE())`)
    .setBackground(brianColor)
    .setRanges(nameSelectionArray1)
    .build();
  let brianRule2 = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=AND(B${startRow}:B="Brian", E${startRow}:E=FALSE())`)
    .setBackground(brianColor)
    .setRanges(nameSelectionArray2)
    .build();
  let brianRule3 = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=AND(B${startRow}:B="Brian", E${startRow}:E=FALSE())`)
    .setBackground(brianColor)
    .setRanges(nameSelectionArray3)
    .build();
  let brianRule4 = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=AND(B${startRow}:B="Brian", E${startRow}:E=FALSE())`)
    .setBackground(brianColor)
    .setRanges(nameSelectionArray4)
    .build();
  let lauraRule1 = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=AND(B${startRow}:B="Laura", E${startRow}:E=FALSE())`)
    .setBackground(lauraColor)
    .setRanges(nameSelectionArray1)
    .build();
  let lauraRule2 = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=AND(B${startRow}:B="Laura", E${startRow}:E=FALSE())`)
    .setBackground(lauraColor)
    .setRanges(nameSelectionArray2)
    .build();
  let lauraRule3 = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=AND(B${startRow}:B="Laura", E${startRow}:E=FALSE())`)
    .setBackground(lauraColor)
    .setRanges(nameSelectionArray3)
    .build();
  let lauraRule4 = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=AND(B${startRow}:B="Laura", E${startRow}:E=FALSE())`)
    .setBackground(lauraColor)
    .setRanges(nameSelectionArray4)
    .build();
  */
  let nameRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=E${startRow}:E=TRUE()`)
    .setBackground(darkGrey2)
    .setRanges(nameArray)
    .build();
  let itemRule = SpreadsheetApp.newConditionalFormatRule()
  .whenFormulaSatisfied(`=E${startRow}:E=TRUE()`)
    .setBackground(darkGrey2)
    .setRanges(itemArray)
    .build();
  let deptRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=E${startRow}:E=TRUE()`)
    .setBackground(darkGrey2)
    .setRanges(deptArray)
    .build();
  let boxRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=E${startRow}:E=TRUE()`)
    .setBackground(darkGrey2)
    .setRanges(boxArray)
    .build();
  
  rules.push(newItemLeftRule);
  rules.push(newItemRightRule);
  rules.push(newItemQuantityRule);
  rules.push(sortLeftRule);
  rules.push(sortRightRule);
  rules.push(addInfoToDataLeftRule);
  rules.push(addInfoToDataRightRule);
  rules.push(archiveItemLeftRule);
  rules.push(archiveItemRightRule);
  
  // Rules for current list //
  /*
  rules.push(brianRule1);
  rules.push(brianRule2);
  rules.push(brianRule3);
  rules.push(brianRule4);
  rules.push(lauraRule1);
  rules.push(lauraRule2);
  rules.push(lauraRule3);
  rules.push(lauraRule4);
  */
  rules.push(nameRule);
  rules.push(itemRule);
  rules.push(deptRule);
  rules.push(boxRule);
  
  source.setConditionalFormatRules(rules);
}
