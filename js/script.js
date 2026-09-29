document.addEventListener("DOMContentLoaded", () => {

  const menuButton = document.getElementById("menuButton");
  const navigation = document.getElementById("navigation");


  /* =========================================
     MOBILE MENU
  ========================================= */

  if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

      navigation.classList.toggle("open");

    });


    const navigationLinks =
      navigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {

      link.addEventListener("click", () => {

        navigation.classList.remove("open");

      });

    });

  }


  /* =========================================
     CLOSE MENU WHEN RESIZED
  ========================================= */

  window.addEventListener("resize", () => {

    if (window.innerWidth > 800) {

      navigation?.classList.remove("open");

    }

  });


  /* =========================================
     DOWNLOAD BUTTON
  ========================================= */

  const downloadButtons =
    document.querySelectorAll(".download-button");

  downloadButtons.forEach((button) => {

    button.addEventListener("click", () => {

      button.classList.add("downloading");

      setTimeout(() => {

        button.classList.remove("downloading");

      }, 800);

    });

  });

});
