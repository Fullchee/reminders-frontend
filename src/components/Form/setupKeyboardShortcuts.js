export function setupKeyboardShortcuts({
  updateLink,
  clearForm,
  refresh,
  confirmDelete,
  toggleFlag,
}) {
  const disableCmdS = (e) => {
    if ((window.navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey) && e.key === 's') {
      e.preventDefault();
      updateLink();
    }
    if (e.ctrlKey) {
      if (e.key === 'a') {
        e.preventDefault();
        clearForm();
      }
      if (e.key === 's') {
        e.preventDefault();
        updateLink();
      }
      if (e.key === 'r') {
        e.preventDefault();
        refresh();
      }
      if (e.key === 'd') {
        e.preventDefault();
        confirmDelete();
      }
      if (e.key === 'f') {
        e.preventDefault();
        toggleFlag();
      }
    }
  };
  document.addEventListener('keydown', disableCmdS);

  setTimeout(() => {
    const iframe = document.querySelector('iframe#tiny-mce-editor_ifr');
    if (iframe) {
      iframe.contentDocument.body.addEventListener('keydown', disableCmdS);
    }
  }, 1000);
}
