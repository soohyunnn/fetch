import axios from "axios";
import React from "react";
import {
  atom,
  selector,
  selectorFamily,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import ErrorBoundary from "./ErrorBoundary";

// const currentUserIDState = atom({
//   key: "CurrentUserID",
//   default: 2,
// });

// const tableOfUsers = [{ name: "pia" }, { name: "soo" }];

//동기
// const currentUserNameState = selector({
//   key: "CurrentUserName",
//   get: ({ get }) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });

//비동기
const currentUserNameQuery = selectorFamily({
  key: "CurrentUserName",
  get:
    (id) =>
    async ({ id }) => {
      const response = await axios.get(`/api/user-name?id=${id}`);
      return response.data.name;
    },
});

function CurrentUser() {
  // const userName = useRecoilValue(currentUserNameQuery(1));
  // return <div>{userName}</div>;
  const userName = useRecoilValueLoadable(currentUserNameQuery(2));

  if (userName.state === "loading") {
    return <div>loading...</div>;
  }
  if (userName.state === "hasError") {
    return <div>Someting wrong...</div>;
  }
  return <div>{userName.contents}</div>;
}

export default function CurrentUserInfo() {
  return (
    // <ErrorBoundary>
    //   <React.Suspense fallback={<div>Loading...</div>}>
    <CurrentUser />
    //   </React.Suspense>
    // </ErrorBoundary>
  );
}
