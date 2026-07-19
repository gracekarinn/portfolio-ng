import Image from "next/image";

export function TarotCard() {
  return (
    <div
      className="tarot-card-frame mx-auto"
      aria-label="The Fool tarot card with portrait"
    >
      <div className="relative aspect-[2/3] w-full bg-white shadow-none dark:bg-[#1a1410] dark:shadow-[0_10px_40px_rgba(212,165,116,0.25)] border-[4px] sm:border-[5px] md:border-[6px] border-double border-[#3a2c1a] dark:border-[#d4a574] rounded-2xl p-2 sm:p-2.5 md:p-3">
        <div className="relative w-full h-full border border-[#3a2c1a]/70 dark:border-[#d4a574]/50 rounded-xl p-2.5 sm:p-3 md:p-4 flex flex-col">
          <span className="absolute top-1 sm:top-1.5 left-1 sm:left-1.5 text-[#3a2c1a]/60 dark:text-[#d4a574]/60 text-[0.625rem] sm:text-xs">
            ✦
          </span>
          <span className="absolute top-1 sm:top-1.5 right-1 sm:right-1.5 text-[#3a2c1a]/60 dark:text-[#d4a574]/60 text-[0.625rem] sm:text-xs">
            ✦
          </span>
          <span className="absolute bottom-1 sm:bottom-1.5 left-1 sm:left-1.5 text-[#3a2c1a]/60 dark:text-[#d4a574]/60 text-[0.625rem] sm:text-xs">
            ✦
          </span>
          <span className="absolute bottom-1 sm:bottom-1.5 right-1 sm:right-1.5 text-[#3a2c1a]/60 dark:text-[#d4a574]/60 text-[0.625rem] sm:text-xs">
            ✦
          </span>

          <div className="text-center mb-1.5 sm:mb-2">
            <div className="font-serif text-[#3a2c1a] dark:text-[#d4a574] text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] tracking-[0.25em] uppercase">
              0
            </div>
            <div className="mx-auto mt-0.5 sm:mt-1 h-px w-10 sm:w-12 md:w-16 bg-[#3a2c1a]/50 dark:bg-[#d4a574]/50" />
          </div>

          <div className="relative flex-1 overflow-hidden border border-[#3a2c1a]/40 dark:border-[#d4a574]/30 rounded-lg bg-white dark:bg-gradient-to-b dark:from-[#2a1f18] dark:via-[#3a2a1f] dark:to-[#4a3a2a]">
            <div className="absolute inset-x-4 sm:inset-x-5 md:inset-x-6 top-2 sm:top-3 md:top-4 bottom-10 sm:bottom-11 md:bottom-14 overflow-hidden rounded-t-full border border-[#3a2c1a]/30 dark:border-[#d4a574]/40 bg-slate-200 dark:bg-slate-800">
              <Image
                src="/me.jpeg"
                alt="Portrait of Grace Karina"
                fill
                priority
                sizes="(max-width: 639px) calc(100vw - 5.25rem), (max-width: 1023px) 20rem, 22rem"
                className="object-cover"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 h-8 sm:h-10 md:h-12 bg-[#8a6a3a] dark:bg-[#4a3a2a] rounded-b-lg">
              <div className="absolute inset-x-2 top-0.5 sm:top-1 h-px bg-[#3a2c1a]/30 dark:bg-[#d4a574]/20" />
              <span className="absolute bottom-1/4 max-sm:bottom-1/8 left-1/2 whitespace-nowrap -translate-x-1/2 font-serif tracking-[0.25em] uppercase text-[#f4ecd8] dark:text-[#d4a574]">Le Fou</span>
              <span className="absolute bottom-1 right-2 h-7 w-9 sm:h-8 sm:w-10">
                <Image
                  src="/dog-transparent.png"
                  alt=""
                  fill
                  sizes="(max-width: 639px) 2.25rem, 2.5rem"
                  className="object-contain"
                />
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
