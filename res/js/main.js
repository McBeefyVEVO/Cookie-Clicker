console.log("na co čumíš lmao");

const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");//enchanced-cookie-clicking
const upgrade2 = document.getElementById("upgrade2");//autoclicker
const upgrade3 = document.getElementById("upgrade3");//bakery


let cookies = 0;
let clickupgrade = 1;
let clickupgradeprice = 50;

let autoclickerincrease = 0;
let autoclickerprice = 150;

let = bakeryincrease = 0;
let = bakeryprice = 750;



cookie.onclick = () => {
    cookies = cookies + clickupgrade;
    counter.innerHTML = cookies;
}



upgrade.onclick = () => {
    if(cookies >= clickupgradeprice){
        cookies -= clickupgradeprice;
        clickupgradeprice += 50;
        upgrade.innerHTML = `Enchanced Cookie Clicking: ${clickupgradeprice}`;


        counter.innerHTML = cookies;
        clickupgrade++;

    }
}


upgrade2.onclick = () => {
    if(cookies >= autoclickerprice){
        cookies -= autoclickerprice;
        autoclickerprice += 150;
        upgrade2.innerHTML = `Auto Cookie Clicking: ${autoclickerprice}`;
        counter.innerHTML = cookies;
        
        if(autoclickerincrease == 0){
            setInterval(() => {
                cookies += autoclickerincrease;
                counter.innerHTML = cookies;
            }, 1000);
        }
        autoclickerincrease++;
    }
}

upgrade3.onclick = () => {
    if(cookies >= bakeryprice){
        cookies -= bakeryprice;
        bakeryprice += 750;
        upgrade3.innerHTML = `Special Cookie Bakery: ${bakeryprice}`;
        counter.innerHTML = cookies;

        if(bakeryincrease == 0){
            setInterval(() => {
                cookies += bakeryincrease;
                counter.innerHTML = cookies;
            }, 100);
        }
        bakeryincrease +=5;
    }
}





