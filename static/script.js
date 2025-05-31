// 샘플 데이터: 학번과 이름에 따른 계정 정보
const accountData = [
  { id: "202301", name: "김민수", email: "202301@school.edu", password: "pw1234" },
  { id: "202302", name: "이서연", email: "202302@school.edu", password: "pw2345" },
  { id: "202303", name: "박지훈", email: "202303@school.edu", password: "pw3456" },
  { id: "202304", name: "송시연", email: "202304@school.edu", password: "pw4567" }
];

document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // 폼 제출 막기

  // 입력 값 가져오기
  const studentId = document.getElementById('student-id').value.trim();
  const studentName = document.getElementById('student-name').value.trim();

  // 계정 검색
  const account = accountData.find(acc => acc.id === studentId && acc.name === studentName);

  const resultBox = document.getElementById('result');
  const emailSpan = document.getElementById('email');
  const passwordSpan = document.getElementById('password');

  if (account) {
    // 계정 정보 출력
    emailSpan.textContent = account.email;
    passwordSpan.textContent = account.password;
    resultBox.classList.remove('hidden');
  } else {
    // 계정 없음 처리
    emailSpan.textContent = "찾을 수 없습니다.";
    passwordSpan.textContent = "";
    resultBox.classList.remove('hidden');
  }
});
