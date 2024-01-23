import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data: randomCharacter, isLoading } = useSWR(
    "/api/random-character",
    fetcher
  );
  if (isLoading) {
    return <h1>...loading....</h1>;
  }

  return (
    <>
      <h1>
        Hi, my name is {randomCharacter.firstName} {randomCharacter.lastName}{" "}
        ⭐️
      </h1>
      <p>
        I am {randomCharacter.age} years old and my pet is a{" "}
        {randomCharacter.pet}.
      </p>
    </>
  );
}
