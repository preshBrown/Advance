import { orderActions } from "./orderSlice";

export const initData = () => {
  return (dispatch) => {
    dispatch(orderActions.startOperation());
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/feed/posts");

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }
        console.log("DATA" + data.post);
        dispatch(orderActions.operationSuccessful(data.posts));
      } catch (err) {
        console.log("CATCH error block" + err.message);
        dispatch(orderActions.operationFaild(err.message));
      }
    };
    fetchData();
  };
};
