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
  
