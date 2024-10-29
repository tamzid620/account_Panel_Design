// adminPanel page -----------------------------
document.getElementById('menuButton').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }
});

const sidebarToggle = document.getElementById('sidebarToggle');
const mainContent = document.querySelector('.flex-grow-1');
const sidebar = document.querySelector('.sidebar-hidden');
// const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', function() {
    mainContent.classList.toggle('main-content-expanded');
  sidebar.classList.toggle('sidebar-expanded');
});

// dynamic input fields ------------------------------ 

document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('filterSelect');
    const dateField = document.getElementById('dateField');
    const monthField = document.getElementById('monthField');
    const invoiceField = document.getElementById('invoiceField');
    const clientNameField = document.getElementById('clientNameField');
    const lpoField = document.getElementById('lpoField');
  
    filterSelect.addEventListener('change', function() {
      // Hide all fields initially
      dateField.style.display = 'none';
      monthField.style.display = 'none';
      invoiceField.style.display = 'none';
      clientNameField.style.display = 'none';
      lpoField.style.display = 'none';
      
      // Show the selected field
      const selectedValue = filterSelect.value;
      
      switch (selectedValue) {
        case '1':
          dateField.style.display = 'block';
          break;
        case '2':
          monthField.style.display = 'block';
          break;
        case '3':
          invoiceField.style.display = 'block';
          break;
        case '4':
          clientNameField.style.display = 'block';
          break;
        case '5':
          lpoField.style.display = 'block';
          break;
      }
    });
  });
  
  <script>
  const textarea1 = document.getElementById('myTextArea1');
  const textarea2 = document.getElementById('myTextArea2');
  const textarea3 = document.getElementById('myTextArea3');
  
  textarea1.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      const value = this.value;
      const lines = value.split('\n');
      const currentLineIndex = getCurrentLineIndex(this);
      const currentLine = lines[currentLineIndex];
  
      if (isBulletPoint(currentLine)) {
        // Remove bullet point if current line starts with '- '
        lines[currentLineIndex] = currentLine.slice(2); // Remove '- '
      } else {
        // Insert bullet point if current line doesn't start with '- '
        lines.splice(currentLineIndex, 0, '• ');
      }
  
      this.value = lines.join('\n');
      this.selectionStart = this.selectionEnd = getNewCursorPosition(currentLineIndex, currentLine, isBulletPoint(currentLine));
    }
  });
  
  function getCurrentLineIndex(textarea1) {
    return textarea1.value.substr(0, textarea1.selectionStart).split('\n').length - 1;
  }
  
  function isBulletPoint(line) {
    return /^ /.test(line.trim());
  }
  
  function getNewCursorPosition(currentLineIndex, currentLine, isBullet) {
    if (isBullet) {
      // If there was a bullet point, move cursor to beginning of the line
      return currentLineIndex * 2; // Assuming '- ' is 2 characters long
    } else {
      // If there was no bullet point, move cursor to after the inserted bullet point
      return (currentLineIndex + 1) * 2; // Assuming '- ' is 2 characters long
    }
  }
//--------------------------------------------------------------------------   
  textarea2.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      const value = this.value;
      const lines = value.split('\n');
      const currentLineIndex = getCurrentLineIndex(this);
      const currentLine = lines[currentLineIndex];
  
      if (isBulletPoint(currentLine)) {
        // Remove bullet point if current line starts with '- '
        lines[currentLineIndex] = currentLine.slice(2); // Remove '- '
      } else {
        // Insert bullet point if current line doesn't start with '- '
        lines.splice(currentLineIndex, 0, '• ');
      }
  
      this.value = lines.join('\n');
      this.selectionStart = this.selectionEnd = getNewCursorPosition(currentLineIndex, currentLine, isBulletPoint(currentLine));
    }
  });
  
  function getCurrentLineIndex(textarea2) {
    return textarea2.value.substr(0, textarea2.selectionStart).split('\n').length - 1;
  }
  
  function isBulletPoint(line) {
    return /^ /.test(line.trim());
  }
  
  function getNewCursorPosition(currentLineIndex, currentLine, isBullet) {
    if (isBullet) {
      // If there was a bullet point, move cursor to beginning of the line
      return currentLineIndex * 2; // Assuming '- ' is 2 characters long
    } else {
      // If there was no bullet point, move cursor to after the inserted bullet point
      return (currentLineIndex + 1) * 2; // Assuming '- ' is 2 characters long
    }
  }
//--------------------------------------------------------------------------
textarea3.addEventListener('keydown', function(event) {
if (event.key === 'Enter' && !event.shiftKey) {
  event.preventDefault();
  const value = this.value;
  const lines = value.split('\n');
  const currentLineIndex = getCurrentLineIndex(this);
  const currentLine = lines[currentLineIndex];

  if (isBulletPoint(currentLine)) {
    // Remove bullet point if current line starts with '• '
    lines[currentLineIndex] = currentLine.slice(2); // Remove '• '
  } else {
    // Insert bullet point if current line doesn't start with '• '
    lines[currentLineIndex] = '• ' + currentLine; // Add '• '
  }

  // Insert a new line
  lines.splice(currentLineIndex + 1, 0, '');

  this.value = lines.join('\n');
  this.selectionStart = this.selectionEnd = getNewCursorPosition(currentLineIndex + 1);
}
});

function getCurrentLineIndex(textarea) {
return textarea.value.substr(0, textarea.selectionStart).split('\n').length - 1;
}

function isBulletPoint(line) {
return line.trim().startsWith('• ');
}

function getNewCursorPosition(lineIndex) {
// Move the cursor to the beginning of the new line
const lines = textarea3.value.split('\n');
let position = 0;
for (let i = 0; i < lineIndex; i++) {
  position += lines[i].length + 1; // +1 for the newline character
}
return position;
}
  </script>

