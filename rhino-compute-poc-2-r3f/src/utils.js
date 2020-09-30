// https://discourse.mcneel.com/t/in-browser-python-interpreter/92055/7
export const fetchJsFromCDN = (src, key) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.addEventListener("load", () => {
      resolve(window[key]);
    });
    script.addEventListener("error", reject);
    document.body.appendChild(script);
  });
};