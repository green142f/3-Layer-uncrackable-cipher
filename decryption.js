
function test() {
	console.log("hello")
}

function my_decryption(){
	var encryptedmessage = prompt("what is your encrypted message?");
	var encryptedkey = prompt("what is your key?")
	var index;
	var indexkeys = [];
	var letterkeys = [];

	encryptedkey = encryptedkey.split(",");
	
	encryptedmessage.split("")
	console.log(encryptedmessage)
	console.log("youdiafifhaihdiafhdifhidahfiahdfiahdifhadihelaktlhekhthehtingsthahttheth")
	for(var i = 0;i<encryptedkey.length;i++){
		console.log(i)
		console.log(encryptedkey)
		if(encryptedkey[i] == ""){
			console.log("wut")
			console.log(encryptedkey)
			encryptedkey.splice(i,1);
			i = i-1
		}else if(isNaN(encryptedkey[i]) == true){
			indexkeys.push(i);
			indexkeys.push(encryptedkey[i])
		}
	}
	for(var i = encryptedkey.length-1;i>=0;i--){
		if(isNaN(encryptedkey[i]) == true){

			letterkeys.push(encryptedkey.splice(i,encryptedkey.length-i));
			i=encryptedkey.length;
			console.log("hii")
		}
	}	
	// letterkeys.splice(0,1)
	// letterkeys.push(encryptedkey)
	console.log(encryptedkey)
	console.log(letterkeys)
	for(var i = 0;i<letterkeys.length;i++){
		var currentkey = letterkeys[i][0];
		if(currentkey == "R"){
			console.log("!")
			R(parseInt(letterkeys[i][1]),encryptedmessage)
			console.log(encryptedmessage)

		}else if(currentkey = "S"){

		}else if(currentkey == "C"){
			C(parseInt(letterkeys[i][1]),encryptedmessage)
			console.log(encryptedmessage)

		}
	}
}


function R(increment,input){
	var output = "";
	var neww = input.split("");
	for(var i = 0;i<neww.length;i++){
		console.log("yout")
		for(var b = 0;b<stringrandom.length;b++){
			if(neww[i] === stringrandom[b]){
				console.log(neww[i],stringrandom[b])
				console.log("yas")
				increment = increment-increment-increment;
				while(increment > 25){
		          increment = increment-25
		        }
		        while(increment < -25){
		          increment = increment+25
		        }
		        console.log(increment + "poose")
		        if(i+increment > 25){ 
		          var difference = b+increment-25
		          output = ouput+stringrandom[difference]
		        }else if(b + increment <-0){

		          var difference = b + increment
		          output = output + stringrandom[25+difference]
		        }else{
		          output = output+stringrandom[b+increment]
		        }


			}
		}
	}
}
function S(increment,input)
function C(increment,input){
	var output = ""
	console.log(increment,input)
	var neww = input.split("");
	for(var i = 0;i<neww.length;i++){
		console.log("yout")
		for(var b = 0;b<one.length;b++){
			if(neww[i] === one[b]){
				console.log(neww[i],one[b])
				console.log("yas")
				increment = increment-increment-increment;
				while(increment > 25){
		          increment = increment-25
		        }
		        while(increment < -25){
		          increment = increment+25
		        }
		        console.log(increment + "poose")
		        if(i+increment > 25){ 
		          var difference = b+increment-25
		          output = ouput+two[difference]
		        }else if(b + increment <-0){

		          var difference = b + increment
		          output = output + two[25+difference]
		        }else{
		          output = output+two[b+increment]
		        }


			}
		}
	}
	console.log(output)
	console.log("hi")
	encryptedmessage = output;
}

  // if(increment == )
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
