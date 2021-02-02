// Lotto generator

// Generate random nums
function randomNum(min,max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Prep 
function prep(){
  // Clear div, fill array with random nums
  document.querySelector('.container').innerHTML = '';
  var numsToRoll = new Array(25).fill(0);
  var result = numsToRoll.map(x => x = randomNum(3,80));
  console.log(result);
  
  result.forEach((num)=>{
    console.log(num);
    var rand = document.createElement('h2');
    rand.innerText = `${num}`;
    rand.classList.add('Display');
    rand.classList.add('frozen');
    document.querySelector('.container').prepend(rand);
  
  });
}



// Roll down 
function lotto(){

    var num = randomNum(1,99);
    console.log(`Num is: ${num}`);
    console.log(`Counting down:`);

    // Set timer for delay
    const timer = ms => new Promise(res => setTimeout(res, ms));

    // Loop thru, nums gradually slow
    async function load () { 
        var delay = 10;
        var transform = 30;
        for(i=1;i<26;i++) {
          document.querySelectorAll('h2.Display')[25-i].style = `transform: translateY(${transform}%) scale(.8);`;
          await timer(delay); // then the created Promise can be awaited
          delay += 10;
        }
      }

    load();
}

// Call onclick
document.querySelector('.getNum').addEventListener('click',()=>{
      prep();
      lotto();
});


prep();