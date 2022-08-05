var shoppingCard ={
    books: 3,
    sunglass:1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoess: 5
}

// const keys= Object.keys(shoppingCard);
// console.log(keys);

// const values =Object.values(shoppingCard);
// console.log(values);



/// kotin vartion
// var keys =[ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoess'];
for (var i=0; i < keys.length; i++){
    // console.log(keys[i]);
    var propertyName =keys[i];
    var propertyValues =shoppingCard[propertyName];
    // console.log(propertyName, propertyValues);
}

// sohoj vaertion 
// for in loop
for(var propertyName in shoppingCard){
    var value =shoppingCard[propertyName];
    // console.log(propertyName, value);
}


//importtant buje koro
for(var i=0; i < keys.length; i++){
    // console.log(keys[i])
    var propertyName = keys[i];
    var propertyValues= shoppingCard[propertyName]
    // console.log(propertyName,propertyValues)
}

// function movie(){
//     return "Din-The day";
  
//   }
//   console.log(movie(200));
