export const FB_PIXEL_ID = 337542863121198;

export const pageview = () => {
  window.fbq("track", "PageView");
};
export const event = (name, options = {}) => {
  window.fbq("track", name, options);
};
