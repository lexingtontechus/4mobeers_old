import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer, faBeerMugEmpty, fa4 } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Hero.module.scss";

const HeroImage = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/${src}?w=${width}&q=${
    quality || 75
  }`;
};
export default function Hero() {
  return (
    <>
      <Container className={styles.hero}>
        {/*px-8 flex flex-wrap */}
        <div
          className={styles.row}
          data-aos="fade-in"
          data-aos-delay="50"
          data-aos-duration="3000"
        >
          <h1 className="text-center flex">4 Mo Beers!</h1>

          <div className="flex items-center place-content-center align=center">
            <div className="visible lg:block">
              <div className={styles.mainImg}>
                <Image
                  loader={HeroImage}
                  alt="Beer"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFIUlEQVR4nO2azW8bRRiHn7UT23GcTychKbSkKEWCShAi0qpIQCMuvSBOcKkEKge4Vr1xy38AKDdOnHtBQqAIBEJCVaUQoKEVQmpL2pKkSR2TOPZubMf7wWGd2ml2vR8zDaDsI1lez/zm6/XMO/PuLkRERERERERERBxOFJHC1jcvdJId+ZHM8Djt6Vi4SnQoXvGn1WsG25WrlMxzypv3t0O19wjhOr1L9skr9D0zEXrwAEbJv7atPU5316t0K9+Gbu/RKoVKZ4Ze3JfW/xb0vAGKS9WWDlvfwcaX9u/qUvB20+kzwQs5IzYD2tP7l1D3WffBg53Xfda+rtwDfSN4u/E2sX43Ia2ihxR/sP9lNywdCrOgXYfqHenNB0VsCTjx1zQYl6RX+7iQPwOMovQqHydiM2DJwYGt/CFU5UEjfwb8zzj0BpDrBFMpGB2FZBKqVcjnQVX3ajIZGBgQ1pxe2LCafmrALSxmdcOY+eXlwVW/XZY3A1IpGByEjg6Ixezvo0ehq6uhyWTsNFHNfjqBcRQ+amuL3z51bfM9v92WZ4CeHuf0bLZxPTgoR9OatKJYn59a2PjQj1ieAeJtzgegRLJx3Z5wLhtU4wMFPnnl182nvXTyDGDozoHNTrVxXdtxLhtU44+UETcveonkGWBryzmwyecb1+vrzmWDavxiKee8JPJ2gfUbYK609t6qah+eQmrUCmxqUNVh7nz/w0Bs8lp+MqbEfnLo1ahXt8UMYOpQK4C6CJVcYwCtUNVQmnwJNlyKzb80MH96wTGqTLVuSHgG/Ab9XdDXA2occjkwjEZ2PA6DQ9CVsX+raiiNWouz0dEPA2lQFNA0wGWpBETMAL29e69TSbhzt56gwLGjkOoQ1MBmzwjQtAt0dSPLAHKPwqkO+yADkOncO7DQmgzVWLAtMAjyY4FEfR9PuuznITSmKadrTsg3wE59H6+67OcyNRKQa4ByueG9NRXKDneuw2iqZandbEbMCRYKdpBiWaCWINfkmCxgaRmGhhrrOaxm9QFk+yDd2bQLyEHMAKur9scNw2idH0STywMhToMeyL0fICnW36cp5kBzfxB0ZiF/ysVPVry6LM8Au3H8Lrtx/PIylEpimuERWFvbM/Wbb4i02CTuumfZyHOCsmJ9N01fr3N6CxSUWS+NPAPIivXdNG7p7pRjJp96ieQZQFas76ZxS3fn4tWJvnteInkGkBXru2k2N/32RAPl3bnx/s/8iOU5QcFYv6VmrfUuAGgW3IxZzBoJfWb+5NCa327L3QZDxvqeGodzz9x4v9DLHbsc+gcjh94AQktg6rklqxzrlDIV3TDL2+xk9h6V02xb8LqU+oUM8FTtrnorebLlIxsvjG0No1jArFXBtLwLAMPWA2nRkNASOFG+/pVIeb3wN7X1NcxqxffgAU7w59ci7TYjZIBj1vr7Y+XfPVy6M8a2hr5VCFzuOHe04Z3chTBtOiFkgAtT05XXKt9PPlu5Efi1EKMYfPBj5mLpjPHz5KV3PpZ2h0SKA7t8eTpx84nszO3E828vJ473luK9nvVWlhZ9TfsMmnXEur81Zi5+kezTP5iemm7xBlZEREREREQQZJ/j49gvLHU4fGL1/Bj2EVwB2uvlathPAHTse5xG/bvs8NHq+VKQYYBe4AiQBbol1dkKCyhiPyRYBYKfqJoQ7ewE9uD/TVaAa2ELi94P8B/B/EeRMV17sGfBAAe/BO4DWyKVHZQTTNXzgjhBA/vR1mN1gv8AhHI5RNEtzwEAAAAASUVORK5CYII="
                  width={200}
                  height={200}
                  className={styles.token}
                />
                {/* <Image
                  className={Hero.token}
                  loader={HeroImage}
                  alt="Beer"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD1UlEQVRoge2azUsVURjGf5paWhqZRSaopFSUBO0kBQ3sQ8QKtVpEIRRC0CZrGWVRtGgdtSx3BQbRzvAP6IOoRUFakF9Zi7JSozC9LeY9zTidO805955LQQ8czsw5z8z7Pvd8ve8o/Me/iRbgO5BwXGaAXTYOZsfktQJ5NgYMUQDss3kwrpD1UrcDWY5Ku9jY4FJIqdSDNkZiQr17jc3DcYWUSP3FxkhMqHeXRLKSIK6QfKmnbIzExLTUSxza4AferpLr0Eae2Jh1aOPX9uga1nbiTq2wIVdFocK1kCFg3tSIBY66enHwF1sHDJD8Vx0FOoBCKW14W2vUSPQDJwL3s8AFoNyVEHWe5CYRMwoUa54vBsY0/FngsMbOXIg3gzcbevGijKxUhcwBndLWqHGsQ/paxPFRoFnaDmj4PdJXL1zVvhW4C3zSPJMAHgJbUhGSAN5LW4HGQKH0BZ0akbblGn619IWnXhgFwCbgJPBGOFP4P5KVkCFpq9Y4VmQopED63oXaLwKv8c6veenvA3YCi4FrATFGIxN0ql7aejSOtUlfs4gZAXZLW4eG3yh9nfy+LpKVmyExDzBYM+EhP4K3UMNGXgIrNc8X441kmD+AHy2UBtqfA7VAjjhZDnTjrxklRk2zFlMh3cB9jUPBMoa3sIukdCQRERRTFbJTm8SPmoCYJuCUXN8wFeKqzLFwwedE+KKc7wM2y3Xs9EJn3PTgM+FHoUI4E8BSuZ6OfCJCiOnBZ8qPQjb+KAZ9sxJievCZ8uP6k7IQ04PPlB+FfOF8DfpmGv0qmMY61rGRBmp7/4Afvc/ZCmmSugt/qnRJ24408KNQKfUE/rqbjPtwqgefKT8Kp4VzFdgo1y9shdgcfCb8KKj04RCwR677TYUMEj8mSqUkQzVeEDmFt4FcEf45UyGQmQwxGW5L/3W5fyr3202FZCpD1OGg9H0G1gLb5H4Cg+/SykCmMsQw9gPfpE/tdnfk/mxcEUEhCTKTIdYBK/CmzK1A+yXh78UfndW2QjKRIYbLNP4nokq86ZQAjpmICArJVIY4AXwEHgFn8NdmFTAsnHtYRAzhues6QwwjGziOn1T1439YtxJSQ2YyxEVAGd7OdJ6Fa6iXFL7YRzmejhLOEHWjPYjl3xf/JGQYb4qV4u0wrcCzCGdN+ZPAE7yYqo40RdA6p8o0vGXA4zTwV6XDaR3ChtSh1AC8ktIgbfVp4Bsj7nBZvTwFGE8j28Tqr0PU9yMd0pmy6mA98nFH5K3UdbaGYkBFDOMObXAZ92eJKiowdII8ETPuUMCYiMjE/7z8h3P8BG1HMLt0Do93AAAAAElFTkSuQmCC"
                  width={150}
                  height={150}
                />*/}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
