import styles from "../styles/Team.module.scss"
import Image from "next/image";

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
          <Image src="./Image1.png" alt="" />
          <h3>gomestzx</h3>
          <p>A</p>
          <p>Web 2 - "Roadie! 4 Mo Beers!" </p>
          <p>WEB3 - "Roadie! 4 Mo Beers!"</p>
        </div>
        <div
          className={styles.card}
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="2500"
        >
          <Image src="./Image4.png" alt="" />
          <h3>K</h3>
          <p>Community</p>
          <p>Web 2 - "Need more GBs!" </p>
          <p>WEB3 - "Need more NFTs!"</p>
        </div>
        <div
          className={styles.card}
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="2500"
        >
          <Image src="./Image7.png" alt="" />
          <h3>D</h3>
          <p>Engineer</p>
          <p>Web 2 - "Card declined." </p>
          <p>WEB3 - "Etherscan confirmed & approved!"</p>
        </div>
      </div>
    </div>
  )
}
