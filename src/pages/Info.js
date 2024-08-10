import React from "react";
import { getData } from "../hooks/Api";
import { useLoaderData, useOutletContext } from "react-router-dom";
import InfoData from "../components/InfoData";
const Info = (props) => {
  const fetchedData = useLoaderData();
  const contextData = useOutletContext();
  return (
    <React.Fragment>
      <div>Info/ {contextData.profile}</div>
      <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
        {fetchedData.map((data) => (
          <InfoData
            key={data.name}
            name={data.name}
            description={data.description}
            title={data.title}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Info;

export function loader({ params }) {
  // const postId = params.id
  const infoDatas = getData();
  return infoDatas;
}
