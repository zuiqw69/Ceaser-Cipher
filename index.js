function caesarShift (str, amount) {
    
    if (amount < 0) {
      return caesarShift(str, amount + 26);
    }
    let output = "";
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
    
      if (char.match(/[a-z]/i)) {
        let code = str.charCodeAt(i);
  
       
        if (code >= 65 && code <= 90) {
            char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        }
        
        else if (code >= 97 && code <= 122) {
            char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
      }
  
    output += char;
    }
  
    document.getElementById("encrypt").innerHTML = output;
    document.getElementById("input").value = "";
    return output;
  };
