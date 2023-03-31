import React, { useState, useEffect } from "react";

const Home = () => {
  const url = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(url);
    const d = await res.json();
    return setData(d);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row m-3 d-flex justify-content-around">
      <h1 className="text-center">HOME</h1>
      {data.map((dataObj, i) => {
        return (
          <div className="card m-3" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={dataObj.imageUrl}
              alt="img"
            />
            <div className="card-body">
              <h5 className="card-title text-center">{dataObj.firstName} {dataObj.lastName}</h5>
              <p className="text-center">contact : {dataObj.contactNumber}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
