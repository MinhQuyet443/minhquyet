function checkAge(age) {
  if (age >= 18) {
    return "Người lớn";
  } else {
    return "Vị thành niên";
  }
}

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Chẵn";
  } else {
    return "Lẻ";
  }
}

function compareNumbers(num1, num2) {
  if (num1 > num2) {
    return "Số thứ nhất lớn hơn";
  } else if (num1 < num2) {
    return "Số thứ hai lớn hơn";
  } else {
    return "Hai số bằng nhau";
  }
}

function checkInteger(number) {
  if (Number.isInteger(number)) {
    return "Số nguyên";
  } else {
    return "Không phải số nguyên";
  }
}

function convertNumberToMonth(month) {
  switch (month) {
    case 1:
      return "Tháng một";
    case 2:
      return "Tháng hai";
    case 3:
      return "Tháng ba";
    case 4:
      return "Tháng tư";
    case 5:
      return "Tháng năm";
    case 6:
      return "Tháng sáu";
    case 7:
      return "Tháng bảy";
    case 8:
      return "Tháng tám";
    case 9:
      return "Tháng chín";
    case 10:
      return "Tháng mười";
    case 11:
      return "Tháng mười một";
    case 12:
      return "Tháng mười hai";
    default:
      return "Tháng không hợp lệ";
  }
}

function calculateShipping(distance) {
  if (distance <= 5) {
    return 7000;
  } else {
    let extraDistance = distance - 5;
    return 7000 + extraDistance * 2000;
  }
}

function gradeExam(score) {
  if (score >= 90) {
    return "Xuất sắc";
  } else if (score >= 80) {
    return "Giỏi";
  } else if (score >= 70) {
    return "Khá";
  } else if (score >= 60) {
    return "Trung bình";
  } else {
    return "Yếu";
  }
}

function displayResults() {
  let age = parseInt(document.getElementById("age").value);
  let number = parseInt(document.getElementById("number").value);
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let integerCheck = parseFloat(document.getElementById("integerCheck").value);
  let month = parseInt(document.getElementById("month").value);
  let distance = parseInt(document.getElementById("distance").value);
  let score = parseInt(document.getElementById("score").value);

  document.getElementById("ageResult").textContent = checkAge(age);
  document.getElementById("evenOddResult").textContent = checkEvenOdd(number);
  document.getElementById("comparisonResult").textContent = compareNumbers(
    num1,
    num2
  );
  document.getElementById("integerResult").textContent =
    checkInteger(integerCheck);
  document.getElementById("monthResult").textContent =
    convertNumberToMonth(month);
  document.getElementById("shippingResult").textContent =
    calculateShipping(distance) + "đ";
  document.getElementById("gradeResult").textContent = gradeExam(score);
}
