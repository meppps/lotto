// Lotto generator

// Generate random num
function randomNum(min,max) {
    return Math.round(Math.random() * (max - min) + min);
}

// 
var numsToRoll = new Array(20).fill(0);
var result = numsToRoll.map(x => x = randomNum(3,80));
console.log(result);

result.forEach((num)=>{
  console.log(num);
  var rand = document.createElement('h2');
  rand.innerText = `${num}`;
  rand.classList.add('Display');
  rand.classList.add('frozen');
  document.querySelector('.container').prepend(rand);
  // document.querySelector('.capsule').prepend(rand);

});

// Roll down 
function lotto(){

    var num = randomNum(3,50);
    var scrollFrom = num +  10;
    var currentNum;
    console.log(`Num is: ${num}`);
    console.log(`Counting down:`);

    const timer = ms => new Promise(res => setTimeout(res, ms))
    async function load () { // We need to wrap the loop into an async function for this to work
        // currentNum = 34;
        // document.querySelector('h2.Display').innerText = `${currentNum}`;
        // document.querySelector('h2.bottomNum').style = `transform: none`;

        var delay = 10;
        var transform = 30;
        for(i=1;i<21;i++) {


          console.log('yo')
          // currentNum = scrollFrom - i;
          // var newNum = document.createElement('h2');
          // newNum.innerText = `${randomNum(3,50)}`;
          // console.log(randomNum(3,50));
          // document.querySelector('.container').prepend(newNum);
          // newNum.classList.add('Display');
          // newNum.classList.add('topNum');
          
          // document.querySelector('h2.Display').style = `transform: translateY(${transform}%) scale(.8);`;
          document.querySelectorAll('h2.Display')[20-i].style = `transform: translateY(${transform}%) scale(.8);`;
          // document.querySelector('div.capsule').style=`transform: translateY(${transform}%) scale(.8);`;
          // newNum.classList = ['Display bottomNum'];
          // document.querySelector('h2.bottomNum').remove();
          // document.querySelector('h2.Display')
            await timer(delay); // then the created Promise can be awaited
            delay += 10;
            // transform += 10;
          
        }
      }
    // for(i=0;i<5;i++){
    //   load();
    // }
    load();
}

    document.querySelector('.getNum').addEventListener('click',()=>{
        lotto();
});


async function roll(transform, delay){
  


  var newNum = document.createElement('h2');
  newNum.classList.add('Display');
  newNum.innerText = `${randomNum(3,50)}`;
  document.querySelector('div.container').appendChild(newNum);
  

  for(i=0;i<10;i++){
    newNum.style.cssText = `transform: translateY(${transform}%) scale(.8);`;
    await timer(delay); // then the created Promise can be awaited
    delay += 5;
    transform += 10;
  }
}
// roll();

// document.querySelector('button').click()
