//console.log输出
// console.log("hello world");
// console.log(__dirname);
// console.log(__filename);

//setTimeout一段时间后执行{}内内容
// setTimeout(() => {

//     console.log("1s");
//     setTimeout(() => {

//         console.log("2s");
//         setTimeout(() => {
//             console.log("3s");
//         }, 1000);

//     }, 1000);

// }, 1000);

//setInterval每隔数秒执行{}内内容 
// setInterval(() => {
//     console.log("循环显示 按ctrl+c终止"); 
// }, 2000);

// var t = 0;
// setInterval(() => {
//     t += 2;
//     console.log(t + " 按ctrl+c终止"); 
// }, 2000);

// var time = 0;
// var timer = setInterval (function(){
//     time += 1;
//     console.log(time + " second have passed");
//     if (time > 5) {
//         clearInterval(timer);
//     }
// },1000);

//函数
// function sayHi() {
//     console.log("Hi");
// }
// sayHi();

// var sayBye = function () {
//     console.log("Bye");
// }
// sayBye();


//回调函数
// function callfunction(fun, name){
//     fun(name);
// }
// var sayBye = function(name) {
//     console.log(name + ' Bye');
// }
// callfunction(sayBye,'123')
