
  //tabbed pannels
  //declare globals to hold all the links and panel elements
  var tabLinks;
  var tabPanels;
  window.onload = function() {
    //when the page laods it grabs the li elements
    tabLinks = document.getElementByID("tabs").getElementsByTagName("li");
    //now get all the divs to store in tabpanels
    tabPanels = document.getElementByID("containers").getElementsByTagName("div");
    //activate the first One
    displayPanel(tabLinks[0]);
    //attach event listeners to links using onclick and onfocus
    for (var i = 0; i < tabLinks.length; i++) {
      tabLinks[i].onclick = function() {
        displayPanel(this);
        return false;
      }
      tabLinks.onfocus() {
        displayPanel(this);
        return false;
      }
    }
  }

  function displayPanel(tabToActivate) {
    //go through all li elements
    for (var i = 0; i < tabLinks.length; i++) {
      if (tabLinks[i] == tabToActivate) {
        tabLinks[i].classList.add("active");
        tabPanels[i].style.display = "block";
      }
      else {
        tabLinks[i].classList.remove("active");
        tabPanels[i].style.display = "none";
      }
    }
  }
