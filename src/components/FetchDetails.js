import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FetchDetails(props) {
  const [currentDetail, setDetail] = useState([]);
  console.log(props);
  const sessionState = sessionStorage.getItem("things");
  useEffect(() => {
    if (sessionState) {
      const details = JSON.parse(sessionState).filter(
        data => data.id.toString() === props.match.params.id
      );
      setDetail(details[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>Details</p>
      {currentDetail && (
        <>
          <h2>{currentDetail.id}</h2>
          <p>{currentDetail.title}</p>
          {/* <p>{currentDetail.body}</p> */}
        </>
      )}
      <Link to="/fetch-demo">back</Link>
    </div>
  );
}

export default FetchDetails;
