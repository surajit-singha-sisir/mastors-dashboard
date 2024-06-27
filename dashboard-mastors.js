print = console.log;
window.onload = function () {
  popupForIcon();
  navMenu();
  negPosRating();
  autoCounter();

  updateCounter();
};
function popupForIcon() {
  // HELP ICON
  const helpIcon = document.getElementById("help-icon");
  // PLUS ICON
  const plusIcon = document.getElementById("plus-icon");
  // USER ICON
  const userIcon = document.getElementById("user-icon");
  // POPUP
  const popup = document.getElementById("popup");

  const popupSections = document.querySelectorAll(
    ".deshboard-right-icons > section"
  );
  const deshboardRightIcons = document.querySelectorAll(
    ".deshboard-right-icons > div"
  );

  for (let i = 0; i < deshboardRightIcons.length; i++) {
    const currentIndex = deshboardRightIcons[i];

    helpIcon.onclick = (e) => {
      e.stopPropagation();
      popupSections[0].classList.remove("hide");
      popupSections[0].classList.add("show");
    };
    plusIcon.onclick = (e) => {
      e.stopPropagation();
      popupSections[1].classList.remove("hide");
      popupSections[1].classList.add("show");
    };
    userIcon.onclick = (e) => {
      e.stopPropagation();
      popupSections[2].classList.remove("hide");
      popupSections[2].classList.add("show");
    };

    document.onclick = (e) => {
      popupSections.forEach((x) => {
        x.classList.remove("show");
        x.classList.add("hide");
      });
    };
  }
}

// NAV MENU
function navMenu() {
  const navItemTexts = document.querySelectorAll(
    ".dashboard-navItems .flexNav p"
  );

  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".dashboard-body .dashboard-grid");
  const iconicDeshboard = document.querySelector(".iconic-dashboard-grid");
  const logoH1 = document.querySelector(".your-dashboard-logo h1");
  const icons = document.querySelectorAll(".flexNav .setNavIcon");

  hamburger.onclick = () => {
    navItemTexts.forEach((p) => {
      p.classList.contains("right-shift")
        ? p.classList.remove("right-shift") &
          p.classList.toggle("left-shift") &
          navbar.classList.remove("dashboard-grid") &
          navbar.classList.add("iconic-dashboard-grid") &
          logoH1.classList.add("hide") &
          icons.forEach((icon) => {
            icon.style.transform = "scale(1.5)  translateX(80%)";
          })
        : p.classList.add("right-shift") &
          p.classList.remove("left-shift") &
          navbar.classList.add("dashboard-grid") &
          navbar.classList.remove("iconic-dashboard-grid") &
          logoH1.classList.remove("hide") &
          icons.forEach((icon) => {
            icon.style.transform = "scale(1)";
          });
    });
  };
}

// OVERVIEW RATING COLOR ADDING
function negPosRating() {
  const negPosContents = document.querySelectorAll(".negative-positive-rating");

  negPosContents.forEach((negPosContent) => {
    const getData = parseInt(negPosContent.getAttribute("data-target"));
    if (getData > 100) {
      negPosContent.style.color = "#6dff48";
    } else {
      negPosContent.style.color = "red";
    }
    negPosContent.innerHTML = getData + "%";  
  });
}

// AUTO COUNTING ANIMATION
function autoCounter() {
  const counters = document.querySelectorAll(".autoCounter");
  const duration = 8000;

  counters.forEach((counter) => {
    const targetNumber = parseInt(counter.getAttribute("data-target"), 10);
    const stepTime = Math.floor(duration / targetNumber);
    let currentNumber = 0;

    function updateCounter() {
      currentNumber += 30;
      counter.textContent = currentNumber;

      if (currentNumber < targetNumber) {
        setTimeout(updateCounter, stepTime);
      } else {
        counter.textContent = targetNumber;
      }
    }

    updateCounter();
  });
}
