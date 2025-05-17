document.getElementById("pickButton").addEventListener("click", function () {
  const total = 25;
  const pickCount = 4;
  const numbers = [];

  while (numbers.length < pickCount) {
    const rand = Math.floor(Math.random() * total) + 1;
    if (!numbers.includes(rand)) {
      numbers.push(rand);
    }
  }

  numbers.sort((a, b) => a - b);
  const resultText = `청소당번: ${numbers.join(", ")}번`;

  // SweetAlert2로 결과 표시
  Swal.fire({
    title: "🎉 오늘의 청소당번!",
    html: `<strong>${numbers.join("번, ")}번</strong>`,
    icon: "success",
    confirmButtonText: "확인",
    confirmButtonColor: "#4CAF50"
  });

  // 화면에도 결과 표시
  document.getElementById("result").textContent = resultText;
});
