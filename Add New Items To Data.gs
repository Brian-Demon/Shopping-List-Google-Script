function addNewInfoToData() {
  let data = getData();
  getList();
//  loggerList();
  for( let k = 0; k <= 2; k++ ){
    switch ( k ){
      case 0:
        for( let i = 0; i < list.names.length; i++ ){
          let value = list.names[i];
          if( data[0].indexOf(value) === -1 ) pushNewData(1, value);
        }
        break;
      case 1:
        for( let i = 0; i < list.items.length; i++ ){
          let value = list.items[i];
          if( data[1].indexOf(value) === -1 ) pushNewData(2, value);
        }
        break;
      case 2:
        for( let i = 0; i < list.departments.length; i++ ){
          let value = list.departments[i];
          if( data[2].indexOf(value) === -1 ) pushNewData(3, value);
        }
        break;
      default:
        break;
    }
  }
  fixColumns();
  fixDropdowns();
}

function pushNewData(column, value){
  let nextRow;
  let data = getData();
  switch ( column ){
    case 1:
      nextRow = data[0].length + dataStartRow;
      break;
    case 2:
      nextRow = data[1].length + dataStartRow;
      break;
    case 3:
      nextRow = data[2].length + dataStartRow;
      break;
    default:
      break;
  }
  dataSheet.getRange(nextRow, column).setValue(value).setBorder(true, true, true, true, true, true, black, solid);
}