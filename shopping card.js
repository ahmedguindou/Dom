
var plus_btn = document.querySelectorAll(".plus-btn");
for (let i = 0; i < plus_btn.length; i++) {
    console.log(plus_btn[i]);
    plus_btn[i].addEventListener("click", function () {
      if (plus_btn[i].nextElementSibling.innerHTML < 10)
        plus_btn[i].nextElementSibling.innerHTML++;
        total()
    });
  }

  
var minus_btn= document.querySelectorAll(".minus-btn");
for (let i = 0; i < minus_btn.length; i++) {
    console.log(minus_btn[i]);
    minus_btn[i].addEventListener("click", function () {
      if (minus_btn[i].previousElementSibling.innerHTML > 1)
        minus_btn[i].previousElementSibling.innerHTML--;
    });
    total()
  }



  var likebtntostyle = document.querySelector(".like-btn");
      likebtntostyle.addEventListener("click", function one () {
      console.log(likebtntostyle.style.color);

      if (likebtntostyle.style.backgroundColor == "") {
     likebtntostyle.style.backgroundColor = "red";
     
     } else 
     likebtntostyle.style.backgroundColor = "";
     total()
     
});



var likebtntostyle1 = document.querySelector(".like-btn1");
likebtntostyle1.addEventListener("click", function two () {
console.log(likebtntostyle1.style.color);

if (likebtntostyle1.style.backgroundColor == "") {
likebtntostyle1.style.backgroundColor = "red";

} else 
likebtntostyle1.style.backgroundColor = "";
total()

});

function myFunctionn() {
    var myobjj = document.getElementById("del");
    myobjj.remove();
    total()
   
  }


  function myFunction() {
    var myobj = document.getElementById("del1");
    myobj.remove();
    total()
  }


function total(){
  var price=document.querySelectorAll('.pru')
  var quantity=document.querySelectorAll('.qt')
  var total=document.querySelector('#tt')
  var res=0
  console.log(price)
  console.log(quantity)
  for (let i=0;i<price.length;i++){
    res=res+Number(price[i].innerHTML)*Number(quantity[i].innerHTML)
  }
  total.innerHTML=res
}






