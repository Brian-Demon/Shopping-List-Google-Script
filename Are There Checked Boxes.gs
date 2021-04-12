function areThereCheckedBoxes(){
  let sheet = listSheet;
  let thereAre = false;
  let lastRow = sheet.getLastRow();
  let array = getArray(5);
  let indexValue = array.indexOf(true);
  if( indexValue > -1 ){ thereAre = true; }
  //Logger.log(areThere);
  return thereAre;
}