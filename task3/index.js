function numToPr(number){
  const
    z = ['ноль']
    h = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
    t = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
    o = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
    o2 = ['одна', 'две'],
    p = ['одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
    th = ['тысяча', 'тысяч', 'тысячи'];

  let str = number.toString(), out = '';

  if (str.length === 1) {
    if ( number === 0) {
      return z[0]
    }
    return o[number - 1];
  }
  else if (str.length === 2) {
    if (str[0] === 1) out = p[parseInt(str[1]) - 1];
    else out = (t[parseInt(str[0]) - 1] + ((str[1] !== '0') ? (' ' + o[parseInt(str[1]) - 1]) : ''));
  }
  else if (str.length === 3) {
    out = (h[parseInt(str[0]) - 1] + ((str[1] !== '0') ? (' ' + t[parseInt(str[1]) - 1]) : '') + ((str[2] !== '0') ? (' ' + o[parseInt(str[2]) - 1]) : ''));
  }
  // else if (str.length === 4) {
  //   out = ();
  // }
  // else if (str.length === 5) {
  //   out = (t[parseInt(str[0]) - 1] + ((str[1] !== '0') ? (' ' + o[parseInt(str[1]) - 1]) : '') + ((str[2] === '0') ? (' ' + th[parseInt(str[3]) - 1]) : ''));
  // }
  // else if (str.length === 6) {
  //   out = (h[parseInt(str[0]) - 1] + ((str[1] !== '0')) ? (' ' + th[parseInt(str[3]) - 1]) : '')
  // } 

  let arr = out.split('');
  out = arr.join('');
  return out;
}

console.log(numToPr(0));