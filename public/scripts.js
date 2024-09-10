const $cursor = document.documentElement;
let waitUntil = null;

function glow(e) {
  $cursor.style.setProperty('--x', e.clientX + 'px');
  $cursor.style.setProperty('--y', e.clientY + 'px');
}

function trail(e) {
  const $div = document.createElement('div');

  $div.classList.add('trail');

  Object.assign($div.style, {
    top: e.pageY + 'px',
    left: e.pageX + 'px',
  });

  document.body.appendChild($div);
  setTimeout(() => document.body.removeChild($div), 500);
}

function throttledActions(e) {
  if (Date.now() >= waitUntil) {
    glow(e);
    // trail(e);

    waitUntil = Date.now() + 1000 / 100;
  }
}

addEventListener('mousemove', throttledActions);
