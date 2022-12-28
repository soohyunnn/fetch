import React, { useEffect, useRef } from "react";
import create from "zustand";

const useStore = create((set) => ({
  scratches: 0,
  addScratches: () => set((state) => ({ scratches: state.scratches + 1 })),
}));

export default function Scratches() {
  // const scratches = useStore((state) => state.scratches);
  const scratchRef = useRef(useStore.getState().scratches);
  const addScratches = useStore((state) => state.addScratches);

  useEffect(() => {
    useStore.subscribe(
      (scratches) => {
        //동작되는 action(trigger)
        scratchRef.current = scratches;
        console.log(scratches);
        console.log(`scratchRef : ${scratchRef.current}`);
        if (scratches > 3) {
          alert("too many...");
        }
      },
      (state) => state.scratches //어떤 변경이 있을때 동작을 하겠는가 selector
    );
  }, []);

  return (
    <div>
      {scratchRef.current}
      <br />
      <button onClick={addScratches}>Add scratches</button>
    </div>
  );
}
