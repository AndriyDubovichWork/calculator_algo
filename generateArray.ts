const generateArray = (Originalinp: string) => {
  const inp = Originalinp.replaceAll(' ', '')
    .replaceAll('*', 'x')
    .replaceAll('/', '÷');
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
  if (typeof parseInt(num) === 'number') {
    resArr.push(num);
  }

  resArr = resArr.map((elem) => {
    if (parseInt(elem) === 0) {
      return parseInt(elem);
    }
    if (parseInt(elem)) {
      return parseInt(elem);
    } else {
      return elem;
    }
  });
  return resArr;
};
export default generateArray;
