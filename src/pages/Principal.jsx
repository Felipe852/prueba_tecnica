import React, { useEffect, useState } from "react";
import Button from "../components/Button";

const Principal = () => {
  const [pintar, setPintar] = useState(null);
  const [bandera, setBandera] = useState(false);

  useEffect(() => {
    getItems().then((pintaritems) => setPintar(pintaritems.results));
  }, [bandera]);

  const getItems = async () => {
    const resp = await fetch("https://randomuser.me/api");
    const data = await resp.json();
    return data;
  };

  const handleRandom = () => {
    setBandera(!bandera);
  };

  return (
    <div className="w-screen m-0">
      <div className="h-20 w-screen text-end bg-gray-300 flex items-center justify-end mr-10">
        <div className="h-20 flex items-center">
          <Button text={"Favoritos"} />
        </div>
      </div>
      {pintar ? (
        pintar?.map((items) => (
          <div
            key={items.id.value}
            className="h-full w-1/2 mx-auto flex gap-10"
          >
            <img className="h-56" src={items.picture.large} alt="img" />
            <div className="text-lg gap-5 font-semibold">
              <h1>{items.name.first}</h1>
              <h1>{items.email}</h1>
              <h1>{items.dob.date}</h1>
              <h1>{items.location.state}</h1>
              <h1>{items.phone}</h1>
              <h1>{items.location.country}</h1>
            </div>
          </div>
        ))
      ) : (
        <div className="h-full w-1/2 mx-auto flex gap-10">
          <img
            className="h-56"
            src="https://randomuser.me/api/portraits/men/20.jpg"
            alt="img"
          />
          <div className="text-lg gap-5 font-semibold">
            <h1>Nose</h1>
            <h1>email</h1>
            <h1>date</h1>
            <h1>address</h1>
            <h1>phone</h1>
            <h1>country</h1>
          </div>
        </div>
      )}

      <div className="flex mx-auto w-1/2 mt-10 gap-10">
        <div onClick={handleRandom} className="h-20">
          <Button text={"Random"} />
        </div>
        <div>
          <Button text={"Favoritos"} />
        </div>
      </div>
    </div>
  );
};

export default Principal;
