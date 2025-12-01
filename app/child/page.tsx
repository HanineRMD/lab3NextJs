"use client"; // needed for interactivity

interface ChildProps {
  states: string[]; // type the props
}

export default function Child({ states }: ChildProps) {
  return (
    <>
      <ul>
        {states.map((state, index) => (
          <li key={index}>{state}</li>
        ))}
      </ul>
    </>
  );
}
