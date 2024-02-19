interface SetupShortcutProps {
  updateLink?: any;
  clearForm: () => void;
  refresh: any;
  confirmDelete: () => void;
  toggleFlag: () => void;
}

export function setupKeyboardShortcuts({
  clearForm,
  refresh,
  confirmDelete,
  toggleFlag,
}: SetupShortcutProps) {
  const disableCmdS = (e: KeyboardEvent) => {
    if (e.ctrlKey) {
      if (e.key === "a") {
        e.preventDefault();
        clearForm();
      }
      if (e.key === "s") {
        e.preventDefault();
        // TODO: I don't know why it sets the link state to be the default link when I call updateLink()
        // updateLink();
        const submitButton = document.querySelector(
          "#submitButton",
        ) as HTMLButtonElement;
        submitButton.click();
      }
      if (e.key === "r") {
        e.preventDefault();
        refresh();
      }
      if (e.key === "d") {
        e.preventDefault();
        confirmDelete();
      }
      if (e.key === "f") {
        e.preventDefault();
        toggleFlag();
      }
    }
  };
  document.addEventListener("keydown", disableCmdS);

  setTimeout(() => {
    const iframe = document.querySelector(
      "iframe#tiny-mce-editor_ifr",
    ) as HTMLIFrameElement;
    if (iframe?.contentDocument) {
      iframe.contentDocument.body.addEventListener("keydown", disableCmdS);
    }
  }, 1000);
}
