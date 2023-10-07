import { useEffect, useState } from "react";
import Card from "../components/card";
function PickedParcels() {
  const [parcels, setParcels] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`http://localhost:8000/biker-parcels`, {
          credentials: "include",
        });
        const data = await res.json();
        setParcels(data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  return (
    <>
      <div className="container">
        {parcels.map((parcel) => {
          return <Card parcel={parcel} key={parcel.id}></Card>;
        })}
      </div>
    </>
  );
}

export default PickedParcels;
