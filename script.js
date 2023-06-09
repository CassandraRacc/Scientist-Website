document.getElementById('add-button').addEventListener('click', function() {
    var scientistInput = document.getElementById('scientist-input');
    var resultBox = document.getElementById('result-box');
    var scientistName = scientistInput.value;
    
    if (scientistName) {
      var newEntry = document.createElement('span');
      newEntry.textContent = scientistName;
      resultBox.appendChild(newEntry);
      scientistInput.value = '';
    }
  });