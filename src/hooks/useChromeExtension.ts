export const useChromeExtension = () => {
  return window.location.protocol === 'chrome-extension:';
};
