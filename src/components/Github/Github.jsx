import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData();
  //const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Tamannadk")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center bg-gray-600 m-4 text-white p-4">
      Github Followers :{data.followers}
      <img src={data.avatar_url} alt="profile pic" width={300} />
    </div>
  );
};

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Tamannadk");
  return response.json();
};
