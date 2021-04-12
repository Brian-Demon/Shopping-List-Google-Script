function getArrayOfTruth(column){
  let sheet = listSheet;
  let array = [];
  let lastRow = sheet.getLastRow();
  for( i = startRow; i <= lastRow; i++ ){
    var value = sheet.getRange(i, column).getValue();
    if( value === true ){ array.push(value); };
  }
  return array;
}