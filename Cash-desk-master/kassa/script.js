"use strict"
// verilenler 
const
    menu1 = 2,
    menuName1="Doner toyuq",
    menu2 = 3,
    menuName2="Doner mal",
    menu3 = 4,
    menuName3="Doner limuzin",
    menu4 = 2.5,
    menuName4="Doner lavas",
    menu5 = 0.5,
    menuName5="Ayran",
    menu6 = 1,
    menuName6="Cola",
    menu7 = 1,
    menuName7="Fanta",
    menu8 = 1,
    menuName8="Sprite",
    menu9 = 1.5,
    menuName9="Meyve suyu";
let sebet = [];
let sebetUmumi=0;

//onclick

function addCost1(menuName,cost) {
    sebet.push(menu1);
    sebetUmumi=sebetUmumi+cost;
    document.querySelector("#list").innerHTML +='<div class="col-12 siyahi">'+menuName+'<span>'+cost+'</span></div>';
    document.querySelector("#cost").innerHTML= sebetUmumi+"AZN"

}


// reset
    document.querySelector("#reset").addEventListener("click",function(){
            sebet.length=0;
            sebetUmumi=0;
            document.querySelector("#list").innerHTML=' ';
            document.querySelector("#cost").innerHTML= 0 +"AZN"
            document.querySelector("#qaliq").value = "";
            document.querySelector("#Musteri").value="";

    })
    document.querySelector("#backstep").addEventListener("click",function(){
        sebet.pop();
        console.log(sebet)
    })


    // hesab
    document.querySelector("#clac").addEventListener("click",function(){
        document.querySelector("#qaliq").value = document.querySelector("#Musteri").value-sebetUmumi;
        if(document.querySelector("#qaliq").value<0){
            alert("Odenis Duzgun Edilmeyib.Elave Odenmelidir:"+" " +document.querySelector("#qaliq").value*-1);
        }
    })
