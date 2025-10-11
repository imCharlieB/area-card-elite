import type { ActionHandlerEvent } from "../types";

export interface ActionHandlerOptions {
  hasHold?: boolean;
  hasDoubleClick?: boolean;
}

export function actionHandler(options: ActionHandlerOptions = {}) {
  return (element: HTMLElement) => {
    let holdTimeout: number;
    let clickCount = 0;
    let clickTimeout: number;

    const handleStart = (e: Event) => {
      if (options.hasHold) {
        holdTimeout = window.setTimeout(() => {
          fireEvent(element, "action", { action: "hold" });
        }, 500);
      }
    };

    const handleEnd = (e: Event) => {
      clearTimeout(holdTimeout);
      
      if (options.hasDoubleClick) {
        clickCount++;
        if (clickCount === 1) {
          clickTimeout = window.setTimeout(() => {
            fireEvent(element, "action", { action: "tap" });
            clickCount = 0;
          }, 250);
        } else if (clickCount === 2) {
          clearTimeout(clickTimeout);
          fireEvent(element, "action", { action: "double_tap" });
          clickCount = 0;
        }
      } else {
        fireEvent(element, "action", { action: "tap" });
      }
    };

    element.addEventListener("mousedown", handleStart);
    element.addEventListener("mouseup", handleEnd);
    element.addEventListener("touchstart", handleStart);
    element.addEventListener("touchend", handleEnd);

    return () => {
      element.removeEventListener("mousedown", handleStart);
      element.removeEventListener("mouseup", handleEnd);
      element.removeEventListener("touchstart", handleStart);
      element.removeEventListener("touchend", handleEnd);
    };
  };
}

function fireEvent(element: HTMLElement, type: string, detail: any) {
  const event = new CustomEvent(type, {
    detail,
    bubbles: true,
    composed: true,
  });
  element.dispatchEvent(event);
}