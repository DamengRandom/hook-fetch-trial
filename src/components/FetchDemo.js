import React, { useContext, useEffect, useState, Suspense } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FAKE_DATA_URL, GET_DATA_DEMO } from "../constants";
import { BaseContext } from "../context";

const UL = styled.ul`
  list-style: none;
  margin-left: 0;

  li {
    padding: 6pt 0;
    border-bottom: 2px solid #cdcdcd;
  }
`;

const ShowData = ({ stateData }) => (
  <div>
    <UL>
      {stateData &&
        stateData.map((data, index) => (
          <li key={`data_${index}`}>
            <Suspense
              fallback={
                <div>
                  <img
                    src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif"
                    alt="loading .."
                  />
                </div>
              }
            >
              {data.title}
              {data.url && (
                <img
                  style={{ width: "120px", height: "120px" }}
                  src={data.url}
                  alt={data.id}
                />
              )}
              <span>
                <Link to={`/fetch-demo/${index}`}>Details</Link>
              </span>
            </Suspense>
          </li>
        ))}
    </UL>
  </div>
);

const Loader = () => <div>Sorry not reachable yet ..</div>;

function FetchDemo() {
  const { state, dispatch } = useContext(BaseContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        await setLoading(true);
        const response = await axios.get(FAKE_DATA_URL);
        await dispatch({ type: GET_DATA_DEMO, payload: response.data });
        // console.log(response.data);
        await sessionStorage.setItem("things", JSON.stringify(response.data));
      } catch (error) {
        console.log("Fetch Error", error);
        await setLoading(false);
      } finally {
        await setLoading(false);
      }
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>{loading ? <Loader /> : <ShowData stateData={state.things} />}</div>
    // <ShowData stateData={state && state.things ? state.things : []} />
  );
}

export default FetchDemo;
