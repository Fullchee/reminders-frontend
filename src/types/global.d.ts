// empty export is intentional: https://stackoverflow.com/a/12709880/8479344
// eslint-disable-next-line import/prefer-default-export
export {};

declare global {
  interface Document {
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts
    wrappedJSObject?: any;
  }
}
