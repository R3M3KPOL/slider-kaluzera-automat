
const root = document.documentElement;
const elementsDisplayed = getComputedStyle(root).getPropertyValue("--elements-displayed");
const figureContent = document.querySelector('figure.figure');

root.style.setProperty("--all-elements", figureContent.children.length);

for(let i=0; i<elementsDisplayed; i++) {
  figureContent.appendChild(figureContent.children[i].cloneNode(true));
}
