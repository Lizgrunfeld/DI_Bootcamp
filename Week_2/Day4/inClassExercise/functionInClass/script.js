// Exercise Function
// You are the manager of the chocolate factory, in order to make your clients happy you will send them a gift depending on their quantity of chocolate box they ordered.
// Create a function named checkQuantityOrder, that takes one parameter, the quantity the user ordered.

function checkQuantityOrder(quantity){
    console.log(` ${quantity} chocolate boxes ordered`);
}
checkQuantityOrder(10)
// If the client ordered more between 5 and 10 boxes (included) console.log "Dear client, you won a bouquet of flowers"

function checkQuantityOrder1(quantity){
   let amount;
   if(quantity > 5 && quantity < 10){
    console.log(`Dear client, you won a bouquet of flowers`);
   }
   else{
    console.log(` ${quantity} chocolate boxes ordered`);}
}
checkQuantityOrder1(9)
// If the client ordered more between 10 and 20 boxes (included) console.log "Dear client, you won a bottle of wine"

function checkQuantityOrder2(quantity){
    let amount;
    if(quantity > 5 && quantity < 10){
     console.log(`Dear client, you won a bouquet of flowers`);
    }
    else if(quantity > 11 & quantity <= 20){
     console.log(`Dear client, you won a bottle of wine`);
    }
    else{
     console.log(`${quantity} chocolate boxes ordered`);}
 }
 checkQuantityOrder2(14)

// If the client ordered more than 20 boxes (included) console.log "Dear client, you won a trip to Paris"
function checkQuantityOrder3(quantity){
    let amount;
    if(quantity > 5 && quantity < 10){
     console.log(`Dear client, you won a bouquet of flowers`);
    }
    else if(quantity > 11 & quantity < 20){
     console.log(`Dear client, you won a bottle of wine`);
    }
    else if(quantity >= 20){
        console.log(`Dear client, you won a trip to Paris`);}
    
    else{
     console.log(`${quantity} chocolate boxes ordered`);}
    }
 
 checkQuantityOrder3(24)

// Call the function a few times,
// checkQuantityOrder(8);
// checkQuantityOrder(15);
// checkQuantityOrder(30);

// BONUS : add a parameter to the function, the name of the client. If you don't know the name of the client, call him/her "client"
// If the client ordered more between 5 and 10 boxes (included) console.log "Dear <name_client>, you won a bouquet of flowers"
// If the client ordered more between 10 and 20 boxes (included) console.log "Dear <name_client>, you won a bottle of wine"
// If the client ordered more than 20 boxes (included) console.log "Dear <name_client>, you won a trip to Paris"
// Call the function a few times,
// checkQuantityOrder(8, "John");
// checkQuantityOrder(15);
// checkQuantityOrder(30, "David");

function checkQuantityOrderBonus(quantity,name="client"){
    let amount;
    if(quantity > 5 && quantity < 10){
     console.log(`Dear ${name}, you won a bouquet of flowers`);
    }
    else if(quantity > 11 & quantity <= 20){
     console.log(`Dear ${name}, you won a bottle of wine`);
    }
    else if(quantity > 20){
        console.log(`Dear ${name}, you won a trip to Paris`);}
    
    else{
     console.log(`${quantity} chocolate boxes ordered`);}
    }
 
 checkQuantityOrderBonus(8,"John");
 checkQuantityOrderBonus(15);
 checkQuantityOrderBonus(30,"David");


//  //Exercise 2 : ONE FUNCTION ONE ACTION
// Modify the function checkQuantityOrder, so that instead of console logging "Dear client, you won a ..." it will return the gift iself(for example the flowers, or the bouquet).
// 2. Create a function sendGift, it retriEves the result of the function checkQuantityOrder and console log "Dear client, you won a ..."

function checkQuantityEx2(quantity){
    if(quantity > 5 && quantity < 10){
        return "flowers";
    }
    else if(quantity > 11 & quantity <= 20){
     return "wine";
    }
    else if(quantity > 20){
        return "trip to Paris";}    
    }

 
    checkQuantityEx2(8,"John");
    checkQuantityEx2(15);
    checkQuantityEx2(30,"David");

function sendGift(){
    const gift = checkQuantityEx2(19) // gift = trip to paris
    console.log(`Dear clients you won a ${gift}`)
}

sendGift();