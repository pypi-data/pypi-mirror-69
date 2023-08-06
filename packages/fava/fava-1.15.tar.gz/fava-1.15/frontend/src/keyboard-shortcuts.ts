import { once } from "./lib/events";
import { closeOverlay } from "./stores";

/**
 * Add a tooltip showing the keyboard shortcut over the target element.
 */
function showTooltip(target: HTMLElement): () => void {
  const tooltip = document.createElement("div");
  const isHidden = target.classList.contains("hidden");
  if (isHidden) {
    target.classList.remove("hidden");
  }
  tooltip.className = "keyboard-tooltip";
  tooltip.innerHTML = target.getAttribute("data-key") || "";
  document.body.appendChild(tooltip);
  const parentCoords = target.getBoundingClientRect();
  // Padded 10px to the left if there is space or centered otherwise
  const left =
    parentCoords.left +
    Math.min((target.offsetWidth - tooltip.offsetWidth) / 2, 10);
  const top =
    parentCoords.top + (target.offsetHeight - tooltip.offsetHeight) / 2;
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top + window.pageYOffset}px`;
  return (): void => {
    tooltip.remove();
    if (isHidden) {
      target.classList.add("hidden");
    }
  };
}

/**
 * Show all keyboard shortcut tooltips.
 */
function showTooltips(): () => void {
  const removes: (() => void)[] = [];
  document.querySelectorAll("[data-key]").forEach((el) => {
    el instanceof HTMLElement && removes.push(showTooltip(el));
  });
  return (): void => {
    removes.forEach((r) => r());
  };
}

/**
 * Ignore events originating from editable elements.
 */
function isEditableElement(element: EventTarget | null): boolean {
  return (
    element instanceof HTMLElement &&
    (element instanceof HTMLInputElement ||
      element instanceof HTMLSelectElement ||
      element instanceof HTMLTextAreaElement ||
      element.isContentEditable)
  );
}

type KeyboardEventHandler = (event: KeyboardEvent) => void;
const keyboardShortcuts: Map<string, KeyboardEventHandler> = new Map();
// The last typed character to check for sequences of two keys.
let lastChar = "";

/**
 * Handle a `keydown` event on the document.
 *
 * Dispatch to the relevant handler.
 */
function keydown(event: KeyboardEvent): void {
  if (isEditableElement(event.target)) {
    // ignore events in editable elements.
    return;
  }
  let eventKey = event.key;
  if (event.metaKey) {
    eventKey = `Meta+${eventKey}`;
  }
  if (event.altKey) {
    eventKey = `Alt+${eventKey}`;
  }
  if (event.ctrlKey) {
    eventKey = `Control+${eventKey}`;
  }
  const lastTwoKeys = `${lastChar} ${eventKey}`;
  const lastTwoHandler = keyboardShortcuts.get(lastTwoKeys);
  const keyHandler = keyboardShortcuts.get(eventKey);
  if (lastTwoHandler) {
    lastTwoHandler(event);
  } else if (keyHandler) {
    keyHandler(event);
  }
  if (event.key !== "Alt" && event.key !== "Control" && event.key !== "Shift") {
    lastChar = eventKey;
  }
}

document.addEventListener("keydown", keydown);

/**
 * Bind an event handler to a key.
 */
function bind(key: string, handler: KeyboardEventHandler): () => void {
  const sequence = key.split(" ");
  if (sequence.length > 2) {
    // eslint-disable-next-line no-console
    console.error("Only key sequences of length <=2 are supported: ", key);
  }
  if (keyboardShortcuts.has(key)) {
    // eslint-disable-next-line no-console
    console.error("Duplicate keyboard shortcut: ", key);
  }
  keyboardShortcuts.set(key, handler);
  return (): void => {
    keyboardShortcuts.delete(key);
  };
}

function unbind(key: string): void {
  keyboardShortcuts.delete(key);
}

export const keys = {
  bind,
  unbind,
};

/**
 * A svelte action to attach a global keyboard shortcut.
 *
 * This will attach a listener for the given key (or key sequence of length 2).
 * This listener will focus the given node if it is an <input> element and
 * trigger a click on it otherwise.
 */
export function keyboardShortcut(
  node: HTMLElement,
  key?: string
): { destroy?: () => void } {
  if (!key) {
    return {};
  }
  node.setAttribute("data-key", key);
  bind(key, (event) => {
    if (node instanceof HTMLInputElement) {
      event.preventDefault();
      node.focus();
    } else {
      node.click();
    }
  });

  return {
    destroy(): void {
      unbind(key);
    },
  };
}

export function initCurrentKeyboardShortcuts(): () => void {
  const currentShortcuts: (() => void)[] = [];
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    if (key !== null && !keyboardShortcuts.has(key)) {
      currentShortcuts.push(
        bind(key, () => {
          if (
            element instanceof HTMLButtonElement ||
            element instanceof HTMLAnchorElement
          ) {
            element.click();
          } else if (element instanceof HTMLInputElement) {
            element.focus();
          } else if (element instanceof HTMLElement) {
            element.click();
          }
        })
      );
    }
  });

  return (): void => {
    currentShortcuts.forEach((u) => u());
  };
}

export function initGlobalKeyboardShortcuts(): void {
  bind("?", () => {
    const hide = showTooltips();
    once(document, "mousedown", hide);
    once(document, "keydown", hide);
  });

  bind("Escape", closeOverlay);
}
