// Presentation mode global variable
let presentation_mode = false;

let headers = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
let currentHeaderIndex = 0;
function setElementsBlackBetweenHeaders(startIdx) {
  // Set all elements between headers[startIdx] and headers[startIdx+1] to black, including all descendants
  let start = headers[startIdx];
  let end = headers[startIdx + 1] || null;
  let node = start.nextElementSibling;
  while (node && node !== end) {
    setNodeAndChildrenBlack(node);
    node = node.nextElementSibling;
  }
}
function setNodeAndChildrenBlack(node) {
  node.style.color = 'black';
  if (node.children && node.children.length > 0) {
    Array.from(node.children).forEach(child => setNodeAndChildrenBlack(child));
  }
}
function highlightHeaderAndSection(idx) {
  headers[idx].style.color = 'black';
  setElementsBlackBetweenHeaders(idx);
  headers[idx].scrollIntoView({behavior: 'smooth', block: 'start'});
}
// Listen for F4 to activate presentation mode
document.addEventListener('keydown', function(e) {
  // F4 key
  if (!presentation_mode && e.code === 'F4') {
    e.preventDefault();
    presentation_mode = true;
    alert('Presentation mode activated. Use left/right arrows to navigate between sections.');
    // Set all text to gray
    let main = document.querySelector('.markdown-body');
    if (main) {
      let allElements = main.querySelectorAll('*');
      allElements.forEach(el => {
        el.style.color = 'gray';
      });
    }
    // Highlight the first header and section
    if (headers.length > 0) {
      currentHeaderIndex = 0;
      highlightHeaderAndSection(0);
    }
    return;
  }
  // Only handle left/right arrows in presentation mode
  if (!presentation_mode) return;
  if (headers.length === 0) return;
  if (e.code === 'ArrowRight') {
    e.preventDefault();
    if (currentHeaderIndex < headers.length - 1) {
      currentHeaderIndex++;
      highlightHeaderAndSection(currentHeaderIndex);
    }
  } else if (e.code === 'ArrowLeft') {
    e.preventDefault();
    if (currentHeaderIndex > 0) {
      currentHeaderIndex--;
      highlightHeaderAndSection(currentHeaderIndex);
    }
  }
});