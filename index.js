// add solution here
function theBeatlesPlay (musicians, instruments) {
  var emptArray = []
  for(var i=0; i < musicians.length; i++){
      const sen = musicians[i] + ' plays ' + instruments[i]
      emptArray.push(sen);
  }
  return emptArray;
}
function johnLennonFacts(facts){
  let i = 0;
  while(i<facts.length) {
    facts[i] = facts[i] + '!!!'
    i++;
  }
 return facts;
}
function iLoveTheBeatles(number) {
  var arr=[]
  do {
    arr.push('I love the Beatles!')
  }
  while(number < 15);
  return arr;
}