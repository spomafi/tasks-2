function numToPr(number){
  const
    z = ['ноль']
    h = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
    t = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
    o = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
    o2 = ['одна', 'две'],
    p = ['одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
    th = ['тысяча', 'тысячи', 'тысяч'];

  let str = number.toString(), out = '';

  if (str.length === 1) {
    if (number === 0) {
      return z[0]
    }
    return o[number - 1];
  } 
  else if (str.length === 2) {
    if (parseInt(str[0]) === 1 && parseInt(str[1]) !== 0) out = p[parseInt(str[1]) - 1];
    else out = (str[0] !== "0" ? " " + t[parseInt(str[0]) - 1] : "") + (str[1] !== "0" ? " " + o[parseInt(str[1]) - 1] : "");
  } 
  else if (str.length === 3) {
    out = h[parseInt(str[0]) - 1];
    if (parseInt(str[1]) === 1) out += " " + p[parseInt(str[2]) - 1];
    else out += (str[1] !== "0" ? " " + t[parseInt(str[1]) - 1] : "") + (str[2] !== "0" ? " " + o[parseInt(str[2]) - 1] : "");
  } 
  else if (str.length === 4) {
    if (parseInt(str[0]) < 3) {
        out += o2[parseInt(str[0]) - 1];
      if (parseInt(str[0]) === 1) {
        out += " " + th[0];
      } else {
        out += " " + th[1];
      }
    } 
    else if (parseInt(str[0]) < 5) {
      out += o[parseInt(str[0]) - 1] + " " + th[1];
      } else {
      out += o[parseInt(str[0]) - 1] + " " + th[2];
    }
    out += str[1] !== "0" ? " " + h[parseInt(str[1]) - 1] : "";
    if (parseInt(str[2]) === 1) out += " " + p[parseInt(str[3]) - 1];
    else out += " " + t[parseInt(str[2]) - 1] + (str[3] !== "0" ? " " + o[parseInt(str[3]) - 1] : "");
  } 
  else if (str.length === 5) {
    if (parseInt(str[0]) === 1) {
      out += " " + p[parseInt(str[1]) - 1] + " " + th[2];
      } else {
        out += " " + t[parseInt(str[0]) - 1];
      if (parseInt(str[1]) < 3) {
          out += " " + o2[parseInt(str[1]) - 1];
        if (parseInt(str[1]) === 1) {
          out += " " + th[0];
        } else {
          out += " " + th[1];
        }
    } 
    else if (parseInt(str[1]) < 5) {
        out += " " + o[parseInt(str[1]) - 1] + " " + th[1];
      } else {
        out += " " + o[parseInt(str[1]) - 1] + " " + th[2];
    }
    }
    out += str[2] !== "0" ? " " + h[parseInt(str[2]) - 1] : "";
    if (parseInt(str[3]) === 1) out += " " + p[parseInt(str[4]) - 1];
    else out += " " + t[parseInt(str[3]) - 1] + (str[4] !== "0" ? " " + o[parseInt(str[4]) - 1] : "");
  }
  else if (str.length === 6) {
    out = h[parseInt(str[0]) - 1] + (str[1] !== "0") ? " " + th[parseInt(str[3]) - 1] : "";
  }
    
  let arr = out.split("");
  out = arr.join("");
  return out;
}
    
console.log(numToPr(191));