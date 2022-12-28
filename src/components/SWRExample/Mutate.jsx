import React from "react";
import axios from "axios";
import useSWR, { SWRConfig, useSWRConfig } from "swr";

export default function Mutate() {
  return (
    <SWRConfig>
      <Page />
      <Profile />
    </SWRConfig>
  );
}

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

const Page = () => {
  const { data } = useSWR("/api/user/123", fetcher);
  const { mutate } = useSWRConfig();

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>My name is {data.name}.</h1>
      <button
        onClick={async () => {
          const newName = data.name.toUpperCase();

          mutate("/api/user", { ...data, name: newName }, false);

          mutate("/api/user");
        }}
      >
        Uppercase my name!
      </button>
    </div>
  );
};

const Profile = () => {
  const { data, mutate } = useSWR("/api/user/123", fetcher);

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>My name is {data.name}.</h1>
      <button
        onClick={async () => {
          const newName = data.name.toUpperCase();

          mutate({ ...data, name: newName }, false);

          mutate();
        }}
      >
        Uppercase my name!
      </button>
    </div>
  );
};
