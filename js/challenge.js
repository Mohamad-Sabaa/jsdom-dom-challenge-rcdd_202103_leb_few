let counter = document.getElementById("counter");
let likes = document.getElementById("heart");
let increase = document.getElementById("plus");
let decrease = document.getElementById("minus");
let pause = document.getElementById("pause");
let ul = document.getElementsByClassName("likes");

// UPDATE THE COUNTER
let setTime = 0;

   function countTime () {
     setTime ++;
     counter.innerHTML = setTime;
   }

  setInterval(countTime, 1000);


// INCREASE and Decrease THE COUNTER WHEN PREES ON PLUS BUTTON



  increase.addEventListener('click', () => {
      counter.innerHTML = setTime ++ ;
  });

  decrease.addEventListener('click', () => {
      counter.innerHTML = setTime -- ;
  });


/// Like
  likes.addEventListener('click', function() {
    ul.insertAdjacentHTML('beforeend', `<li >❤️</li>` )
  })
