import {  useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Interceptor = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const { fetch: originalFetch } = window;
    window.fetch = async (...args) => {
      let [resource, config] = args;
      /**
       * A fetch() promise will reject with a TypeError when a network error
       * is encountered or CORS is misconfigured on the server-side,
       * although this usually means permission issues or similar
       * — a 404 does not constitute a network error, for example.
       */
      try {
        const response = await originalFetch(resource, config);
        if (response.status === 403) {
          //redirect to log in
          navigate("/login", { replace: true });
        }
        if (response.status === 404) {
          console.log("404 mate box box box box");
        }
        return response;
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }, []);
  return children;
};
