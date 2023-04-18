export const push = (navigate: any, path: string) => {
  if (path) navigate(path);
};

export const goToSubPage = (navigate: any, path: string) => {
  localStorage.setItem(
    "pageShow",
    `${window.location.pathname}${window.location.search}`
  );
  if (path) navigate(path);
};

export const backToMainPage = (navigate: any) => {
  navigate(localStorage.getItem("pageShow"));
  localStorage.removeItem("pageShow");
};
