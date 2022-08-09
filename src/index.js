module.exports = function check(str, bracketsConfig) {
  let stack = [];
  str = str.split('');
  
  for (let bracket of str) {
  for (let template of bracketsConfig){
    if (bracket === template[0]){
    stack.push(template[0]);
    }
    if (bracket === template[1] && stack[stack.length-1] === template[0]){
    stack.pop(); 
    } else 
    if (bracket === template[1] && stack[stack.length-1] != template[0])
    return false;
    else if
     (bracket === template[1] && stack.length === 0)	return false;
    
    }
    }
    return (!stack.length);
  }

  const config1 = [['(', ')']];
  const config2 = [['(', ')'], ['[', ']']];
  const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
  const config4 = [['|', '|']];
  const config5 = [['(', ')'], ['|', '|']];
  const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
  const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
