function checkresult() {
  let result = "b";
  {
    let num3 = result.slice(0);
    
    document.getElementById("result").value= result.replace(num3, 67);
    console.log(result.replace(num3, "67"));
  }
  
  let myresult = "a";
  {
    let num2 = result.slice(0);
    
    document.getElementById("result").value = result.replace(num2, 92);
    console.log(result.replace(num2, "92"));
    
  }
  
  let mycheck = "c";
  {
    let num4 = result.slice(0);

    document.getElementById("result").value = result.replace(num4, 52);
    console.log(result.replace(num4, "52"));
  }
  
  let mychecker = "d";
  {
    let num5 = result.slice(0);
    
    document.getElementById("result").value = result.replace(num5, 57);
    console.log(result.replace(num5, "57"));
  }
  
  let resultcheck = "e";
  {
    let num6 = result.slice(0);
    
    document.getElementById("result").value = result.replace(num6, 42);
    console.log(result.replace(num6, "42"));
  }
  
  let resultchecker = "f";
  {
    let num7 = result.slice(0);
    
    document.getElementById("result").value = result.replace(num7, 20);
    console.log(result.replace(num7, "20"));
  }
      }