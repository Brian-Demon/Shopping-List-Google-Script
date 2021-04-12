const ss = SpreadsheetApp.openById("1ml5OQYzO2hmJLaGyOUkD_LwtPHx7fx_eO8dXf7_HFmc");

const listSheet = ss.getSheetByName("LIST");
const archiveSheet = ss.getSheetByName("ARCHIVE");
const dataSheet = ss.getSheetByName("DATA");
const testSheet = ss.getSheetByName("TEST");
var testNum = 0;

const startRow = 16;

const nameColumn = 2;
const itemColumn = nameColumn + 1;
const departmentColumn = nameColumn + 2;
const boxColumn = nameColumn + 3;

var names = [];
var items = [];
var departments = [];
var list = {
  names: names,
  items: items,
  departments: departments
};

const dataBoxRow = 2;
const dataStartRow = 6;
const newItemRow = 4;
const sortByNameRow = 6;
const sortByItemRow = 7;
const sortByDepartmentRow = 8;
const addNewInfoToDataRow = 10;
const archiveCheckedItemsRow = 12;
const acceptableBoxRows = [ dataBoxRow, newItemRow, sortByNameRow, sortByItemRow, sortByDepartmentRow, addNewInfoToDataRow, archiveCheckedItemsRow ];

const solid = SpreadsheetApp.BorderStyle.SOLID;

const white = "#ffffff";
const black = "#000000";
const darkGrey2 = '#999999';
const lightGreen1 = "#93c47d";
const addInfoToDataColor = lightGreen1;
const lightCornflowerBlue1 = "#6d9eeb";
const newItemColor = lightCornflowerBlue1;
const lightBlue2 = "#9fc5e8";
const brianColor = lightBlue2;
const lightPurple1 = "#8e7cc3";
const sortSelectColor = lightPurple1;
const lightPurple2 = "#b4a7d6";
const lauraColor = lightPurple2;
const lightRed1 = '#e06666';
const archiveItemColor = lightRed1;

var today = Utilities.formatDate(new Date(), 'GMT-6', 'MMM dd, yyyy  - hh:mm a');