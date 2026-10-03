// main.js original: conserva el borde de navegación y las microinteracciones.
// Menú, formulario y descargas ya tienen controladores propios de React/enlaces.
export function initMain() {
  const controller = new AbortController();
  const header = document.querySelector('.site-header');
  let scrollFrame = 0;
  let pressedButton = null;
  const updateNavigation = () => {
    header?.classList.toggle('scrolled', window.scrollY > 30);
  };
  const scheduleNavigation = () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      updateNavigation();
    });
  };
  window.addEventListener('scroll', scheduleNavigation, {
    passive: true,
    signal: controller.signal,
  });
  updateNavigation();
  const releaseButton = () => {
    pressedButton?.classList.remove('br-ui-pressed');
    pressedButton = null;
  };
  document.addEventListener(
    'pointerdown',
    (event) => {
      const button = event.target.closest?.('button, a.button');
      if (event.button !== 0 || !button || button.disabled) return;
      releaseButton();
      pressedButton = button;
      button.classList.add('br-ui-pressed');
    },
    { signal: controller.signal },
  );
  document.addEventListener('pointerup', releaseButton, { signal: controller.signal });
  document.addEventListener('pointercancel', releaseButton, {
    signal: controller.signal,
  });
  window.addEventListener('blur', releaseButton, { signal: controller.signal });
  return () => {
    controller.abort();
    cancelAnimationFrame(scrollFrame);
    releaseButton();
  };
}
