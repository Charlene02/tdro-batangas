const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});


subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});
                              
function confirmLogout() {
  
    const confirmation = confirm("Are you sure you want to log out?");
    if (confirmation) {
      window.location.href = "logout.php";
    }
  }
//Search Functionality With contact
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput1');
  const searchResults = document.getElementById('searchResults');

  searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.trim();

      if (searchTerm !== '') {
          // Send an AJAX request to search.php
          searchResults.innerHTML = '<p>Loading...</p>';
          fetch(`search.php?term=${searchTerm}`)
              .then(response => response.text())
              .then(data => {
                  searchResults.innerHTML = data;
              })
              .catch(error => {
                  console.error('Error:', error);
              });
      } else {
          // When the input is empty, show the whole table
          searchResults.innerHTML = ''; // Clear results
          fetch('search.php') // Send an AJAX request without a search term
              .then(response => response.text())
              .then(data => {
                  searchResults.innerHTML = data; // Display the whole table
              })
              .catch(error => {
                  console.error('Error:', error);
              });
      }
  });
});
// Search With No Contact
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput2');
  const searchResults = document.getElementById('searchResults2');

  searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.trim();

      if (searchTerm !== '') {
          // Send an AJAX request to search.php
          searchResults.innerHTML = '<p>Loading...</p>';
          fetch(`search2.php?term=${searchTerm}`)
              .then(response => response.text())
              .then(data => {
                  searchResults.innerHTML = data;
              })
              .catch(error => {
                  console.error('Error:', error);
              });
      } else {
          // When the input is empty, show the whole table
          searchResults.innerHTML = ''; // Clear results
          fetch('search2.php') // Send an AJAX request without a search term
              .then(response => response.text())
              .then(data => {
                  searchResults.innerHTML = data; // Display the whole table
              })
              .catch(error => {
                  console.error('Error:', error);
              });
      }
  });
});
// Search With & No Contact
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput3');
  const searchResults = document.getElementById('searchResults3');

  searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.trim();

      if (searchTerm !== '') {
          // Send an AJAX request to search.php
          searchResults.innerHTML = '<p>Loading...</p>';
          fetch(`search3.php?term=${searchTerm}`)
              .then(response => response.text())
              .then(data => {
                  searchResults.innerHTML = data;
              })
              .catch(error => {
                  console.error('Error:', error);
              });
      } else {
          // When the input is empty, show the whole table
          searchResults.innerHTML = ''; // Clear results
          fetch('search3.php') // Send an AJAX request without a search term
              .then(response => response.text())
              .then(data => {
                  searchResults.innerHTML = data; // Display the whole table
              })
              .catch(error => {
                  console.error('Error:', error);
              });
      }
  });
});

// Search With & No Contact
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput4');
  const searchResults = document.getElementById('searchResults4');

  searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.trim();

      if (searchTerm !== '') {
          // Send an AJAX request to search.php
          searchResults.innerHTML = '<p>Loading...</p>';
          fetch(`search4.php?term=${searchTerm}`)
              .then(response => response.text())
              .then(data => {
                  searchResults.innerHTML = data;
              })
              .catch(error => {
                  console.error('Error:', error);
              });
      } else {
          // When the input is empty, show the whole table
          searchResults.innerHTML = ''; // Clear results
          fetch('search4.php') // Send an AJAX request without a search term
              .then(response => response.text())
              .then(data => {
                  searchResults.innerHTML = data; // Display the whole table
              })
              .catch(error => {
                  console.error('Error:', error);
              });
      }
  });
});

//Success List button
document.getElementById('successList').addEventListener('click', function () {
  // Send an AJAX request to filter_success.php
  searchResults.innerHTML = '<p>Loading...</p>';
  fetch('filter_success.php')
      .then(response => response.text())
      .then(data => {
          searchResults4.innerHTML = data;
      })
      .catch(error => {
          console.error('Error:', error);
      });
});
//Failed List button
document.getElementById('failedList').addEventListener('click', function () {
  // Send an AJAX request to filter_success.php
  searchResults.innerHTML = '<p>Loading...</p>';
  fetch('filter_failed.php')
      .then(response => response.text())
      .then(data => {
          searchResults4.innerHTML = data;
      })
      .catch(error => {
          console.error('Error:', error);
      });
});
//ShowAll Button
document.getElementById('showAll').addEventListener('click', function () {
  // Send an AJAX request to show_all.php
  searchResults4.innerHTML = '<p>Loading...</p>';
  fetch('filter_all.php')
      .then(response => response.text())
      .then(data => {
          searchResults4.innerHTML = data;
      })
      .catch(error => {
          console.error('Error:', error);
      });
});



 //for popup box
  function toggleBoxContent(button) {
    const hiddenContent = button.nextElementSibling;
    if (hiddenContent.style.display === 'block') {
      hiddenContent.style.display = 'none';
    } else {
      hiddenContent.style.display = 'block';
    }
  }

//modal
const openModalButtons = document.querySelectorAll('[data-modal-target]')
        const closeModalButtons = document.querySelectorAll('[data-close-button]')
        const overlay = document.getElementById('overlay')

        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = document.querySelector(button.dataset.modalTarget)
                openModal(modal)
            })
        })

        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal')
                closeModal(modal)
            })
        })

        overlay.addEventListener('click', () => {
            const modals = document.querySelectorAll('.modal.active')
            modals.forEach(modal => {
                closeModal(modal)
            })
        })

        function openModal(modal) {
            if (modal == null) return
            modal.classList.add('active')
            overlay.classList.add('active')
        }

        function closeModal(modal) {
            if (modal == null) return
            modal.classList.remove('active')
            overlay.classList.remove('active')
        }

        overlay.addEventListener('click', () => {
          const modals = document.querySelectorAll('.modal.active')
          modals.forEach(modal => {
              closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
function handleUnattended() {
  // Disable and clear OR Number and OR Date inputs
  document.getElementById("or_number").disabled = true;
  document.getElementById("or_number").value = "";
  document.getElementById("or_date").disabled = true;
  document.getElementById("or_date").value = "";

  // Set Status to "Failed"
  document.getElementById("status").value = "Failed";

  // Set CNC to "NC"
  document.querySelector('select[name="cnc"]').value = "NC";
  const nameInput = document.getElementById("nameInput");
  nameInput.value = "Unattended";
}

// To populate Violation Type dropdown from PHP
document.addEventListener('DOMContentLoaded', function () {
  const violationTypeSelect = document.getElementById('violation_type');
  const violationSelect = document.getElementById('violation');

  // Fetch violation types from the server and populate the "Violation Type" dropdown
  fetch('fetch_violation_types.php')
      .then(response => response.json())
      .then(data => {
          data.forEach(violationType => {
              const option = document.createElement('option');
              option.value = violationType;
              option.textContent = violationType;
              violationTypeSelect.appendChild(option);
          });
      });

  // Listen for changes in the "Violation Type" dropdown
  violationTypeSelect.addEventListener('change', function () {
      const selectedViolationType = violationTypeSelect.value;

      // Enable the "Violation" dropdown
      violationSelect.disabled = false;

      // Fetch violations based on the selected "Violation Type" and populate the "Violation" dropdown
      fetch('fetch_violations.php?violation_type=' + selectedViolationType)
          .then(response => response.json())
          .then(data => {
              violationSelect.innerHTML = ''; // Clear previous options
              if (data.length > 0) {
                  data.forEach(violation => {
                      const option = document.createElement('option');
                      option.value = violation;
                      option.textContent = violation;
                      violationSelect.appendChild(option);
                  });
              } else {
                  const option = document.createElement('option');
                  option.value = '';
                  option.textContent = 'No violations found';
                  violationSelect.appendChild(option);
              }
          });
  });
});

// Modal for Violation Details
const openViolationModalButtons = document.querySelectorAll('[data-modal-violation-target]');
const closeViolationModalButtons = document.querySelectorAll('[data-close-violation-button]');

openViolationModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalViolationTarget);
    openViolationModal(modal);
  });
});

closeViolationModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal-violation');
    closeViolationModal(modal);
  });
});

function openViolationModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeViolationModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

// Function to open the modal for Violation Details and populate it with data
function openViolationDetailsModal(name, ticketNo) {
  var modal = document.getElementById('violatorModal');
  var modalName = document.getElementById('modalName');
  var modalTicketNo = document.getElementById('modalTicketNo');

  modalName.textContent = name;
  modalTicketNo.textContent = ticketNo;

  modal.style.display = 'block';
}

// Function to close the modal for Violation Details
function closeViolationDetailsModal() {
  var modal = document.getElementById('violatorModal');
  modal.style.display = 'none';
}
