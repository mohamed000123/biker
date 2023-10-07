import { Button } from "@mui/material";

export default function DropoffCard({ parcel }) {
  async function bookParcel(id) {
    try {
      const res = await fetch(`http://localhost:8000/deliver/parcel/${id}`, {
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="parcel">
      <p>
        parcel name:
        <span style={{ color: "blue" }}>{parcel.name}</span>
      </p>
      <p>
        pickup location:
        <span style={{ color: "blue" }}>{parcel.pickupAddress}</span>
      </p>
      <p>
        drop off location:
        <span style={{ color: "blue" }}>{parcel.deliveryAddress}</span>
      </p>
      <p>
        parcel status:
        <span style={{ color: "red" }}>{parcel.status}</span>
      </p>
      <Button
        variant="contained"
        onClick={() => {
          bookParcel(parcel.id);
        }}
      >
        delivered
      </Button>
    </div>
  );
}
