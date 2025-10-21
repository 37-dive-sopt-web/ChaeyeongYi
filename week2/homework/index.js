import { members } from "./members.js";

// localStorage 데이터 get
if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

const p = document.createElement("p");
p.textContent = localStorage.getItem("membersData");

document.body.appendChild(p);