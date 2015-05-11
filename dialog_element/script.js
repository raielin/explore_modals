'use strict';

// Get the dialog.
var dialog = document.getElementById('dialog');

// Get the buttons.
var showBtn = document.getElementById('show');
var closeBtn = document.getElementById('close');

// Setup an event listener for the show button.
showBtn.addEventListener('click', function(e) {
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
