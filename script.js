document.addEventListener('DOMContentLoaded', function() {
  let inputBox = document.getElementById('inputBox');
  let buttons = document.querySelectorAll('button');
  let string = '';

  buttons.forEach(element => {
    element.addEventListener('click', (b) => {
      if (b.target.innerText === '=') {
        try {
          string = String(evaluateExpression(string));
          inputBox.value = string;
        } catch (error) {
          inputBox.value = 'Error';
        }
      } else if (b.target.innerText === 'AC') {
        string = '';
        inputBox.value = string;
      } else if (b.target.innerText === 'Del') {
        string = string.substring(0, string.length - 1);
        inputBox.value = string;
      } else if (b.target.id === 'plusMinus') {
        string = String(-parseFloat(string));
        inputBox.value = string;
      } else {
        string += b.target.innerText;
        inputBox.value = string;
      }
    });
  });

  // Function to safely evaluate mathematical expressions
  function evaluateExpression(expression) {
    return new Function('return ' + expression)();
  }

 
});
