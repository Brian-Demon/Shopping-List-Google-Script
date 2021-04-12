function getLongest() {
  let longest = {
    nameColumn: 0,
    itemColumn: 0,
    departmentColumn: 0
  };
  dataSheet.autoResizeColumns(1, 3);
  longest.nameColumn = dataSheet.getColumnWidth(1);
  longest.itemColumn = dataSheet.getColumnWidth(2);
  longest.departmentColumn = dataSheet.getColumnWidth(3);
  
  return longest;
}