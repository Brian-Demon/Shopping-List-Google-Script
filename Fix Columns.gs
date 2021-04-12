function fixColumns() {
  let longest = getLongest();
  listSheet.setColumnWidth(nameColumn, longest.nameColumn + 15);
  listSheet.setColumnWidth(itemColumn, longest.itemColumn);
  listSheet.setColumnWidth(departmentColumn, longest.departmentColumn);
  listSheet.setColumnWidth(boxColumn, 30);
}
