// Code taken from this Firefox extension
// https://addons.mozilla.org/en-CA/firefox/addon/video-background-play-fix/

export function setupBackgroundYouTube() {
  handleYouTube();
  window.addEventListener(
    "visibilitychange",
    (evt) => evt.stopImmediatePropagation(),
    true
  );
  handleVimeo();
}

/**
 * Uses the Firefox Page Visibility API
 */
function handleYouTube() {
  const IS_YOUTUBE =
    window.location.hostname.search(/(?:^|.+\.)youtube\.com/) > -1 ||
    window.location.hostname.search(/(?:^|.+\.)youtube-nocookie\.com/) > -1;
  const IS_MOBILE_YOUTUBE = window.location.hostname === "m.youtube.com";
  const IS_DESKTOP_YOUTUBE = IS_YOUTUBE && !IS_MOBILE_YOUTUBE;
  const IS_ANDROID = window.navigator.userAgent.indexOf("Android") > -1;

  if (IS_ANDROID || !IS_DESKTOP_YOUTUBE) {
    if (document.wrappedJSObject) {
      // only available on Firefox
      // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts
      Object.defineProperties(document.wrappedJSObject, {
        hidden: { value: false },
        visibilityState: { value: "visible" },
      });
    }
  }
  // User activity tracking
  if (IS_YOUTUBE) {
    loop(pressKey, 60 * 1000, 10 * 1000); // every minute +/- 5 seconds
  }
}

function pressKey() {
  const keyCodes = [18];
  let key = keyCodes[getRandomInt(0, keyCodes.length)];
  sendKeyEvent("keydown", key);
  sendKeyEvent("keyup", key);
}

function sendKeyEvent(eventName: string, keyboardKey: number) {
  document.dispatchEvent(
    new KeyboardEvent(eventName, {
      bubbles: true,
      cancelable: true,
      keyCode: keyboardKey,
      which: keyboardKey,
    })
  );
}

function loop(aCallback: () => void, aDelay: number, aJitter: number) {
  let jitter = getRandomInt(-aJitter / 2, aJitter / 2);
  let delay = Math.max(aDelay + jitter, 0);

  window.setTimeout(() => {
    aCallback();
    loop(aCallback, aDelay, aJitter);
  }, delay);
}

function getRandomInt(aMin: number, aMax: number) {
  let min = Math.ceil(aMin);
  let max = Math.floor(aMax);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Fullscreen API

function handleVimeo() {
  // Fullscreen API
  const IS_VIMEO = window.location.hostname.search(/(?:^|.+\.)vimeo\.com/) > -1;
  if (IS_VIMEO) {
    window.addEventListener(
      "fullscreenchange",
      (evt) => evt.stopImmediatePropagation(),
      true
    );
  }
}
