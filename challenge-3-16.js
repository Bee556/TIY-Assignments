function alphaSort(str){
  var splitString = str.toLowerCase().split("");
  splitString.sort();
  var reString = splitString.join("");
  console.log(reString);
}
alphaSort('happydog');
alphaSort('webmaster');



// CHALLENGE 2!!!

// Used code from https: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function longestCountry(str){
  var countries = str.split(", ");
  countries.sort(function(a,b){
   return a.length<b.length;
  });
  console.log("The longest country name is " + countries[0]);
}
longestCountry("United States of America, Australia, Germany, Dominican Republic");
