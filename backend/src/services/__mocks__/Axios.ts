import Axios from "axios";

const axios = Axios.create();
axios.interceptors.request.use(
  function requestsInterceptor() {
    throw new Error(
      "Outgoing http requests are not allowed. Please rewrite your test and mock the call"
    );
  },
  function requestsInterceptorOnReject(error) {
    return Promise.reject(error);
  }
);

export { axios };
