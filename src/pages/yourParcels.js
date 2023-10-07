import { useEffect, useState } from "react";
import DropoffCard from "../components/dropoffCard";
function YourParcels() {
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
          return <DropoffCard parcel={parcel} key={parcel.id}></DropoffCard>;
        })}
      </div>
    </>
  );
}

export default YourParcels;
