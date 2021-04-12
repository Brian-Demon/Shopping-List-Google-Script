function getArray(column){
  let sheet = listSheet;
  var array = [];
  var lastRow = sheet.getLastRow();
  for( i = startRow; i < lastRow + startRow; i++ ){
    var value = sheet.getRange(i, column).getValue();
    if( value === '' ) break;
    array.push(value);
  }
  return array;
}