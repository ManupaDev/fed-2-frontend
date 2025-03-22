import Hero from "./components/Hero";
import Products from "./components/Products";

function HomePage() {
  const colorOptions = [
    { id: "red-pastel", name: "RED PASTEL", color: "#e86464" },
    { id: "lime-green", name: "LIME GREEN", color: "#c2e359" },
    { id: "navy-blue", name: "NAVY BLUE", color: "#2d3b6c" },
    { id: "clean-white", name: "CLEAN WHITE", color: "#f5f5f5" },
    { id: "blue-sky", name: "BLUE SKY", color: "#6bb5e8" },
    { id: "purple", name: "PURPLE", color: "#9c59e3" },
    { id: "pink", name: "PINK", color: "#e85986" },
    { id: "yellow", name: "YELLOW", color: "#f7ca4d" },
    { id: "dark-green", name: "DARK GREEN", color: "#2a7d5f" },
  ];

  return (
    <main>
      <section className="grid grid-cols-3 px-16 min-h-[80vh] gap-x-4 ">
        <div className="relative  border-red-500 col-span-2 rounded-2xl">
          <img
            src={
              "https://s3-alpha-sig.figma.com/img/3071/b1fc/729091cd0452fb9d0b89106ceec16368?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MCMcrumw-QFHyd-1gGlF8f61GhSNPlakY6I9gU-1A2RYHScKdyuxCjpAm525H98zjRNV1Hxee1W2oeQJPHIxn7QSeZklFhBU8v61BRcIUo9SyT7aZgMfI1fycM9HTq4fJarsdQg7PeuwKjQRzS2W3bMNP~wz-wbQv6A7lGnGzvke3uPCR24eYJ8zJ1k53lliZvKx0qDSyTMhVOOXI-UTW7ZwVO5ELB-Ez2tAjo3NPyIdXYcQwfwvbfg4WR1upABAq90GmZA2Vt24gwoZvn15JeuM5zeeFfLod1gtatpDqvDC97E7xxDI911yAT2~sL3neiVz9~S6jwm-tdyLnw9dqA__"
            }
            className="rounded-2xl w-full h-full object-cover"
            alt="hero"
          />
        </div>
        <div className="col-span-1 grid  grid-rows-2 gap-y-4">
          <div className="rounded-2xl relative">
            <img
              src="https://s3-alpha-sig.figma.com/img/17aa/3a2f/29a85f64d93c41afa6b64d31b3a88038?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=liyGnBWon2Ek4nQzQZfub~8iHGtAjIJ26ioT-Ctf84o150xxHyIMjqUrbFIIs9ocBB~Qp2tw~gGAvujBQ0FnjGU083aqlkv~tu3JBgM1a38hVTZYngFsrvZDfe9lBm-fo7D2M~Lw-LIQhIbPPHP9bo~oI1o3~b04G4BWt3Kmrl29-3gFl~xaqdc~POnJcqpmsKxHvhtAf~mROoYGPf4GJ0ZyM50pmwCd7nG-MwuoJFfbhTuh59cNAhmQmuz-JNJmG-nCuMqN0CuSsIzTCOejMkcR18EUaDupTjKIauS2~7qU-PEAs8w85G9TubROGq7osAAJayvpD8Oj1TICBdEItQ__"
              alt=""
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <img
              src="https://s3-alpha-sig.figma.com/img/837e/11f0/0233936f837e7b69d6a545511b1ba132?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SRmUmMCKLNk1QYES2N7j~p3NvgFc5nYQwBj5rPQeFaBBFnMXf3b5Mjd~2RZZ1j69gtvkrZXLzEmOhOwGESBzFP1d2dCP0bvvuHylVS-3xedr~oQ86ca3B6qZbZ9bwBqARhDtJpxAm0HJQNEd-AFE4~T8SMttFxy74m36pPKxGTkJQBvqO1iPhYKRhNdkRFWUG2L84x1Ob7uyFi~dA6u5~nFq0~uigd9b0kCYk07nKlTV3iLtQzlnUNp9TPBeRuT4EYgOoUdtcmdCMONEnXhQGGtXBwI7cyPxiEgmcQcA63KBl422oTb5eMoxKTDXSrcI8KtW4uAhswgjKjnRxws1~w__"
              alt=""
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="px-16 grid grid-cols-8 mt-4 gap-x-4 h-80 pb-8">
        <div className=" col-span-2">
          <h1 className="text-6xl">Casual Inspirations</h1>
          <p className="mt-4">
            Our favorite combinations for casual outfit that can inspire you to
            apply on your daily activity.
          </p>
          <button className="mt-8 text-center w-full h-12 rounded-full border border-black flex items-center justify-center">
            BROWSE INPIRATIONS
          </button>
        </div>
        <div className="relative col-span-3 rounded-2xl">
          <img
            src="https://s3-alpha-sig.figma.com/img/5e14/3183/ca0df25c3d226a223269e70541e09760?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KGwwSVVr37GRllzWBFQToWUrc2nhQ1803P8tympO92Rnk5MFV~HU~BbcG191tI3uqByBaXstAcri1SeKurP8r-1wqcn3GQk35yg4ICtcI6pytK2Sz0hYaxRgsn8R20lMWgvY0ClvyvCPApxhs6loZvJeAlfuOIO~iCM57FTZpmUZaQWY4Lza0-bEbexFJJtL3UN5jQ-UpVNzh4UKpqWH1yYKGDEyHOifPgZuPHAqBJSBPcDrW5kF6MW2ac77htW1EZqpgmRMP1~PvDXlxJJ5I87IiEjEwKeOi9-yPQTH4AdPky7zGtvVkcVvTKh5AQBj7h85Kc8IteWQ1SQU5RloGg__"
            alt=""
            className="rounded-2xl absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="relative col-span-3 rounded-2xl">
          <img
            src="https://s3-alpha-sig.figma.com/img/b0b7/82c0/2a24c60e5479cec788203caf906828d8?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U~oXRSwTEZ5tlTYy1QKBY9BDCK72muPgpRH-svtQy2yMgz2BAJ~zuPxmd5nhw2~zto-K2sQYqVacHsJazp6OkeEkCfckQ1OMaZla9NqdqB~KnDzZg1vmPbdU8utsnAkBFMBevvtr47SmrBTcHuD9TxS8hXDsOY8X1VBq4W8fcTe1e17z9P6XkMZ5VPVdAhAWE6dFN3s4RcjwQTWVFZtXhhCojJDLOzF7wbAmACdFvWZb-fixi7Z1v5BDloyr-SU1CwJllbXl16mmFFAN5nXuxv3QXX5K5TrBHhbETvjdmIpxB3tKKHvPYgYyz~mgljAJFuXssntZQ1F9XYDXQ0vA-A__"
            alt=""
            className="rounded-2xl w-full absolute top-0 left-0 object-top h-full object-cover"
          />
        </div>
      </section>

      <section className="px-16 py-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl">Trending</h2>
          <div className="flex items-center gap-x-4">
            {["SHORTS", "HAT", "JACKETS", "SHOES", "T-SHIRT"].map((item) => (
              <button className="border border-black rounded-full px-4 py-2">
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 mt-4 gap-x-4">
          <div className="col-span-1">
            <div className="h-96">
              <img
                src="https://s3-alpha-sig.figma.com/img/5a88/e596/2507976b1988e6d9a08599fcba5247bd?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h3Os3JMkQHL8CkCVZLAIm8dwykoMkw-vI5WEzjmnrCNcLwqQNSEcQ3Zc1f3XDUFCWF1iTOk3r40kUX-ETGy2qQZQAr2t1f-FgG9ze01fGEWoHya9pVt46mPXrQ5piz~-DeczmJjuRPE0es~uHiGTCXmRW841YbDnD9tx-1Yl7sQk8SawTPxkXW8f8z94QE5iQPhZZjiakm1HtIYNU2Ix5oEM2GjbJoXoiQO9clLiGRBd2HZLr851izE12yT8TTizWxl8xZ4AVinjkfAlUtunqDp56Y6lcSBAuYDlq-1-iH44uyq2Es~PjdqETXJUQ0aIqVNZyLPOTT6eCAXfEvfhTw__"
                alt=""
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div className="mt-2">
              <span className="text-2xl block">Casual Shoe</span>
              <span className="text-xl block">$225</span>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-96">
              <img
                src="https://s3-alpha-sig.figma.com/img/0b42/775b/5c482fd10ff96fad137ae5ca5aa7a561?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KozTXE0AeFqtVNsEALbXT5V5eo1CiQ9ZjIvMPlsqpqYqurCb4pxJg0fQufcjrWAkKd2F6IqhIRPGVkdpoNCdN7PTVQNpnOqnogaNpCiO4lcrKClk-2E6frvviqcA8uoTcDgPrcMpyrUAcMtRZ4HUMTj4NoCl949E939kZ1M0gYZ-6bQ16aEMjxDBNDMUQW5RbaFrk-MoCzZAXdY0ZwX1U1OlyX~sz9-okcuWWMACDalXj6DajlTB7ILHSH9EmWw6BPu92lsEwLSdXTeYCSezhfl3Yl5DhCM-dtatFBhNlATpsBaHBkxpAJArcE3KKazbMhw6MTuoPzgmcBbSA5WL3g__"
                alt=""
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div className="mt-2">
              <span className="text-2xl block">Skateboard Shoe</span>
              <span className="text-xl block">$125</span>
            </div>
          </div>
          <div className="col-span-2">
            <div className="h-96">
              <img
                src="https://s3-alpha-sig.figma.com/img/7150/a0e9/02536ab1a554d315fc11f4ef6f9c1302?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qGwc2JFlK1AGD62gN1dTs92wPxLLw4sKkmkUc2yqh-GFSlibIA0U93zl9cTMDe4HQtuR0A3XCn1KALI8Dm6HHrtFMIxGaJNu5WZ3G-C9w5nkA2CpyPkoY9vpM8NAmzMYmC8dOcoUm-g9jiGr-4xGKa1JzAlyhRlUfjSKs9rnLYXlWwh7wwQMNxp8UKU~B7lZ5rv0uDXLM1G~Hsk55Vgcxmnftd22jIlNzNgc8NZxCCW5~uC0T2DoSJ7UyizDyB-eA5KbrbKqmgyy2a47VvATMajGaCG531j3QNhLjrlapzzqhl44rzG5tAQt6OrOEdnjb1rdLBcbKiSl6aYoQ6i1qw__"
                alt=""
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div className="mt-2">
              <span className="text-2xl block">Air Skateboard Shoe</span>
              <span className="text-xl block">$125</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-4 gap-x-4 h-96">
          <div className="col-span-2">
            <div className="h-96">
              <img
                src="https://s3-alpha-sig.figma.com/img/c8c2/25ce/10fd34a19ed897401decf4c2dd4806d5?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PnAMdpQA17zB9YGUW2MtkAg8ipxrelMkXv9gvro30WfgIHkV~kuLJ~DODHWfBOiKAfU0T7uHaSprO1~y2~FXxi1Dz-Or0JMnCZJ54C1UO9uBJcKpU~MiBqg7h6QOTrhGfG-nYBSvEfH8m1op9SLGjmqTPyHieDLH6jmkiPa1F8GFDF2ZAwGF3adY9Syo1JgAUsKm4T1fBCxosnAxmmbGvOo9RuEmCEzIno0d2~e4Q4rX6vDgSp2PHhVxK~b4evtgKqiX~AfQ7IE8nvko-vyKX5rbgvErgU3~4QwHsByINZRGcO4uE9DPPZL2zRNoeXhBNX1z-2jSeTGJeov~bsgGNQ__"
                alt=""
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div className="mt-2">
              <span className="text-2xl block">High Sole Skateboard Shoe</span>
              <span className="text-xl block">$125</span>
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative h-96">
              <img
                src="https://s3-alpha-sig.figma.com/img/6202/a986/df950869c406241f2f48f416d0807241?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PkhuZPbPFup~~e9NdNyYAVewRFMFuiY~OqNjsLjZ8T-G-1Iv~w2LkkQn0NQ-D7FUGwz4ga9tVtxE47FPkLRGJzZ0M73BUO2h~RWH5KV91iU4EF42WS5uLfnU0YQxzgZdxyJn6ArNI4G1zmAxe2HBsIaUM1r-giyGhF5nGPS2d-fF7dT5w6CkE0BMlWiLZCat7Xh9EVKcknAOAf57F6cPsdusAAglZb~ILb73BuNmH8Zcbk2whoYUvoJHxSCGFeAIaHpkE0XxA5rQ9TT2p5QSLLf7AbU~i6YsnSYijr2lwe7IeH8YXIrgbvIioTsS32tbQjI~qJW4q~vI3HCE8jdhDA__"
                alt=""
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div className="mt-2">
              <span className="text-2xl block">Basket Shoe</span>
              <span className="text-xl block">$125</span>
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative h-96">
              <img
                src="https://s3-alpha-sig.figma.com/img/f8ae/4065/476b2a224ae85cd40fd6b1c7d34bc9ae?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oaSjluAX0L~KXNk9FOd-DbWmEik761tonsRMTIp~eRV1RE46mzmNSdS5V0zqccR3LFB3wQmIeNjrjfF8zPq0zW4xtyTB3eokNEoNliNUPfPbR6uEnH88YIc9it9teeC9cg80Mtp4BdkuGxsm~LBL58~rCSmM34D6WbxoFzTcoDsm9RGDEJby21-RwJhefHrzuxMyrl6LD2mep0RaAj58hPbsVIBHWjxlZb432eH1lA2jg30hlV0WAENl-dTXciwRGiSzF-EsiKJZnstEX6Yq3mcB-2QhrPfWkP9e~MHVGPT4HgIfE6SZrDE-oy9uW-850E3BPFO-SMZf5mAGr2-vGA__"
                alt=""
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div className="mt-2">
              <span className="text-2xl block">Sportwear Shoe</span>
              <span className="text-xl block">$125</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-16 pt-20 pb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-6xl w-96">
            Explore <br />
            by Colors
          </h1>
          <div className="flex flex-wrap gap-2">
            {colorOptions.map((option) => (
              <button
                key={option.id}
                className={`flex items-center gap-2 px-4 border-black bg-gray-100 py-2 rounded-full border transition-all`}
              >
                <span
                  className="w-5 h-5 rounded-full inline-block border border-gray-200"
                  style={{ backgroundColor: option.color }}
                  aria-hidden="true"
                ></span>
                <span className="font-medium">{option.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
