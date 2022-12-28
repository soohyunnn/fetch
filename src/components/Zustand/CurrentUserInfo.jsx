import axios from "axios";
import React, { useEffect } from "react";
import create from "zustand";

const useStore = create((set) => ({
  userName: "pia",
  fetchUserName: async (id) => {
    const response = await axios.get(`/api/user-name?id=${id}`);
    set({ userName: response.data.name });
  },
}));

function CurrentUser({ id }) {
  const userName = useStore((state) => state.userName);

  return <div>{userName}</div>;
}

export default function CurrentUserInfo() {
  const fetchUserName = useStore((state) => state.fetchUserName);

  return (
    <>
      <CurrentUser />
      <input onChange={(e) => fetchUserName(e.target.value)} />
    </>
  );
}
