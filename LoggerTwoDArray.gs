function loggerTwoDArray(arr) {
  for( let i = 0; i < arr.length; i++ ){
    for( let j = 0; j < arr[i].length; j++ ){
      Logger.log("[" + i + "][" + j + "]: " + arr[i][j]);
    }
  }
}
