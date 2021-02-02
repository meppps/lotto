// Lotto generator

// Generate random num
function randomNum(min,max) {
    return Math.round(Math.random() * (max - min) + min);
}


// Roll down 
function lotto(){
    var num = randomNum(3,50);
    var scrollFrom = num +  10;
    var currentNum;
    console.log(`Num is: ${num}`);
    console.log(`Counting down:`);

    const timer = ms => new Promise(res => setTimeout(res, ms))
    async function load () { // We need to wrap the loop into an async function for this to work

        var delay = 100;
        var transform = 100;
        for(i=1;i<11;i++) {
        currentNum = scrollFrom - i;
        console.log(currentNum);
        document.querySelector('h2.Display').innerText = `${currentNum}`;
        document.querySelector('h2.topNum').style.cssText = `transform: translateY(${transform}%) scale(.8);`;
        document.querySelector('h2.bottomNum').style.cssText = `transform: translateY(${transform}%) scale(.8);`;
          await timer(delay); // then the created Promise can be awaited
          delay += 70;
          transform += 10;
        }
      }

    load();
}

    document.querySelector('.getNum').addEventListener('click',()=>{
        lotto();
});


