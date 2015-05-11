'use strict';

// Get the dialogs.
var dialog = document.getElementById('dialog');

// Get the buttons.
var dialogBtn = document.getElementById('showDialog');
var closeBtns = document.querySelectorAll('.close');

// Setup an event listener for the show button.
dialogBtn.addEventListener('click', function(e) {
  e.preventDefault();

  // Show the dialog with built-in show() method
  dialog.show();
});

// Setup event listener for close buttons.
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener('click', function(e) {
     this.parentNode.close();
  });
}
