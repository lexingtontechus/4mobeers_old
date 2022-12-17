import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ActiveLink({ children, href }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={classNames(
        router.asPath === href
          ? "bg-truePurple-700 decoration-trueZinc-700 dark:text-trueZinc-100 decoration-solid underline-offset-8 text-trueZinc-700 dark:text-trueZinc-100"
          : "text-trueZinc-700 hover:underline hover:decoration-trueZinc-700 dark:text-trueZinc-100 dark:hover:decoration-trueZinc-100",
        "block px-3 py-2 rounded-md text-base font-medium"
      )}
    >
      {children}
    </a>
  );
}

export default ActiveLink;
