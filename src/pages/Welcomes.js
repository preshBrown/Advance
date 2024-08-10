import React, { useEffect } from "react";
import InfoData from "../components/InfoData";
import { useDispatch, useSelector } from "react-redux";
import { initData } from "../store/orderActions";

const Welcomes = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.order.loading);
  const items = useSelector((state) => state.order.items);
  const error = useSelector((state) => state.order.error);

  useEffect(() => {
    dispatch(initData());
    console.log("EFFECT");
  }, [dispatch]);

  useEffect(() => {
    console.log("EFFECT-2");
  }, []);

  let orders = <p>Loading.....</p>;

  if (!loading) {
    orders = (
      <div>
        <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
          {items.map((data) => (
            <InfoData
              key={data._id}
              name={data.creator.name}
              description="from welcome page"
              title={data.title}
            />
          ))}
        </ul>{" "}
      </div>
    );
  }

  if (!loading && items.length === 0 && !error) {
    orders = <p>NO ITEM FOUND</p>;
  }

  return <React.Fragment>
    {error && (<h1> SOMTHING WENT WRONG---{error}</h1>)}
    {orders}
  </React.Fragment>;
};

export default Welcomes;
