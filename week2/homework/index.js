import { memberMockData } from "./memberMockData.js";
const STORAGE_KEY = "members";
// 요소 선택
const memberList = document.querySelector(".member-list tbody");

const nameInput = document.querySelector(".name-input");
const engNameInput = document.querySelector(".eng-name-input");
const githubInput = document.querySelector(".github-input");
const genderSelect = document.querySelector(".gender-select");
const roleSelect = document.querySelector(".role-select");
const geumjandiInput = document.querySelector(".geumjandi-input");
const ageInput = document.querySelector(".age-input");
const implementBtn = document.querySelector(".implement-btn");
const resetBtn = document.querySelector(".reset-btn");
// -----------------------------------------------------------------

// 1. 초기화: localStorage 데이터 get
let members = JSON.parse(localStorage.getItem(STORAGE_KEY));

// TODO: localStorage 데이터 없을 경우, memeberMockData로 초기화 진행
if (!members || members.length === 0) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memberMockData));
  members = [...memberMockData];
}

// 테이블에 추가
members.forEach((member) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input type="checkbox" /></td>
    <td>${member.name}</td>
    <td>${member.englishName}</td>
    <td>
      <a id="github" href="https://github.com/${member.github}">${
    member.github
  }</a>
    </td>
    <td>${member.gender === "female" ? "여성" : "남성"}</td>
    <td>${member.role}</td>
    <td>${member.codeReviewGroup}</td>
    <td>${member.age}</td>
  `;

  memberList.appendChild(tr);
});

// TODO: 검색 필터 input 초기화
resetBtn.addEventListener("click", resetFilter);

function resetFilter() {
  nameInput.value = "";
  engNameInput.value = "";
  githubInput.value = "";
  geumjandiInput.value = "";
  ageInput.value = "";
  genderSelect.selectedIndex = 0;
  roleSelect.selectedIndex = 0;
}

// TODO: 검색 필터 적용 핸들링
implementBtn.addEventListener("click", implementFilter);

function implementFilter() {
  const filters = {
    name: nameInput.value.trim(),
    englishName: engNameInput.value.trim(),
    github: githubInput.value.trim(),
    gender: genderSelect.value,
    role: roleSelect.value,
    codeReviewGroup: geumjandiInput.value.trim(),
    age: ageInput.value.trim(),
  };

  console.log("Filter values:", filters);

  return filters;
}
// TODO: 체크 박스 선택 삭제
// TODO: 체크 박스 전체 삭제
// TODO: 데이터 추가
// TODO: 모달 관리
