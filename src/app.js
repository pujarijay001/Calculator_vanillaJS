//grab the elements
const display = document.querySelector(".p1");
const buttons = document.querySelectorAll(".chars");
const ansDisp = document.querySelector(".p2");
const pattern = /^[0-9+\-*/. ]+$/;


//single execution function
function executeExpression(expression) {
    // see if user 
  if (!pattern.test(expression)) {
    ansDisp.innerText = "Error";
    return;
  }

  try { //used functionn constructor for super easy calculation from raw text
    const ans = Function(`"use strict"; return (${expression});`);
    ansDisp.innerText = ans();
  } catch {
    ansDisp.innerText = "Error";
  }
}
// eventListner for keyboard
document.addEventListener("keydown", event => {
  
  if (event.key === "Enter") {
    executeExpression(display.innerText);
  } else if (/^[0-9+\-*/.]$/.test(event.key)) {
    if (display.innerText==="Expression" && ansDisp.innerText=="Answer") {
      display.innerText = "";
      ansDisp.innerText = "";
    }
    display.innerText += event.key;

  } else if (event.key === "Backspace") {
    display.innerText = display.innerText.slice(0, -1);

    if (display.innerText ==="") {
        ansDisp.innerText =" ";

      }
  } else if (event.key === "Escape") {
    display.innerText = "";
    ansDisp.innerText = "";
  }
});

// eventListner for built ui buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    
    if (value ==="backspace") {
      display.innerText = display.innerText.slice(0, -1);

      if (display.innerText ==="") {
        ansDisp.innerText =" ";
      }
    }
    else if (value === "clear") {
      display.innerText = "";
      ansDisp.innerText = "";
    }

   
    else if (value === "=") {
        //directly passed what user typed, no extra pharsing bs!!!
      executeExpression(display.innerText);

    }else{if (display.innerText==="Expression" && ansDisp.innerText=="Answer") {
      display.innerText = "";
      ansDisp.innerText = "";
    }display.innerText += value;}
  

   
  });
});





// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const value = button.dataset.value;

//     if (value === "clear") {
//       display.innerText = "";
//     } else if (value === "backspace") {
//       if (display.innerText === "Error") {
//           display.innerText = "";
//       }
//       display.innerText = display.innerText.slice(0, -1);
//     } else if (value === "=") {
//       const expression = display.innerText; 

//       if (!/^[0-9+\-*/. ]+$/.test(expression)) {
//         display.innerText = "Error";
//         return;
//       }

//       try {
//         display.innerText = Function(`"use strict"; return (${expression})`)();
//       } catch {
//         display.innerText = "Error";
//       }
//     } else {
//       display.innerText += value;
//     }
//   });
// });
