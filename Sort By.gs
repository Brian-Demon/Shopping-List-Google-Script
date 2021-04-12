function sortBy(row) {
  let sheet = listSheet;
  if( sheet.getRange(startRow, nameColumn).getValue() === '' ){ return; }
  let lastRow = sheet.getLastRow() - startRow + 1;
  let range = sheet.getRange(startRow, nameColumn, lastRow, 4);
  let arr = [];
  switch( row ){
    case sortByNameRow:
      arr = listSheet.getRange(startRow, nameColumn, lastRow, 1).getValues();
      if( isSorted(arr) ){
        range.sort({column: 2, ascending: false});
      } else {
        range.sort({column: 2, ascending: true});
      }
      break;
    case sortByItemRow:
      arr = listSheet.getRange(startRow, itemColumn, lastRow, 1).getValues();
      if( isSorted(arr) ){
        range.sort({column: 3, ascending: false});
      } else {
        range.sort({column: 3, ascending: true});
      }
      break;
    case sortByDepartmentRow:
      arr = listSheet.getRange(startRow, departmentColumn, lastRow, 1).getValues();
      if( isSorted(arr) ){
        range.sort({column: 4, ascending: false});
      } else {
        range.sort({column: 4, ascending: true});
      }
      break;
    default:
      // *** REMOVE CHECK BOXES AND CORRISPONDING ROW ALREADY UNCHECKED ***
      range.sort({column: 5, ascending: true});
      break;
  }
}