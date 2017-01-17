(function(window){
 var names = ["Yaakov", "John", "Frank", "Jason", "Paul", "Jen", "Larry", "Paula", "Laura", "Jim"];
 

 for (var i=0; i<names.length;i++) {
  //console.log(byeSpeaker.names+names[i])

  var firstLetter=names[i].charAt(0);

  if (firstLetter==='J' || firstLetter==='j') {
     helloSpeaker.speak(names[i])
  } else {
     byeSpeaker.speak(names[i])
  }
 }
window.names=names;
})(window);