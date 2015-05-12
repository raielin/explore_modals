'use strict';

// Get the dialogs.
var dialog = document.getElementById('dialog');
var modal = document.getElementById('modal');
var styledModal = document.getElementById('styledModal');

// Get the buttons.
var dialogBtn = document.getElementById('showDialog');
var modalBtn = document.getElementById('showModal');
var styledModalBtn = document.getElementById('showStyledModal');
var closeBtns = document.querySelectorAll('.close');

// Register dialog polyfill
dialogPolyfill.registerDialog(dialog);
dialogPolyfill.registerDialog(modal);
dialogPolyfill.registerDialog(styledModal);

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
});

styledModalBtn.addEventListener('click', function(e) {
  e.preventDefault();

  styledModal.showModal();
});

// Setup event listener for close buttons.
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener('click', function(e) {
     this.parentNode.close();
  });
}
