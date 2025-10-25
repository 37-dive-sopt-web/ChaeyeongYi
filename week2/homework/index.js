import { memberMockData } from "./memberMockData.js";
const STORAGE_KEY = "members";
const MEMEBER_ID_KEY = "memberId";

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

const deleteBtn = document.querySelector(".delete-btn");
const addBtn = document.querySelector(".add-btn");
// -----------------------------------------------------------------

// localStorage 데이터 get
let members = JSON.parse(localStorage.getItem(STORAGE_KEY));
let newId = localStorage.getItem(MEMEBER_ID_KEY);

// TODO: table 데이터 업데이트
const updateTable = (data = members) => {
  memberList.innerHTML = "";

  data.forEach((member) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td><input type="checkbox" member-id="${member.id}"/></td>
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
};

// 0. 초기화
if (!members || members.length === 0) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memberMockData));
  members = [...memberMockData];
  localStorage.setItem(MEMEBER_ID_KEY, members.length + 1);
  newId = members.length + 1;
}
updateTable();

// resetFilter: 검색 필터 input 초기화 함수
const resetFilter = () => {
  nameInput.value = "";
  engNameInput.value = "";
  githubInput.value = "";
  geumjandiInput.value = "";
  ageInput.value = "";
  genderSelect.selectedIndex = 0;
  roleSelect.selectedIndex = 0;
  return;
};
resetBtn.addEventListener("click", resetFilter);

// implementFilter: 검색 필터 적용 함수
function implementFilter() {
  // 1. 필터 값 가져오기
  const filters = {
    name: nameInput.value.trim(),
    englishName: engNameInput.value.trim(),
    github: githubInput.value.trim(),
    gender:
      genderSelect.value.trim() === "entire" ? "" : genderSelect.value.trim(),
    role: roleSelect.value.trim() === "entire" ? "" : roleSelect.value.trim(),
    codeReviewGroup: geumjandiInput.value.trim(),
    age: ageInput.value.trim(),
  };

  // 2. 공백이 아닌 항목만 따로 저장
  const finalFilter = {};
  for (const key in filters) {
    if (filters[key] !== "") {
      finalFilter[key] = filters[key].toLowerCase();
    }
  }

  // 3. 필터링 적용
  const applyFiltering = (mem, filter) => {
    return Object.keys(filter).every((key) => {
      const filtered = String(filter[key]);
      const target =
        mem[key] !== undefined && mem[key] !== null
          ? String(mem[key]).toLowerCase()
          : "";
      return target.includes(filtered);
    });
  };

  const filteredData = members.filter((member) => {
    return applyFiltering(member, finalFilter);
  });

  // 4. 업데이트
  updateTable(filteredData);
  return;
}
implementBtn.addEventListener("click", implementFilter);

// TODO: 체크 박스 선택 삭제
// TODO: 체크 박스 전체 삭제
// TODO: 데이터 추가
// localStorage.setItem(MEMEBER_ID_KEY, newId);
// TODO: 모달 관리
