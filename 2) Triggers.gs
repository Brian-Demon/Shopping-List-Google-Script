function onOpen() {
  getList();
  ss.setActiveSheet(listSheet);
  today = Utilities.formatDate(new Date(), 'GMT-6', 'MMM dd, yyyy  - hh:mm a');
}

function onEdit(e) {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let sheetName = sheet.getName();
  let listSheetName = listSheet.getName();
  let dataSheetName = dataSheet.getName();
  if( sheetName !== listSheetName && sheetName !== dataSheetName ) return;
  let range = e.range;
  let row = range.getRow();
  let col = range.getColumn();
  testSheet.getRange(2, 1).setValue("Row: " + row);
  if ( acceptableBoxRows.indexOf(row) === -1 ) return;
  // ACTUAL BOX CLICKED //
  // DATA SHEET -- //
  if( sheetName === dataSheet.getName() ){
    if( col != 3 ) return;
    //@TODO: FIX WHY sheetName !== dataSheet.getName()
    // NOT REACHING CODE BELOW!!!!!
    setConditionalFormating();
    fixColumns();
    dataSheet.getRange( row, col ).uncheck();
  } else {
    // LIST SHEET -- //
    if( col != 5 ) return;
    //  testSheet.getRange(1, 1).setValue(sheet.getName());
    switch( row ){
        // NEW ITEM BOX CLICKED //
      case newItemRow:
        newItem();
        break;
        // ARCHIVE CHECKED ITEM BOX CLICKED //
      case archiveCheckedItemsRow:
        archiveItems();
        break;
        // ADD NEW ITEMS TO DATA BOX CLICKED //
      case addNewInfoToDataRow:
        addNewInfoToData();
        break;
        // MUST BE SORT BY BOXES //
      default:
        sortBy(row);
        break;
    }
    listSheet.getRange( row, col ).uncheck();
  }
}