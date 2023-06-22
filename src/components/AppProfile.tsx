import React from "react";
import Profile from "./Profile";

const user = [
  {
    image:
      "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_1280.jpg",
    name: "Jamse Taylor",
    job: "Director",
    isNew: false,
  },

  {
    image: "https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601_1280.jpg",
    name: "Mohammed Gandhi",
    job: "Developer",
    isNew: true,
  },

  {
    image:
      "https://cdn.pixabay.com/photo/2015/07/20/12/57/ambassador-852766_1280.jpg",
    name: "Alexen Young",
    job: "Killer",
    isNew: false,
  },
];

export default function AppProfile() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <>
      <button type='button' onClick={handleClick}>
        Button
      </button>

      <ul>
        {user.map((cV, i) => (
          <li style={{ listStyle: "none" }} key={i}>
            <Profile user={cV} />
          </li>
        ))}
      </ul>
    </>
  );
}
