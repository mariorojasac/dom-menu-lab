// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
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




const subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = "var(--top-menu-bg)";

subMenuEl.classList.add("flex-aroundto");

subMenuEl.classList.position = "absolute";

subMenuEl.classList.top = "0";


t

