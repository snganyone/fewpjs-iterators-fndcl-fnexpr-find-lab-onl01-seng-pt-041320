const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  let result = arr.find(({result}) => result === "W");
  if (result){
    return result.year;
  }
}