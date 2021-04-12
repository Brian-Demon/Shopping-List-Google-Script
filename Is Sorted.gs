function isSorted(arr){
  return arr.every((v,i,a) => !i || a[i-1] <= v);
}