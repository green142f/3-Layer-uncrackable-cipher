
var one = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var two = ["y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w"]
var extra = ["."," ","(",")","'","#",";"]
var key = [];
var output = ""
var outputs = []
var usednumbers = []
var cypherincriptionthing = []
var increments = 0;
var finaloutput = [];
var newout = "";
var newouts = "";
var currentfunction = "";
var stringrandom ="*1m7<~/3' edfx;g?qwc$:>t8j+a.[zlb`9y#@{5ru26!}%,4v&pi]kn(_h=^-)0so"
var decryption = prompt("do you want to encrypt or decrypt your message?,answer in lowercase")
var outputtings = [];
var outputting = [];
var indexkeys = []
var keyss = []
var a = ""
var b = "";
var c = "";
if(decryption == "decrypt"){
  var input = prompt("what is your encrypted message?").split("")
  var keys = prompt("what is your key?").split(",");
  for(var i = 0;i<keys.length;i++){
    if(keys[i] == ""){
       keys.splice(i,1)
       i = i-1
    }
  }
  keys.join();
  for(var i = keys.length-1;i>-1;i--){
    if(isNaN(keys[i]) == true){
      keyss.push(keys.splice(i,keys.length-i+1))

    }else{
      keys[i] = parseInt(keys[i])
    }
  }
  keys = keyss;

  for(var i = 0;i<keys.length;i++){
    var current = keys[i][0];
    if(current == "R"){
      a =randomstrings(input,keys[i][1]-keys[i][1]-keys[i][1])
      

    }else if(current == "S"){
      keys[i].splice(0,2);
      var lols  = keys[i].length/2+2
      for(var b = 0;b<a.length+1;b++){
        var currentpart = a.split("").splice(0,keys[i][1])

        var currentkey = keys[i].splice(0,2);
        if(currentkey[0] >0){
        }else{
          
          b =ciphers(currentpart,currentkey[0]-currentkey[0]-currentkey[0])
        }

      }

    }else if(current == "C"){
        a =randomstrings(c,keys[i][1]-keys[i][1]-keys[i][1])

    }
  }
  // if(randomincrement == )
  // keyss = keyss.split(",");
  // for(var i = 0;i<keyss.length;i++){
  //   if(keyss[i] == ""){
  //     keyss.splice(i,1)
  //     i = i-1
  //   }
  // }
  // console.log(keyss)
  // for(var i = 0;i<keyss.length;i++){
  //   console.log(keyss[i])
  //   if(isNaN(keyss[i]) == true){
  //     indexkeys.push(i);

  //   }
  // }
  // for(var i = 0;i<indexkeys.length;i++){
  //   console.log(indexkeys)
  //   console.log(keyss.length)
  //   console.log(indexkeys.length)
  //   console.log("hi my duddee")
  //   console.log(i === keyss.length - 1)

  //   if(i == input.length-1){
  //     console.log("adfkljadfkladjfkladjlkf")
      
  //     var currentset = input.splice(parseInt(indexkeys[i]),parseInt(keyss.length)-parseInt(indexkeys[i]))
  //     console.log(currentset + "!!!!!!!!!!!!!!!!!")
  //   }else{
  //     var currentset = input.splice(parseInt(indexkeys[i]),parseInt(keyss.length)-parseInt(indexkeys[i]))
  //     console.log(currentset)


  //     console.log(keyss[parseInt(i)])
  //     console.log("akdlfjad;lkfja;ldkjf;lakdjf;lkadjfl;kj")
  //      var currentset = keyss.splice(parseInt(indexkeys[i]),parseInt(indexkeys[i+1])-parseInt(indexkeys[i]))
  //      if(keyss[parseInt(i)] == "R"){
  //        currentset.splice(0,1)
  //      }else if(keyss[parseInt(i)]== "S"){
  //        console.log("hi!!!!!!!!!!!")
  //        currentset.splice(0,1)
  //        for(var b = 0;b<input.length;b++){
  //          var currentcurrentset = input.splice(0,parseInt(currentset[0]));
  //          currentset.splice(0,1)
  //          if(currentset[1] == 0){
  //            var currency = ciphers(currentcurrentset,parseInt(currentset[0]))
  //            outputtings.push(currency)
  //            console.log(outputtings)
             
  //          }else{
            
  //           var currency = ciphers(currentcurrentset,parseInt(currentset[0])-parseInt(currentset[0])-parseInt(currentset[0]));
  //           outputtings.push(currency)
  //           console.log(outputtings)
  //          }
           

  //        }
  //      }else if(keyss[parseInt(i)]== "C"){
  //        console.log("I'm in C!")
  //        currentset.splice(0,1)
  //        console.log(currentset)
  //        console.log(currentset[0])
  //        console.log(parseInt(currentset[0])-parseInt(currentset[0])-parseInt(currentset[0]))
  //        console.log(currentset + "ldafkjadlkfjadlfj")
  //        outputting = ciphers(input,parseInt(currentset[0])-parseInt(currentset[0])-parseInt(currentset[0]))
  //        console.log(outputting)

  //      }
  //   }

  //     // if(b = parseInt(indexkeys[i])){
  //     //   if((keyss[b]) == "C"){
  //     //     currentfunction = "cipher()"
  //     //     var currentset = keyss.splice(b,parseInt(indexkeys[i+1])-parseInt(indexkeys[i]))
  //     //   }else if(keyss[b] == "S"){
  //     //     currentfunction = "switchcipher()"
  //     //     var currentset = keyss.splice(b,parseInt(indexkeys[i+1])-parseInt(indexkeys[i]))
  //     //   }else if(keyss[b] == "R"){
  //     //     currentfunction = "randomstring()"
  //     //     var currentset = keyss.splice(b,parseInt(indexkeys.length)-parseInt(indexkeys[i]))
  //     //   }
  //     // }else{
        








  //     // }

  //   }

    
  }else if(decryption == "encrypt"){
  var input = prompt("what message would you like to encrypt?")
  run()
}
var extras = false;
function cipher(inputs){
  var newInput = inputs.split("")
  var randomincrement = Math.ceil(Math.random()*99)
  var rand = randomincrement
  while(randomincrement > 26){
          randomincrement = randomincrement-26
        }
  for(var i = 0;i<newInput.length;i++){
    for(var z = 0;z<extra.length;z++){
      if(newInput[i] === extra[z]){
        extras = true
        break;
      }
    }
    if(extras == true){
      output = output + newInput[i]
      extras = false
    }else{
      for(var b = 0;b<one.length;b++){
      if(newInput[i] === one[b]){
        while(randomincrement >= 25){
          randomincrement = randomincrement-25
        }
        while(randomincrement < -25){
          randomincrement = randomincrement+25
        }
        if(b+randomincrement >= 25){ 
          var difference = b+randomincrement-25
          rand = difference
          output = output+two[difference]
        }else if(b + randomincrement <-0){

          var difference = i + randomincrement
          output = output + two[25+difference]
        }else{
          rand = b+randomincrement
          output = output+two[b+randomincrement]
        }
      }
    }
    }
    
  }
  key.push("C");
  key.push(rand)
  return(output)
}
function run(){
  output = cipher(input);
  key = key.join()
  switchcipher(output)
  randomstring(newout)
  key = key.join();
}


function switchcipher(input){
  key = key.split("")
  key.push("S")
  var newSplit = input.split("")
  var randomnumber = 0;
  if(isPrime(input.length) == false){
    for(var i = 0;i<10;i++){
        randomnumber = Math.ceil(Math.random()*input.length)
        if(input.length% randomnumber === 0 && randomnumber!=input.length){
          
          break;
        }
      }
  }else{
    randomnumber = 1;
  }
  key.push(randomnumber)

  
  while(newSplit.length != 0){
    var splitpart = newSplit.splice(0,randomnumber);
    var newrandomnumber = Math.floor(Math.random()*2)
    var verynewrandomnumber = Math.floor(Math.random()*100)
    
    if(newrandomnumber == 0){
      increments = verynewrandomnumber-verynewrandomnumber-verynewrandomnumber
      outputs = ciphers(splitpart,increments)
      finaloutput.push(outputs)

    }else{

      outputs = ciphers(splitpart,verynewrandomnumber)
      finaloutput.push(outputs)
      increments = verynewrandomnumber
      
    }
    key.push(increments)
    key.push(newrandomnumber)
  }
  
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return true;
}

function ciphers(inputs,increment){
  output = ""
  var randomincrement = parseInt(increment);
  var newInput = inputs
  for(var i = 0;i<newInput.length;i++){
    for(var b = 0;b<one.length;b++){
      if(newInput[i] === one[b]){
        
        while(randomincrement > 25){
          randomincrement = randomincrement-25
        }
        while(randomincrement < -25){
          randomincrement = randomincrement+25
        }
        if(i+randomincrement > 25){ 
          var difference = i+randomincrement-25
          newout = newout+two[difference]
        }else if(i + randomincrement <-0){

          var difference = i + randomincrement
          newout = newout + two[25+difference]
        }else{
          newout = newout+two[i+randomincrement]
        }
      }
    }
  }
  return(newout)
}
function randomstring(input){
  newInput = input.split("");
  stringrandom = stringrandom.split("")
  var randomincrement = Math.ceil(Math.random()*99)
  for(var i = 0;i< newInput.length;i++){
    for(var b = 0;b<stringrandom.length;b++){
      if(newInput[i] === stringrandom[b]){
        while(randomincrement >= 25){
          randomincrement = randomincrement-25
        }
        if(b+randomincrement >= 25){ 
          var difference = b+randomincrement-25
          newouts = newouts+stringrandom[difference]
        }else{
          newouts = newouts+stringrandom[b+randomincrement]
        }
      }
    }
  }



key.push("R")
key.push(randomincrement)


}
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function randomstrings(input,increment){
  newouts = ""
  newInput = input
  var randomincrement = increment
  for(var i = 0;i< newInput.length;i++){
    for(var b = 0;b<stringrandom.length;b++){
      if(newInput[i] === stringrandom[b]){
        while(randomincrement < -25){
          randomincrement = randomincrement+25
        }
        if(i + randomincrement <-0){
          var difference = i + randomincrement
          newouts = newouts + two[25+difference]
        }else{
          newouts = newouts+stringrandom[b+randomincrement]
        }
      }
    }
  }
  return(newouts)
}
