const Operate = (num1: number, num2: number, operator: string) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '÷':
      return num1 / num2;
    case 'x':
      return num1 * num2;
    case '^':
      return Math.pow(num1, num2);
    case '√':
      return Math.pow(num2, 1 / num1);
  }
};

const generateArray = (Originalinp: string) => {
  const inp = Originalinp.replace(/ /g, '').replace('*', 'x').replace('/', '÷');
  let resArr = [];
  let num = '';
  for (let i = 0; i < inp.length; i++) {
    if (inp[i] === '0') {
      num += inp[i];
    } else if (parseInt(inp[i])) {
      num += inp[i];
    } else {
      resArr.push(num);
      resArr.push(inp[i]);

      num = '';
    }
  }
  if (parseInt(num)) {
    resArr.push(num);
  }

  resArr = resArr.map((elem) => {
    if (parseInt(elem)) {
      return parseInt(elem);
    } else {
      return elem;
    }
  });
  return resArr;
};

const YardAlgotithm = (yard: any[]) => {
  const stack: any[] = [];
  const quee = [];

  yard.map((element) => {
    const stackLast = stack[stack.length - 1];

    const isStackPlusOrMinus = stackLast === '+' || stackLast === '-';

    const isStackMultiplyOrDivide = stackLast === 'x' || stackLast === '÷';

    const isStackPowerOrSquare = stackLast === '^' || stackLast === '√';

    const isElPlusOrMinus = element === '+' || element === '-';
    const isElMultiplyOrDivide = element === 'x' || element === '÷';
    const isElPowerOrSquare = element === '^' || element === '√';
    if (typeof element === 'number') {
      quee.push(element);
      return element;
    }
    if (isElPowerOrSquare) {
      if (!stack.length) {
        stack.push(element);
        return element;
      }
      if (
        isStackPlusOrMinus ||
        isStackMultiplyOrDivide ||
        isStackPowerOrSquare
      ) {
        quee.push(stackLast);
        stack.pop();
        stack.push(element);
      }
    }
    if (isElMultiplyOrDivide) {
      if (!stack.length) {
        stack.push(element);
        return element;
      }

      if (isStackMultiplyOrDivide || isStackPowerOrSquare) {
        quee.push(stackLast);
        stack.pop();
        stack.push(element);
      } else {
        stack.push(element);
      }

      return element;
    }
    if (isElPlusOrMinus || isStackPowerOrSquare) {
      quee.push(stackLast);
      stack.pop();
      stack.push(element);

      return element;
    }
  });
  for (let i = stack.length - 1; i >= 0; i--) {
    quee.push(stack[stack.length - 1]);
    stack.pop();
  }
  return quee;
};
const postFixToRes = (postFix: any[]) => {
  let stack: any[] = [];
  postFix.map((elem) => {
    if (typeof elem === 'number') {
      stack.push(elem);
    } else {
      const res = Operate(
        stack[stack.length - 2],
        stack[stack.length - 1],
        elem
      );
      stack.pop();
      stack.pop();

      stack.push(res);
    }
  });
  return stack[0];
};
const calculate = (input: string) => {
  return postFixToRes(YardAlgotithm(generateArray(input)));
};
export default calculate;

console.log(calculate('2√25'));
