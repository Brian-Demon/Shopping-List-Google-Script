function getList() {
  let lastRow = listSheet.getLastRow();
  for( let r = startRow; r <= lastRow; r++ ) {
    let name = listSheet.getRange(r, nameColumn).getValue();
    if( name === "" ) return;
    let item = listSheet.getRange(r, itemColumn).getValue();
    let department = listSheet.getRange(r, departmentColumn).getValue();
    names.push(name);
    items.push(item);
    departments.push(department);
    list.names = names;
    list.items = items;
    list.departments = departments;
  }
}
