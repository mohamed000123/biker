import { useEffect, useState } from "react";
import PickupCard from "../components/pickupCard";
function DeliveredParcels() {
  const [parcels, setParcels] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`http://localhost:8000/delivered/biker`, {
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
          return <PickupCard parcel={parcel} delivered={true} key={parcel.id}></PickupCard>;
        })}
      </div>
    </>
  );
}

export default DeliveredParcels;
