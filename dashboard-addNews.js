print = console.log;
window.onload = function () {
  caption();
  nameContainer();
};

function caption() {
  const inputField = document.querySelector(".add-post-caption-counter input");
  const output = document.querySelector(
    ".add-post-caption-counter .input-counter"
  );
  const maxLength = inputField.maxLength;
  output.innerHTML = maxLength;

  inputField.oninput=  () => {
    const remains = maxLength - inputField.value.length;
    output.innerHTML = remains;
  };
}


function nameContainer() {
    const nameDiv = document.querySelector('.add-post-name-container');
    const arrow = nameDiv.querySelector('img');
    nameDiv.style.cursor = 'pointer';
    arrow.classList.add('arrowStable');
    nameDiv.onclick = () => {
        arrow.classList.toggle('arrowRotate');
    }
}