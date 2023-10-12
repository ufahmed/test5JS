function change_name(){
 var y=document.querySelector(" #row h1");
 y.innerText="Ahmed Sellami";
}


function remove(){
 var x=document.querySelector(".col-2 img");
 var n=document.querySelector(".name1");
 x.remove();
 n.remove();


}
count=2;
function request(){
 var t=document.querySelector(".second");
 count--;
 t.innerText=count;
}
count=500;
function connection(){
 var b=document.querySelector(".phrase1");
 count++;
 b.innerText=count;
}

