// document.querySelectorAll("#nav li").forEach(function(navEl) {
//     navEl.onclick = function() { toggleTab(this.id, this.dataset.target); }
//   });
  
//   function toggleTab(selectedNav, targetId) {
//     var navEls = document.querySelectorAll("#nav li");
  
//     navEls.forEach(function(navEl) {
//       if (navEl.id == selectedNav) {
//         navEl.classList.add("is-active");
//       } else {
//         if (navEl.classList.contains("is-active")) {
//           navEl.classList.remove("is-active");
//         }
//       }
//     });
  
//     var tabs = document.querySelectorAll(".tab-pane");
  
//     tabs.forEach(function(tab) {
//       if (tab.id == targetId) {
//         tab.style.display = "block";
//       } else {
//         tab.style.display = "none";
//       }
//     });
//   }

  document.querySelectorAll("#nav li").forEach(navEl => {
    navEl.addEventListener("click", () => toggleTab(navEl.id, navEl.dataset.target));
});

function toggleTab(selectedNav, targetId) {
    const navEls = document.querySelectorAll("#nav li");

    navEls.forEach(navEl => {
        if (navEl.id == selectedNav) {
            navEl.classList.add("is-active");
        } else {
            if (navEl.classList.contains("is-active")) {
                navEl.classList.remove("is-active");
            }
        }
    });

    const tabs = document.querySelectorAll(".tab-pane");

    tabs.forEach(tab => {
        if (tab.id == targetId) {
            tab.style.display = "block";
        } else {
            tab.style.display = "none";
        }
    });
}

