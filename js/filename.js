function updateFileName(inputId) {
    var fileInput = document.getElementById(inputId);
    var fileName = document.getElementById('fileName' + inputId.slice(-1));
    if (fileInput.files.length > 0) {
      var maxLength = 27;
      var displayedName = fileInput.files[0].name;
      var fileExtension = displayedName.split('.').pop();

      if (displayedName.length > maxLength) {
        displayedName = displayedName.substring(0, maxLength) + '...';
      }

      fileName.innerText = displayedName + ' (' + fileExtension + ')';
    } else {
      fileName.innerText = 'No file chosen';
    }
  }