function HeroGrid() {
  return (
    <section className="grid grid-cols-3 px-4 lg:px-16 min-h-[80vh] gap-x-4 ">
      <div className="relative border-red-500 col-span-2 rounded-2xl">
        <img
          src={
            "https://s3-alpha-sig.figma.com/img/3071/b1fc/729091cd0452fb9d0b89106ceec16368?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MCMcrumw-QFHyd-1gGlF8f61GhSNPlakY6I9gU-1A2RYHScKdyuxCjpAm525H98zjRNV1Hxee1W2oeQJPHIxn7QSeZklFhBU8v61BRcIUo9SyT7aZgMfI1fycM9HTq4fJarsdQg7PeuwKjQRzS2W3bMNP~wz-wbQv6A7lGnGzvke3uPCR24eYJ8zJ1k53lliZvKx0qDSyTMhVOOXI-UTW7ZwVO5ELB-Ez2tAjo3NPyIdXYcQwfwvbfg4WR1upABAq90GmZA2Vt24gwoZvn15JeuM5zeeFfLod1gtatpDqvDC97E7xxDI911yAT2~sL3neiVz9~S6jwm-tdyLnw9dqA__"
          }
          className="rounded-2xl w-full h-full object-cover"
          alt="hero"
        />
        <div className="absolute top-8 left-8">
          <h1 className="text-6xl  text-white">
            Color of <br /> Summer
            <br /> Outfit
          </h1>
          <p className="text-white text-xl mt-4">
            100+ Collections for your <br /> outfit inspirations <br />
            in this summer
          </p>
        </div>
      </div>
      <div className="col-span-1 grid grid-rows-2 gap-y-4">
        <div className="rounded-2xl relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/17aa/3a2f/29a85f64d93c41afa6b64d31b3a88038?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=liyGnBWon2Ek4nQzQZfub~8iHGtAjIJ26ioT-Ctf84o150xxHyIMjqUrbFIIs9ocBB~Qp2tw~gGAvujBQ0FnjGU083aqlkv~tu3JBgM1a38hVTZYngFsrvZDfe9lBm-fo7D2M~Lw-LIQhIbPPHP9bo~oI1o3~b04G4BWt3Kmrl29-3gFl~xaqdc~POnJcqpmsKxHvhtAf~mROoYGPf4GJ0ZyM50pmwCd7nG-MwuoJFfbhTuh59cNAhmQmuz-JNJmG-nCuMqN0CuSsIzTCOejMkcR18EUaDupTjKIauS2~7qU-PEAs8w85G9TubROGq7osAAJayvpD8Oj1TICBdEItQ__"
            alt="Featured product"
            className="rounded-2xl w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <h1 className="text-5xl  text-black">
              Outdoor <br /> Active
            </h1>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/837e/11f0/0233936f837e7b69d6a545511b1ba132?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SRmUmMCKLNk1QYES2N7j~p3NvgFc5nYQwBj5rPQeFaBBFnMXf3b5Mjd~2RZZ1j69gtvkrZXLzEmOhOwGESBzFP1d2dCP0bvvuHylVS-3xedr~oQ86ca3B6qZbZ9bwBqARhDtJpxAm0HJQNEd-AFE4~T8SMttFxy74m36pPKxGTkJQBvqO1iPhYKRhNdkRFWUG2L84x1Ob7uyFi~dA6u5~nFq0~uigd9b0kCYk07nKlTV3iLtQzlnUNp9TPBeRuT4EYgOoUdtcmdCMONEnXhQGGtXBwI7cyPxiEgmcQcA63KBl422oTb5eMoxKTDXSrcI8KtW4uAhswgjKjnRxws1~w__"
            alt="Featured product"
            className="rounded-2xl w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <h1 className="text-5xl  text-black">
              Casual <br /> Comfort
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroGrid;
