'use strict';

// Get the dialogs.
var dialog = document.getElementById('dialog');

// Get the buttons.
var dialogBtn = document.getElementById('showDialog');
var closeBtn = document.getElementById('close');

// Setup an event listener for the show button.
dialogBtn.addEventListener('click', function(e) {
  e.preventDefault();

  // Show the dialog with built-in show() method
  dialog.show();
});

// Setup event listener for the close button.
closeBtn.addEventListener('click', function(e) {
  e.preventDefault();

  // Close dialog with built-in close() method.
  dialog.close();
});
