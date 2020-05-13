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
    facts[i] += '!!!'
    i++;
  }
 console.log(facts)
}
johnLennonFacts(facts);