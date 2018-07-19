// function calculate(){
//
// }



var jud=0;
var res=0;
// var num1=0;
// var num2=0;
var ary=new Array();

function getnum(item){
  // console.log(item);
  if(jud==0){
    ac()
  }
  jud++;
  if(jud<18){
    var con=document.getElementById("con");
    con.innerHTML+=item.innerHTML;
  }
  // num1=parseFloat(item.innerHTML);
  ary.push(item.innerHTML);
  // for(var i=0;i<ary.length;i++){
  //   console.log(ary[i]);
  // }

}

function ac(){
  jud=0;
  var con=document.getElementById("con");
  con.innerHTML="";
  ary.splice(0,ary.length);
}

function add(item){
  // console.log(item);
  // res+=num1;
  ary.push("+");
  // console.log(num1);
  // console.log(res);
  var con=document.getElementById("con");
  con.innerHTML="";
}

function del(item){
  // console.log(item);
  // res+=num1;
  ary.push("-");
  // console.log(num1);
  // console.log(res);
  var con=document.getElementById("con");
  con.innerHTML="";
}

function mul(item){
  // console.log(item);
  // res+=num1;
  ary.push("*");
  // console.log(num1);
  // console.log(res);
  var con=document.getElementById("con");
  con.innerHTML="";
}

function divi(item){
  // console.log(item);
  // res+=num1;
  ary.push("/");
  // console.log(num1);
  // console.log(res);
  var con=document.getElementById("con");
  con.innerHTML="";
}

function eq(item){
  var eq=document.getElementById("con");
  var index;
  var formula=0;
  for(var i=0;i<ary.length;i++){
    formula+=ary[i];
  }
  // console.log(res+"###");
  index=formula.lastIndexOf("+");
  if(index>-1){
    res=parseFloat(formula.substring(1,index))+parseFloat(formula.substring(index+1,ary.length+1));
    // console.log(formula);
    // console.log(index);
    // console.log(formula.substring(1,index));
    // console.log(parseFloat(formula.substring(1,index)));
    // console.log(ary.length);
  }
  index=formula.lastIndexOf("-");
  if(index>-1){
    res=parseFloat(formula.substring(1,index))-parseFloat(formula.substring(index+1,ary.length+1));
  }
  index=formula.lastIndexOf("*");
  if(index>-1){
    res=parseFloat(formula.substring(1,index))*parseFloat(formula.substring(index+1,ary.length+1));
  }
  index=formula.lastIndexOf("/");
  if(index>-1){
    res=parseFloat(formula.substring(1,index))/parseFloat(formula.substring(index+1,ary.length+1));
  }
  res=res.toFixed(0);
  eq.innerHTML=res;
  jud=0;
}
