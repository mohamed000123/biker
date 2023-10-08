import { useEffect, useState } from "react";
import PickupCard from "../components/pickupCard";
import noAvailableParcels from "../assets/noAbailableParcels.png"
function AvailableParcels() {
  const [parcels, setParcels] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`http://localhost:8000/all-parcels`, {
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
        {parcels.length > 0 ? (
          parcels.map((parcel) => {
            return <PickupCard parcel={parcel} key={parcel.id}></PickupCard>;
          })
        ) : (
          <>
            <h2>no available parcels</h2>
            <img src={noAvailableParcels} className="noAvailableParcels" />
          </>
        )}
      </div>
    </>
  );
}

export default AvailableParcels;
