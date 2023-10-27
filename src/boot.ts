declare global {
  interface Window {
    GLOBAL_VARIABLES: {
      BASE_URL: string;
      HEADERS: any;
    };
  }
}

window.GLOBAL_VARIABLES = {
  BASE_URL: import.meta.env.VITE_BASE_URL,
  HEADERS: {},
};
