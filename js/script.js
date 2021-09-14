// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI ROCKS!<h1>";
mainEl.classList.add("flex-ctr");
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("--top-menu-bg");
topMenuEl.classList.add("flex-around");


// Iterate over the entire menuLinksarray and for each "link" object:
menuLinks.forEach(function (link) {
// Create an <a>element.
const linkEl = document.createElement("a");
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
linkEl.setAttribute("href", link.href);
// Set the new element's content to the value of the textproperty of the "link" object.
linkEl.textContent = link.text;
// Append the new element to the topMenuElelement.
topMenuEl.appendChild(linkEl);
});



// Task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");

// Task 4.1
// Set the height subMenuElelement to be 100%.
subMenuEl.style.height = "100%";

// Task 4.2
// Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Task 4.3
// Add the class of flex-aroundto the subMenuElelement.
subMenuEl.classList.add("flex-aroundto");


