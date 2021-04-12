function loggerList() {
  getList();
  for( let k = 0; k <= 2; k++ ) {
    switch ( k ){
      case 0:
        for( let i = 0; i < list.names.length; i++ ){
          let value = list.names[i];
          Logger.log("Names[" + i + "] = " + value);
        }
        break;
      case 1:
        for( let i = 0; i < list.items.length; i++ ){
          let value = list.items[i];
          Logger.log("Items[" + i + "] = " + value);
        }
        break;
      case 2:
        for( let i = 0; i < list.departments.length; i++ ){
          let value = list.departments[i];
          Logger.log("Departments[" + i + "] = " + value);
        }
        break;
      default:
        break;
    }
  }
}
