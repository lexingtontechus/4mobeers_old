import styles from "../styles/Team.module.scss";
import Image from "next/image";

const TeamImage = ({ src, width, quality }) => {
  return `https://storageapi.fleek.one/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/img/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Team() {
  return (
    <div id="team" className="my-8">
      <h1 className=" uppercase text-center text-8xl xl:text-9xl font-black animate-linear bg-gradient-to-r from-trueRed-500 via-trueEmerald-500 to-trueRed-500 bg-[length:200%_auto] bg-clip-text text-transparent">
        Team
      </h1>
      <h2 className="text-center text-5xl xl:text-6xl uppercase font-black text-Zinc-500">
        Roadie Crew
      </h2>
      <div className="flex flex-wrap mt-8">
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
          <Image
            loader={TeamImage}
            alt="Beer Shark"
            src="at.png"
            width={100}
            height={100}
            className="border-2 p-2 mx-auto animate-bounce"
          />
          <h3 className="text-3xl text-truePurple-900 text-center">Mo Beers</h3>
          <p className="text-2xl text-truePink-600 dark:text-truePink-400 text-center">
            Beer Shark
          </p>
          <p className="text-xl text-trueZinc-700 dark:text-trueZinc-400 text-center">
            Web 2 - &quot;Roadie! 4 Mo Beers!&quot;{" "}
          </p>
          <p className="text-xl animate-linear bg-gradient-to-r from-trueRed-500 via-trueEmerald-500 to-trueRed-500 bg-[length:200%_auto] bg-clip-text text-transparent text-center">
            WEB3 - &quot;Roadie! 4 Mo Beers!&quot;
          </p>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
          <Image
            loader={TeamImage}
            src="ks.jpg"
            alt="K Monster"
            height={100}
            width={100}
            className="border-2 p-2 mx-auto motion-safe:animate-bounce"
          />
          <h3 className="text-3xl text-truePurple-900 text-center">
            K Monster
          </h3>
          <p className="text-2xl text-truePink-600 dark:text-truePink-400 text-center">
            The Wrangler
          </p>
          <p className="text-xl text-trueZinc-700 dark:text-trueZinc-400 text-center">
            Web 2 - &quot;Need more GBz!&quot;{" "}
          </p>
          <p className="text-xl animate-linear bg-gradient-to-r from-trueRed-500 via-trueEmerald-500 to-trueRed-500 bg-[length:200%_auto] bg-clip-text text-transparent text-center">
            WEB3 - &quot;Need more Cryptoz!&quot;
          </p>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
          <Image
            loader={TeamImage}
            src="ds.png"
            alt="Roadie King"
            height={100}
            width={100}
            className="border-2 p-2 mx-auto animate-bounce"
          />
          <h3 className="text-3xl text-truePurple-900 text-center">D</h3>
          <p className="text-2xl text-truePink-600 dark:text-truePink-400 text-center">
            Roadie King
          </p>
          <p className="text-xl text-trueZinc-700 dark:text-trueZinc-400 text-center">
            Web 2 - &quot;Card declined.&quot;{" "}
          </p>
          <p className="text-xl animate-linear bg-gradient-to-r from-trueRed-500 via-trueEmerald-500 to-trueRed-500 bg-[length:200%_auto] bg-clip-text text-transparent text-center">
            WEB3 - &quot;Connect Wallet!&quot;
          </p>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
          <Image
            loader={TeamImage}
            src="dd.jpg"
            alt="The Rock God"
            height={100}
            width={100}
            className="border-2 p-2 mx-auto animate-bounce"
          />
          <h3 className="text-3xl text-truePurple-900 text-center">
            The Rock God
          </h3>
          <p className="text-2xl text-truePink-600 dark:text-truePink-400 text-center">
            Vibe Machine
          </p>
          <p className="text-xl text-trueZinc-700 dark:text-trueZinc-400 text-center">
            Web 2 - &quot;Napster Rulez.&quot;{" "}
          </p>
          <p className="text-xl animate-linear bg-gradient-to-r from-trueRed-500 via-trueEmerald-500 to-trueRed-500 bg-[length:200%_auto] bg-clip-text text-transparent text-center">
            WEB3 - &quot;NFTz!&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
