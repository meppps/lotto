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
        for(i=1;i<11;i++) {
        currentNum = scrollFrom - i;
        console.log(currentNum);
        document.querySelector('h2.Display').innerText = `${currentNum}`;
          await timer(300); // then the created Promise can be awaited
        }
      }

    load();
}

    document.querySelector('.getNum').addEventListener('click',()=>{
        lotto();
});