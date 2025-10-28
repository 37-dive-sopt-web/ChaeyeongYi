import { memberMockData } from "./memberMockData.js";
const STORAGE_KEY = "members";
const MEMEBER_ID_KEY = "memberId";

const memberTable = document.querySelector(".member-list tbody");

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
const modalBackdrop = document.querySelector(".modal");

let newId = localStorage.getItem(MEMEBER_ID_KEY);
let members = initializeTable();

function initializeTable() {
  let memberList = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!memberList) {
    memberList = [...memberMockData];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memberList));
    localStorage.setItem(MEMEBER_ID_KEY, memberList.length + 1);
    newId = memberList.length + 1;
  }
  updateTable(memberList);
  return memberList;
}

function updateTable(data) {
  memberTable.innerHTML = "";

  data.forEach((member) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td><input type="checkbox" id="${member.id}"/></td>
    <td>${member.name}</td>
    <td>${member.englishName}</td>
    <td>
      <a
        id="github"
        href="https://github.com/${member.github}"
        target="_blank"
        rel="noopenner noreferrer"
      >
        ${member.github}
      </a>
    </td>
    <td>${member.gender === "female" ? "여성" : "남성"}</td>
    <td>${member.role}</td>
    <td>${member.codeReviewGroup}</td>
    <td>${member.age}</td>
  `;
    memberTable.appendChild(tr);
  });
}

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
  const filtersWithoutBlank = {};
  for (const key in filters) {
    if (filters[key] !== "") {
      filtersWithoutBlank[key] = filters[key].toLowerCase();
    }
  }

  // 3. 필터링 적용
  const finalFilter = (mem, filter) => {
    return Object.keys(filter).every((key) => {
      const filtered = String(filter[key]);
      const target =
        mem[key] !== undefined && mem[key] !== null
          ? String(mem[key]).toLowerCase()
          : "";
      return target === filtered;
    });
  };

  const filteredData = members.filter((member) => {
    return finalFilter(member, filtersWithoutBlank);
  });

  console.log("filter:", filteredData);
  // 4. 업데이트
  updateTable(filteredData);
  return;
};

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
  members = deletedData;
  checkAllBtn.checked = false;
  return;
};

const checkAllRow = () => {
  const allCheckedBoxes = document.querySelectorAll(
    "td > input[type=checkbox]"
  );
  allCheckedBoxes.forEach((it) => {
    it.checked = checkAllBtn.checked;
  });
};

// modal에 사용되는 함수들
const openModal = () => {
  modal.classList.add("open");
};

const closeModal = (event) => {
  if (event && event.target !== modalBackdrop) {
    return;
  }

  modal.classList.remove("open");
};

const addRow = () => {
  const newData = {
    id: Number(newId),
    name: modalNameInput.value.trim(),
    englishName: modalEngNameInput.value.trim(),
    github: modalGithubInput.value.trim(),
    gender: modalGenderSelect.value.trim(),
    role: modalRoleSelect.value.trim(),
    codeReviewGroup: Number(modalGeumjandiInput.value),
    age: Number(modalAgeInput.value),
  };

  if (isNaN(newData.codeReviewGroup) || isNaN(newData.age)) {
    alert("코드리뷰 조와 나이는 숫자만 입력해주세요!");
    return;
  }
  if (Object.values(newData).includes("")) {
    alert("값을 모두 입력해주세요!");
    return;
  }
  members.push(newData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(members));
  localStorage.setItem(MEMEBER_ID_KEY, ++newId);

  updateTable(members);
  closeModal();

  // input 컴포넌트 리셋
  modalNameInput.value = "";
  modalEngNameInput.value = "";
  modalGithubInput.value = "";
  modalGenderSelect.selectedIndex = 0;
  modalRoleSelect.selectedIndex = 0;
  modalGeumjandiInput.value = "";
  modalAgeInput.value = "";
};

// 이벤트 리스너 함수 연결
implementBtn.addEventListener("click", implementFilter);
resetBtn.addEventListener("click", resetFilter);
deleteBtn.addEventListener("click", deleteRow);
checkAllBtn.addEventListener("change", checkAllRow);
modalCloseBtn.addEventListener("click", closeModal);
addRowBtn.addEventListener("click", addRow);
openAddModalBtn.addEventListener("click", openModal);
modalBackdrop.addEventListener("click", closeModal);
