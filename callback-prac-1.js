



function go(firstNum, secondNum, callback) {

  if (firstNum > secondNum) {

    callback(firstNum);

  }

  if (firstNum < secondNum) {

    callback(secondNum);

  }

  if (firstNum === secondNum) {

    callback(firstNum);

  }

}

function big(num) {

  console.log(num + "가 더 큽니다.");

}

function same(num) {

  console.log(num + "은 같습니다.");

}





go(3, 2, big);
go(2, 2, same);

// 두 정수를 받아서 더 큰 거 출력