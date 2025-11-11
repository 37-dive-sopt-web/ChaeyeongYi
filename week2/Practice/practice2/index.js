// index.js

// 0-1. 사용될 요소 선택(querySelector 사용)
const input = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-btn');
const todoList = document.querySelector('.todo-list');

// 0-2. 로컬 스토리지에서 가져오기 (["ㄱ","ㄴ"] 형태)
// 데이터 key값: "todos"
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// 1. 초기화 - 화면에 표시(새로고침할 때도 데이터가 안 사라지겠지요?)
// item 변수 명을 todo로 하니까 코드 이해하기가 좋다!!
todos.forEach((todo) => {
  const li = document.createElement('li'); // li 태그 엘리먼트 생성
  li.textContent = todo; // .textContent: 태그 안에 들어갈 텍스트
  todoList.appendChild(li); // ul태그 자식으로 추가
});

// 추가 버튼 클릭 이벤트: addEventListener로 구현
addBtn.addEventListener('click', () => {
  const value = input.value; // .value: input의 입력된 값 접근

  // 공백값 validation
  if (!value) return;

  // 리스트에 추가
  const li = document.createElement('li');
  li.textContent = value;
  todoList.appendChild(li);

  // 로컬스토리지에 저장
  todos.push(value);
  localStorage.setItem('todos', JSON.stringify(todos));

  // input 초기화
  input.value = '';
});