import styles from "../styles/Team.module.scss";
import Image from "next/image";

const TeamImage = ({ src, width, quality }) => {
  return `https://storageapi.fleek.one/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/img/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Team() {
  return (
    <div
      className={styles.team}
      data-aos="fade-in"
      data-aos-delay="50"
      data-aos-duration="3000"
      id="team"
    >
      <h1>Team</h1>
      <div className={styles.row}>
        <div
          className={styles.card}
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="2500"
        >
          <Image
            loader={TeamImage}
            alt="Mo Beers"
            src="at.png"
            width={100}
            height={100}
            className="border-2 p-2 mx-auto"
          />
          <h3>Mo Beers</h3>
          <p className="text-2xl text-truePink-600 dark:text-truePink-400 text-center">
            Roadie Kingz
          </p>
          <p className="text-xl text-truePink-600 dark:text-truePink-400">
            Web 2 - &quot;Roadie! 4 Mo Beers!&quot;{" "}
          </p>
          <p className="text-xl text-truePink-600 dark:text-truePink-400">
            WEB3 - &quot;Roadie! 4 Mo Beers!&quot;
          </p>
        </div>
        <div
          className={styles.card}
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="2500"
        >
          <Image
            loader={TeamImage}
            src="ks.jpg"
            alt=""
            height={100}
            width={100}
            className="border-2 p-2 mx-auto"
          />
          <h3>K</h3>
          <p className="text-2xl text-truePink-600 dark:text-truePink-400 text-center">
            Community
          </p>
          <p className="text-xl text-truePink-600 dark:text-truePink-400">
            Web 2 - &quot;Need more GBz!&quot;{" "}
          </p>
          <p className="text-xl text-truePink-600 dark:text-truePink-400">
            WEB3 - &quot;Need more Cryptoz!&quot;
          </p>
        </div>
        <div
          className={styles.card}
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="2500"
        >
          <Image
            loader={TeamImage}
            src="ds.png"
            alt="Roadie Kingz"
            height={100}
            width={100}
            className="border-2 p-2 mx-auto"
          />
          <h3>D</h3>
          <p className="text-2xl text-truePink-600 dark:text-truePink-400 text-center">The Boy</p>
          <p className="text-xl text-truePink-600 dark:text-truePink-400">Web 2 - &quot;Card declined.&quot; </p>
          <p className="text-xl text-truePink-600 dark:text-truePink-400">WEB3 - &quot;Wallet address confirmed!&quot;</p>
        </div>
        <div
          className={styles.card}
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="2500"
        >
          <Image
            loader={TeamImage}
            src="dd.jpg"
            alt="The Rock God"
            height={100}
            width={100}
            className="border-2 p-2 mx-auto"
          />
          <h3>The Rock God</h3>
          <p className="text-2xl text-truePink-600 dark:text-truePink-400 text-center">Engineer</p>
          <p className="text-xl text-truePink-600 dark:text-truePink-400">Web 2 - &quot;Napster Rulez.&quot; </p>
          <p className="text-xl text-truePink-600 dark:text-truePink-400">WEB3 - &quot;NFTz!&quot;</p>
        </div>
      </div>
    </div>
  );
}
