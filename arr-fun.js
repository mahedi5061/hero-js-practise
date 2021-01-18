var arr=[10,20,30,40,50,60,70];

function func(numbers){
for(var i=0;i<numbers.length;i++){
    var larger=numbers[0];
     
    if(numbers[i]> larger){
        larger=numbers[i];
    }
}

     return larger; 

}

 var result=func([40,60,90]);
console.log(result);


 
 