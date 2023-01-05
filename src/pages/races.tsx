import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export const RaceCard = ({
  raceImageSrc,
  raceName,
  href,
  isOpponent = false,
}: {
  raceImageSrc: string;
  raceName: string;
  href: string;
  isOpponent?: boolean;
}) => {
  const buttonStyle = isOpponent
    ? `bg-red-700 hover:bg-red-800`
    : `bg-blue-700 hover:bg-blue-800`;

  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <img className="rounded-t-lg" src={raceImageSrc} alt={raceName} />
      </a>
      <div className="p-5">
        <Link
          href={href}
          className={
            `inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300  ` +
            buttonStyle
          }
        >
          {raceName}
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

const FindBuilds: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center gap-8 text-black dark:bg-gray-800 dark:text-white">
        <h1>Select your Race</h1>

        <ul className="grid grid-cols-3 gap-4">
          <li>
            <RaceCard
              href={`/races/zerg/match-ups`}
              raceImageSrc={"/zerg.jpeg"}
              raceName="Zerg"
            />
          </li>
          <li>
            <RaceCard
              href={`/races/protoss/match-ups`}
              raceImageSrc={"/protoss.jpeg"}
              raceName="Protoss"
            />
          </li>
          <li>
            <RaceCard
              href={`/races/terran/match-ups`}
              raceImageSrc={"/terran.jpeg"}
              raceName="Terran"
            />
          </li>
        </ul>
      </main>
    </>
  );
};

export default FindBuilds;