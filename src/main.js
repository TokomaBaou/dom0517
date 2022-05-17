const box1 = document.getElementById("box1");

box1.style.color = "red";
// test.style.color = "blue";

box1.classList.add("mainBox");

//DOMを更新する操作　setAttribute
document.querySelector("#box1").setAttribute("id", "test");
//DOM操作の削除
// document.querySelector("#test").remove();
//htmlの代入
document.querySelector("#test").innerHTML = "<p>代入</p>";

let newItem = document.createElement("div");
newItem.innerHTML = "Create Element";
document.body.append(newItem);

let newItem2 = document.createElement("div");
newItem2.innerHTML = "append Child";
document.querySelector("#test").appendChild(newItem2);

window.onload = () => {
  console.log("hello");
};

window.addEventListener("load", () => {
  console.log("event1!!");
});
