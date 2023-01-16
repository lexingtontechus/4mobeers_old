export default function Slogan() {
  return (
    <>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden ">
        <div class="sm:max-w-auto relative p-8 sm:mx-auto sm:rounded-lg sm:px-20">
          <h1 class="flex flex-col gap-2 text-center text-8xl font-black md:flex-row lg:tracking-tight xl:text-9xl">
            <span
              class="before:absolute before:-z-10 text-white before:content-[attr(data-text1)]"
              data-text1="4."
            >
              <span class="isolate animate-gradient-1  bg-gradient-to-r from-indigo-400 to-pink-800 bg-clip-text text-transparent">
                4.
              </span>
            </span>
            <span
              class="before:absolute before:-z-10 before:text-zinc-100 before:content-[attr(data-text2)]"
              data-text2="Mo."
            >
              <span class="animate-gradient-2 bg-gradient-to-r from-red-400 to-amber-800 bg-clip-text text-transparent">
                Mo.
              </span>
            </span>

            <span
              class="before:absolute before:-z-10 before:text-zinc-100 before:content-[attr(data-text3)]"
              data-text3="Beers!"
            >
              <span class="animate-gradient-3 bg-gradient-to-r from-indigo-400 to-emerald-800 bg-clip-text text-transparent">
                Beers!
              </span>
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}
