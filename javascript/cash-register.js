//===========================================================
//
//   download and run | node cash-register.js |
//
//===========================================================

let magazine = ["phone", "tv", "console"]
let cart = []
//
//  declaring magazine contents and cart
//===========================================================


function AddItem(item, destination)
{
    switch(item){
        case "phone":
            destination.push("Phone")
            console.log("Phone added to cart")
            break;
        case "tv":
            destination.push("TV")
            console.log("TV added to cart")
            break;
        case "console":
            destination.push("Console")
            console.log("Console added to cart")
        default:
            console.log(`Sorry, we don't sell ${item}`)
    }
}
//
//  function for adding item into destination if it is present in the magazine
//===========================================================

function CalculateCost(source){
    let cost = 0;
    cart.forEach(element => {
        if(element === "Phone"){
            cost += 300;
        }
        else if(element === "TV"){
            cost += 220
        }
        else if(element === "Console"){
            cost += 150
        }
    });
    return cost;
}
//
//  calculating cost based on source contents
//===========================================================

AddItem(magazine[0], cart);
AddItem(magazine[0], cart);
//
//  adding items into cart
//===========================================================


cost = CalculateCost(cart)
if(cost > 400)
{
    let discount = cost * 0.1;
    cost -= discount;
}
//
//  declaring magazine cost value by calculating cart contents 
//===========================================================


function Pay(cost, budget){
    if(cost < budget){
        console.log(`Paid for items in cart for total of ${cost}$, there is ${budget - cost}$ remaining in the wallet`);
    }
    else if(cost == budget)
    {
        console.log(`Paid for items in cart for total of ${cost}$, there is no money remaining in the wallet`);
    }
    else if(cost > budget){
        console.log(`Sorry, there is no enough money to pay for items in cart`);
    }
}

Pay(cost, 600);
//
//  a function to pay for items in cart, declaring budget
//===========================================================