document.addEventListener("DOMContentLoaded", () => {

  /* ========================================
     MOBILE MENU
  ======================================== */

  const menuButton = document.getElementById("menuButton");
  const navigation = document.getElementById("navigation");

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


  window.addEventListener("resize", () => {

    if (
      window.innerWidth > 800 &&
      navigation
    ) {
      navigation.classList.remove("open");
    }

  });



  /* ========================================
     PASSWORD DOWNLOAD
  ======================================== */

  const passwordModal =
    document.getElementById("passwordModal");

  const passwordOverlay =
    document.getElementById("passwordOverlay");

  const passwordClose =
    document.getElementById("passwordClose");

  const passwordForm =
    document.getElementById("passwordForm");

  const passwordInput =
    document.getElementById("passwordInput");

  const passwordError =
    document.getElementById("passwordError");


  let currentPassword = "";
  let currentFile = "";



  /* DOWNLOAD BUTTON */

  const downloadButtons =
    document.querySelectorAll(".download-button");


  downloadButtons.forEach((button) => {

    button.addEventListener("click", () => {

      currentPassword =
        button.dataset.password;

      currentFile =
        button.dataset.file;


      passwordInput.value = "";

      passwordError.classList.remove("show");

      passwordModal.classList.add("open");

      passwordModal.setAttribute(
        "aria-hidden",
        "false"
      );


      setTimeout(() => {
        passwordInput.focus();
      }, 100);

    });

  });



  /* ========================================
     PASSWORD CHECK
  ======================================== */

  passwordForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const enteredPassword =
        passwordInput.value;


      if (
        enteredPassword === currentPassword
      ) {

        passwordError.classList.remove("show");


        /* DOWNLOAD */

        const link =
          document.createElement("a");

        link.href = currentFile;

        link.download = "";

        document.body.appendChild(link);

        link.click();

        link.remove();


        closePasswordModal();

      }

      else {

        passwordError.classList.add("show");

        passwordInput.value = "";

        passwordInput.focus();

      }

    }
  );



  /* ========================================
     CLOSE MODAL
  ======================================== */

  function closePasswordModal() {

    passwordModal.classList.remove("open");

    passwordModal.setAttribute(
      "aria-hidden",
      "true"
    );

    currentPassword = "";
    currentFile = "";

  }


  passwordClose.addEventListener(
    "click",
    closePasswordModal
  );


  passwordOverlay.addEventListener(
    "click",
    closePasswordModal
  );


  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        passwordModal.classList.contains("open")
      ) {

        closePasswordModal();

      }

    }
  );

});
