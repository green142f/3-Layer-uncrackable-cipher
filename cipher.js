
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




console.log(decryption)
if(decryption == "decrypt"){

  test()
  my_decryption()
  
  }else if(decryption == "encrypt"){
  var input = prompt("what message would you like to encrypt?")
  run()
}
var extras = false;

function cipher(inputs){
  var veryrandomnumber = Math.floor(Math.random()*100);
  return(ciphers())

}
function run(){
  output = cipher(input);
  console.log(output)
  key = key.join()
  switchcipher(output)
  randomstring(newout)
  console.log(newouts)
  key = key.join();
  console.log(key)

}


function switchcipher(input){
  key = key.split("")
  key.push("S")
  console.log("switchcipher!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  console.log(input)
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
      console.log(splitpart)
      console.log(outputs,splitpart)
      finaloutput.push(outputs)

    }else{
            console.log(splitpart)

      outputs = ciphers(splitpart,verynewrandomnumber)
      finaloutput.push(outputs)
      increments = verynewrandomnumber
      console.log(outputs,splitpart)
      
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
  console.log("im at ciphers")
  var randomincrement = parseInt(increment);
  console.log(randomincrement)
  var newInput = inputs
  console.log(newInput)
  console.log("poopsd" +newInput + "hiiisi")
  for(var i = 0;i<newInput.length;i++){
    for(var b = 0;b<one.length;b++){
      if(newInput[i] === one[b]){
        console.log("what is this")
        
        while(randomincrement > 25){
          randomincrement = randomincrement-25
        }
        while(randomincrement < -25){
          randomincrement = randomincrement+25
        }
        console.log(randomincrement + "poose")
        console.log("l")
        if(i+randomincrement > 25){ 
          var difference = b+randomincrement-25
          newout = newout+two[difference]
        }else if(b + randomincrement <-0){

          var difference = b + randomincrement
          newout = newout + two[25+difference]
        }else{
          newout = newout+two[b+randomincrement]
        }
      }
    }
  }
  console.log("here" + newout)
  return(newout)
}
function randomstring(input){
  console.log("randomcipher!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  newInput = input.split("");
  stringrandom = stringrandom.split("")
  var randomincrement = Math.ceil(Math.random()*99)
  for(var i = 0;i< newInput.length;i++){
    for(var b = 0;b<stringrandom.length;b++){
      if(newInput[i] === stringrandom[b]){
        console.log(newInput[i],stringrandom[b])
        console.log(randomincrement)
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
  console.log("randomcipher!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  newInput = input
  var randomincrement = increment
  for(var i = 0;i< newInput.length;i++){
    for(var b = 0;b<stringrandom.length;b++){
      if(newInput[i] === stringrandom[b]){
        console.log(newInput[i],stringrandom[b])
        console.log(randomincrement)
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
