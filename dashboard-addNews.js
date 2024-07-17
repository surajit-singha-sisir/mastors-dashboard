print = console.log;
window.onload = function () {
  caption();
  nameContainer();
  transitionOnY();
  dragAndDrop();
  previewThumb();
};

function caption() {
  const inputField = document.querySelector(".add-post-caption-counter input");
  const output = document.querySelector(
    ".add-post-caption-counter .input-counter"
  );
  const maxLength = inputField.maxLength;
  output.innerHTML = maxLength;

  inputField.oninput = () => {
    const remains = maxLength - inputField.value.length;
    output.innerHTML = remains;
  };
}

function nameContainer() {
  const nameDiv = document.querySelectorAll(".add-post-name-container");

  nameDiv.forEach((item) => {
    const arrow = item.querySelector("img");

    item.onclick = () => {
      arrow.classList.toggle("arrowRotate");
    };
  });
}

function transitionOnY() {
  var toggleButtons = document.querySelectorAll(".toggleButton");
  toggleButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      var content = document.querySelectorAll(".animate-y-axis")[index];
      print(content);
      // Check if the content is currently expanded (height > 0)
      var isExpanded = content.style.height !== "0px";

      if (isExpanded) {
        // Collapse the content
        content.style.height = "0px";
      } else {
        // Expand the content to its full height
        content.style.height = content.scrollHeight + "px";
      }
    });
  });
}

function dragAndDrop() {
  const dropZone = document.getElementById("drop-zone");
  const fileInput = document.getElementById("file-input");

  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.classList.add("dragging");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragging");
  });

  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.classList.remove("dragging");
    const files = event.dataTransfer.files;
    handleFiles(files);
  });

  dropZone.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", () => {
    const files = fileInput.files;
    handleFiles(files);
  });

  function handleFiles(files) {
    for (const file of files) {
      dropZone.textContent = file.name;
      dropZone.style.color = "#2df8dd";
    }
  }
}

// IMAGE PREVIEW
function previewThumb() {
  const inputImage = document.getElementById('file-input');
  const image = document.querySelector('.thumb-preview .preview-img img');
  const imageSize = document.getElementById('image-size');
  const imageRatio = document.getElementById('image-ratio');

  const file = inputImage.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      image.src = e.target.result;

      // Create an image object to get the dimensions
      const img = new Image();
      img.onload = function() {
        const width = img.width;
        const height = img.height;
        imageSize.textContent = `${width}px x ${height}px`;
        imageRatio.textContent = (width / height).toFixed(2) + ":1";
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}