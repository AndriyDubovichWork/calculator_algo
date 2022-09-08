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
        stack.push(element);
        return element;
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
        if (stackLast) {
          quee.push(stackLast);
          stack.pop();
          stack.push(element);
        } else {
          stack.push(element);
        }
        return element;
      }
    });
    for (let i = stack.length - 1; i >= 0; i--) {
      quee.push(stack[stack.length - 1]);
      stack.pop();
    }
    return quee;
  };
  export default YardAlgotithm