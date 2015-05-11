'use strict';

// Get the dialogs.
var dialog = document.getElementById('dialog');
var modal = document.getElementById('modal');

// Get the buttons.
var dialogBtn = document.getElementById('showDialog');
var modalBtn = document.getElementById('showModal');
var closeBtns = document.querySelectorAll('.close');

// Setup event listeners for show buttons.
dialogBtn.addEventListener('click', function(e) {
  e.preventDefault();

  // Show the dialog with built-in show() method
  dialog.show();
});

modalBtn.addEventListener('click', function(e) {
  e.preventDefault();

  // Show modal dialog with built-in showModal() method which deactivates/locks main content behind dialog box.
  modal.showModal();
})

// Setup event listener for close buttons.
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener('click', function(e) {
     this.parentNode.close();
  });
}
