// Presentation mode global variable
let presentation_mode = false;

let headers_and_images = [];
let currentHeaderIndex = 0;
function setElementsBlack(startIdx) {
  // Set all elements between headers_and_images[startIdx] and headers_and_images[startIdx+1] to black, including all descendants
  let start = headers_and_images[startIdx];
  let end = headers_and_images[startIdx + 1] || null;
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
  let el = headers_and_images[idx];
  // Remove previous image enlargement and overlay if any
  // Remove overlay if it exists
  let overlay = document.getElementById('presentation-img-overlay');
  if (overlay) {
    overlay.parentNode.removeChild(overlay);
  }
  headers_and_images.forEach((node, i) => {
    // Set all headers/images to gray except the current one
    if (i !== idx) {
      node.style.color = 'gray';
    } else {
      node.style.color = 'black';
    }
    if (node.tagName === 'IMG' && i !== idx) {
      node.style.maxWidth = '';
      node.style.maxHeight = '';
      node.style.width = '';
      node.style.height = '';
      node.style.display = '';
      node.style.margin = '';
      node.style.position = '';
      node.style.left = '';
      node.style.top = '';
      node.style.zIndex = '';
      node.style.background = '';
      node.style.transform = '';
    }
  });
  if (el.tagName === 'IMG') {
    // Add overlay
    overlay = document.createElement('div');
    overlay.id = 'presentation-img-overlay';
    overlay.style.position = 'fixed';
    overlay.style.left = '0';
    overlay.style.top = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(80,80,80,0.6)';
    overlay.style.zIndex = '9998';
    overlay.style.pointerEvents = 'none';
    document.body.appendChild(overlay);
    // Enlarge image to fit viewport
    el.style.maxWidth = '100vw';
    el.style.maxHeight = '100vh';
    el.style.width = 'auto';
    el.style.height = 'auto';
    el.style.display = 'block';
    el.style.margin = '0 auto';
    el.style.position = 'fixed';
    el.style.left = '50%';
    el.style.top = '50%';
    el.style.transform = 'translate(-50%, -50%)';
    el.style.zIndex = '9999';
    el.style.background = 'white';
  } else {
    // Remove any previous image enlargement if not focusing an image
    headers_and_images.forEach((node) => {
      if (node.tagName === 'IMG') {
        node.style.maxWidth = '';
        node.style.maxHeight = '';
        node.style.width = '';
        node.style.height = '';
        node.style.display = '';
        node.style.margin = '';
        node.style.position = '';
        node.style.left = '';
        node.style.top = '';
        node.style.transform = '';
        node.style.zIndex = '';
        node.style.background = '';
      }
    });
  }
  setElementsBlack(idx);
  headers_and_images[idx].scrollIntoView({behavior: 'smooth', block: 'start'});
}
// Listen for F4 to activate presentation mode
document.addEventListener('keydown', function(e) {
  // F4 key
  if (!presentation_mode && e.code === 'F4') {
    headers_and_images = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6, img"));
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
    if (headers_and_images.length > 0) {
      currentHeaderIndex = 0;
      highlightHeaderAndSection(0);
    }
    return;
  }
  // Only handle left/right arrows in presentation mode
  if (!presentation_mode) return;
  if (headers_and_images.length === 0) return;
  if (e.code === 'ArrowRight') {
    e.preventDefault();
    if (currentHeaderIndex < headers_and_images.length - 1) {
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