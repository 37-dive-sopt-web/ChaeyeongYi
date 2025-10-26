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
const checkAllBtn = document.querySelector(".check-all");
const deleteBtn = document.querySelector(".delete-btn");
const openAddModalBtn = document.querySelector(".open-modal-btn");

// 모달 요소
const modal = document.querySelector(".modal");
const modalNameInput = document.querySelector(".modal-name-input");
const modalEngNameInput = document.querySelector(".modal-eng-name-input");
const modalGithubInput = document.querySelector(".modal-github-input");
const modalGenderSelect = document.querySelector(".modal-gender-select");
const modalRoleSelect = document.querySelector(".modal-role-select");
const modalGeumjandiInput = document.querySelector(".modal-geumjandi-input");
const modalAgeInput = document.querySelector(".modal-age-input");
const modalCloseBtn = document.querySelector(".close-btn");
const addRowBtn = document.querySelector(".add-row-btn");

// localStorage 데이터 get
let members = JSON.parse(localStorage.getItem(STORAGE_KEY));
let newId = localStorage.getItem(MEMEBER_ID_KEY);
// let isModalOpen =
// TODO: table 데이터 업데이트
const updateTable = (data = members) => {
  memberList.innerHTML = "";

  data.forEach((member) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td><input type="checkbox" id="${member.id}"/></td>
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
const implementFilter = () => {
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
};
implementBtn.addEventListener("click", implementFilter);

// deleteRow: 체크 박스 선택 삭제
const deleteRow = () => {
  const checkedBoxes = document.querySelectorAll(
    "td > input[type=checkbox]:checked"
  );
  const checkedIdList = [...checkedBoxes].map((item) => item.id);

  const deletedData = members.filter((item) => {
    return !checkedIdList.includes(item.id.toString());
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(deletedData));
  updateTable(deletedData);
  return;
};
deleteBtn.addEventListener("click", deleteRow);

// checkAllRow: 체크 박스 전체 선택
const checkAllRow = () => {
  const allCheckedBoxes = document.querySelectorAll(
    "td > input[type=checkbox]"
  );
  allCheckedBoxes.forEach((it) => {
    it.checked = checkAllBtn.checked;
  });
};
checkAllBtn.addEventListener("change", checkAllRow);

// TODO: 모달 오픈 이벤트
openAddModalBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

// TODO: 모달 닫기 이벤트
const closeModal = () => {
  modal.classList.remove("open");
};
modalCloseBtn.addEventListener("click", closeModal);
// addRow: 데이터 추가
const addRow = () => {
  const newData = {
    id: newId,
    name: modalNameInput.value.trim(),
    englishName: modalEngNameInput.value.trim(),
    github: modalGithubInput.value.trim(),
    gender: modalGenderSelect.value.trim(),
    role: modalRoleSelect.value.trim(),
    codeReviewGroup: modalGeumjandiInput.value.trim(),
    age: modalAgeInput.value.trim(),
  };

  if (Object.values(newData).includes("")) {
    alert("값을 모두 입력해주세요!");
    console.log("newData:", newData);
  } else {
    console.log("newData:", newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...members, newData]));
    localStorage.setItem(MEMEBER_ID_KEY, ++newId);
    updateTable(members);
    closeModal();
  }
};
addRowBtn.addEventListener("click", addRow);
