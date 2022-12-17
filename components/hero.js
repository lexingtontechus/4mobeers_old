import Image from "next/image";
import Link from "next/link";
import Container from "./container";

const HeroImage = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/${src}?w=${width}&q=${quality || 75}`;
};
export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-trueZinc-700 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-trueZinc-100">
              WEB3 & Sustainable Ecosystems
            </h1>
            <div className="pt-8 text-xl leading-normal text-trueZinc-700 lg:text-xl xl:text-2xl dark:text-trueZinc-100">
              Transitioning to a world of new protocols, digital ownership and
              systems powering new technologies.
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="visible lg:block">
            <Image
            loader={HeroImage}
              src="/hero.png"
              width={200}
              height={200}
              alt="0xhero"
              priority="true"
              className="inline-flex h-content w-auto rounded-half h-auto align-middle border-2 max-w-150-px"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl text-center text-trueZinc-700 dark:text-trueZinc-100">
            Building diverse companies in Southern California.
          </h2>
        </div>
      </Container>
    </>
  );
}
