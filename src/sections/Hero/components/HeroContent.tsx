import { HeroTitle } from "./HeroTitle";
import { HeroDescription } from "./HeroDescription";
import { HeroButton } from "./HeroButton";
import {BounceCards} from './BounceCards';
import { Globe } from "@/components/ui/globe"
import ComponentsOfLife from "./ComponentsOfLife";
import Widgets from "./Widgets"; 
import type { Track } from "@/components/ui/music-player";

const images = [
  "https://c.animaapp.com/mgjqlkw0gfKBVk/assets/13.jpg",
  "https://c.animaapp.com/mgjqlkw0gfKBVk/assets/11.jpg",
  "https://c.animaapp.com/mgjqlkw0gfKBVk/assets/10.jpg",
  "https://c.animaapp.com/mgjqlkw0gfKBVk/assets/8.jpg",
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];

const currentTrack: Track = {
  id: "1",
  title: "Mayonako no Door (Stay With Me)",
  artist: "Miki Matsubara",
  album: "Pocket Park",
  artwork: "/song.jpg",     // must exist
  duration: 310,
  url: "/stay_with_me.mp3",           // <-- add this and ensure file exists
};
  const queue: Track[] = [currentTrack];


export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent max-w-screen-xl w-full mx-auto">
      <div className="box-border caret-transparent">
        <div className="content-center box-border caret-transparent h-[300px] justify-center">
          <HeroTitle />
        </div>
        <div className="items-center box-border caret-transparent flex justify-center max-h-80 min-h-48 px-4 py-8">
          <HeroDescription />
        </div>
        <div className="items-center box-border caret-transparent flex justify-center py-12">
          <HeroButton />
        </div>
        <div className="items-center box-border caret-transparent flex justify-center px-4"></div>
      </div>
      <div className="relative box-border caret-transparent max-w-screen-xl z-20 mx-auto py-10 md:py-40">
        <div className="box-border caret-transparent px-8">
          <h4 className="text-3xl font-medium box-border caret-transparent tracking-[-0.75px] leading-9 max-w-screen-lg text-center mx-auto md:text-5xl md:tracking-[-1.2px] md:leading-[60px]">
             Dev&#39;s Hobbies
          </h4>
          <p className="text-neutral-300 text-sm box-border caret-transparent leading-5 max-w-2xl text-center mx-auto my-4 md:text-base md:leading-6">
            I like to stay active. New hobbies are added almost every year.
          </p>
        </div>
        <div className="relative box-border caret-transparent">
          <div className="box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] border-neutral-800 mt-12 rounded-md border-0 border-solid md:grid-cols-[repeat(6,minmax(0px,1fr))] md:border">
            <div className="relative box-border caret-transparent col-end-[span_1] col-start-[span_1] h-[450px] max-h-[450px] border-neutral-800 overflow-hidden p-4 border-r-0 border-b border-solid md:col-end-[span_4] md:col-start-[span_4] md:p-8 md:border-r">
              <p className="text-xl box-border caret-transparent tracking-[-0.5px] leading-7 max-w-screen-lg text-left mx-auto md:text-2xl md:tracking-[-0.6px] md:leading-[33px]">
                Morning Run
              </p>
              <p className="text-neutral-300 text-sm box-border caret-transparent leading-5 max-w-sm text-left my-2">
                There&#39;s something special about running in the morning.
                I&#39;m not an athlete, but I feel truly peaceful after running
                (⊗`◟´⊗). Besides running, I enjoy fitness and swimming (⊗`◟´⊗)
              </p>
              <div className="box-border caret-transparent h-full w-full">
                <div className="relative box-border caret-transparent gap-x-10 flex h-full gap-y-10 px-2 py-8">
                  <div className="bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] box-border caret-transparent h-full w-full mx-auto p-5">
                    <div className="box-border caret-transparent flex basis-[0%] flex-col grow h-full w-full">
                      <img
                        alt="header"
                        src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/14.png"
                        className="text-transparent aspect-square box-border h-full max-w-full object-cover object-[0%_0%] w-full rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </div>
                  </div>
                  <div className="absolute bg-[linear-gradient(to_top,rgb(0,0,0),rgb(0,0,0),rgba(0,0,0,0))] box-border caret-transparent h-60 w-full z-40 bottom-0 inset-x-0"></div>
                  <div className="absolute bg-[linear-gradient(rgb(0,0,0),rgba(0,0,0,0),rgba(0,0,0,0))] box-border caret-transparent h-60 w-full z-40 top-0 inset-x-0"></div>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent col-end-[span_1] col-start-[span_1] h-[450px] max-h-[450px] border-neutral-800 overflow-hidden p-4 border-b border-solid md:col-end-[span_2] md:col-start-[span_2] md:p-8">
              <p className="text-xl box-border caret-transparent tracking-[-0.5px] leading-7 max-w-screen-lg text-left mx-auto md:text-2xl md:tracking-[-0.6px] md:leading-[33px]">
                Movies, Books, Music, Games
              </p>
              <p className="text-neutral-300 text-sm box-border caret-transparent leading-5 max-w-sm text-left my-2">
                I watch all kinds of movies, novels, and listen to music.
                Additionally, I enjoy some cool things like Anime, Webtoons, and
                Video games (◎ω◎)
              </p>
              <div className="box-border caret-transparent h-full w-full">
                <div className="relative items-start box-border caret-transparent gap-x-10 flex flex-col h-full gap-y-10 overflow-hidden p-8">
                  <BounceCards
                    className="custom-bounceCards"
                    images={images}
                    containerWidth={440}
                    containerHeight={200}
                    animationDelay={1}
                    animationStagger={0.08}
                    easeType="elastic.out(1, 0.5)"
                    transformStyles={transformStyles}
                    enableHover={true}
                  />
                  <div className="absolute bg-[linear-gradient(to_right,rgb(0,0,0),rgba(0,0,0,0))] box-border caret-transparent h-full w-20 z-[100] left-0 inset-y-0"></div>
                  <div className="absolute bg-[linear-gradient(to_left,rgb(0,0,0),rgba(0,0,0,0))] box-border caret-transparent h-full w-20 z-[100] right-0 inset-y-0"></div>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent col-end-[span_1] col-start-[span_1] h-[450px] max-h-[450px] border-gray-200 overflow-hidden p-4 border-r-0 border-solid md:col-end-[span_3] md:col-start-[span_3] md:p-8 md:border-r">
              <p className="text-xl box-border caret-transparent tracking-[-0.5px] leading-7 max-w-screen-lg text-left mx-auto md:text-2xl md:tracking-[-0.6px] md:leading-[33px]">
                Music Enthusiast
              </p>
              <p className="text-neutral-300 text-sm box-border caret-transparent leading-5 max-w-sm text-left my-2">
                I also play guitar and piano, and share my music on the internet
                (❁´◡`❁)
              </p>
              <div className="box-border caret-transparent h-full w-full">
                <a
                  href=" linkofvideo"
                  className="relative box-border caret-transparent gap-x-10 flex h-full gap-y-10"
                >
                  <div className="box-border caret-transparent h-full w-full mx-auto">
                    <div className="relative box-border caret-transparent flex basis-[0%] flex-col grow h-full w-full">
                      <img
                        src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-9.svg"
                        alt="Icon"
                        className="absolute text-red-500 box-border caret-transparent h-20 w-20 z-10 m-auto inset-0"
                      />
                      <img
                        alt="header"
                        src="nothing"
                        className="text-transparent aspect-square box-border h-full max-w-full object-cover w-full mt-2 rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative box-border caret-transparent col-end-[span_1] col-start-[span_1] h-[450px] max-h-[450px] border-gray-200 overflow-hidden p-4 border-b border-solid md:col-end-[span_3] md:col-start-[span_3] md:p-8 md:border-b-0 md:border-none">
              <p className="text-xl box-border caret-transparent tracking-[-0.5px] leading-7 max-w-screen-lg text-left mx-auto md:text-2xl md:tracking-[-0.6px] md:leading-[33px]">
                Dream of Becoming a Polyglot
              </p>
              <p className="text-neutral-300 text-sm box-border caret-transparent leading-5 max-w-sm text-left my-2">
                Currently learning Japanese, and planning to learn German and
                many other languages in the future. No specific goal
                []~(￣▽￣)~*
              </p>
              <div className="box-border caret-transparent h-full w-full">
                <div className="relative items-center box-border caret-transparent flex flex-col h-full overflow-hidden">
                  <Globe className="top-0 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ComponentsOfLife />
      <div className="relative box-border caret-transparent gap-x-4 flex flex-col gap-y-4 mt-20 p-4">
        <div className="absolute box-border caret-transparent min-h-full w-full left-0 top-0">
          <img
            src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/footer-grid.svg"
            alt="grid"
            className="box-border caret-transparent h-full max-w-full opacity-50 w-full"
          />
        </div>
      <Widgets currentTrack={currentTrack} queue={queue} />
      </div>
      <div className="box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] w-full mt-12">
        <button className="relative text-xl bg-zinc-900 caret-transparent block col-end-auto col-start-auto row-end-auto row-start-auto leading-7 text-center overflow-hidden px-px rounded-[26.88px] md:col-end-[span_2] md:col-start-[span_2] md:row-end-[span_1] md:row-start-[span_1]">
          <div className="absolute box-border caret-transparent rounded-[26.88px] inset-0">
            <img
              src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-20.svg"
              alt="Icon"
              className="absolute box-border caret-transparent h-full w-full"
            />
            <div className="absolute box-border caret-transparent translate-x-[-27.514px] translate-y-[472.08px] left-0 top-0">
              <div className="bg-[radial-gradient(rgb(0,255,153)_40%,rgba(0,0,0,0)_60%)] box-border caret-transparent h-20 opacity-80 w-20"></div>
            </div>
          </div>
          <div className="relative text-sm items-center backdrop-blur-xl bg-transparent box-border caret-transparent flex basis-[0%] grow h-full justify-center leading-5 w-full border border-slate-800 p-2 rounded-[26.88px] border-solid">
            <div className="relative items-center bg-[linear-gradient(rgb(10,10,10),rgb(38,38,38))] box-border caret-transparent gap-x-4 flex flex-col h-96 justify-center gap-y-4 w-full overflow-hidden md:h-[640px]">
              <div className="static bg-none box-content caret-black h-auto transform-none w-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-[linear-gradient(to_top,rgb(99,102,241),rgb(168,85,247),rgba(0,0,0,0))] md:box-border md:caret-transparent md:h-14 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-2.5 md:translate-y-[22.5714px] md:w-px md:[mask-position:0%] md:bg-left-top md:m-auto md:scroll-m-0 md:scroll-p-[auto] md:rounded-full md:left-0 md:top-20"></div>
              <div className="static box-content caret-black h-auto transform-none w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:h-2 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-50.0%] md:translate-y-[-50.0%] md:w-2 md:z-50 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"></div>
              <div className="static bg-none box-content caret-black h-auto transform-none w-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-[linear-gradient(to_top,rgb(99,102,241),rgb(168,85,247),rgba(0,0,0,0))] md:box-border md:caret-transparent md:h-14 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[600px] md:translate-y-[-200px] md:w-px md:[mask-position:0%] md:bg-left-top md:m-auto md:scroll-m-0 md:scroll-p-[auto] md:rounded-full md:left-0 md:top-20"></div>
              <div className="static bg-none box-content caret-black h-auto transform-none w-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-[linear-gradient(to_top,rgb(99,102,241),rgb(168,85,247),rgba(0,0,0,0))] md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[100px] md:translate-y-[-200px] md:w-px md:[mask-position:0%] md:bg-left-top md:m-auto md:scroll-m-0 md:scroll-p-[auto] md:rounded-full md:left-0 md:top-20"></div>
              <div className="static box-content caret-black h-auto transform-none w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:h-2 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-50.0%] md:translate-y-[-50.0%] md:w-2 md:z-50 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"></div>
              <div className="static bg-none box-content caret-black h-auto transform-none w-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-[linear-gradient(to_top,rgb(99,102,241),rgb(168,85,247),rgba(0,0,0,0))] md:box-border md:caret-transparent md:h-14 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[400px] md:translate-y-[-200px] md:w-px md:[mask-position:0%] md:bg-left-top md:m-auto md:scroll-m-0 md:scroll-p-[auto] md:rounded-full md:left-0 md:top-20"></div>
              <div className="static box-content caret-black h-auto transform-none w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:h-2 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-50.0%] md:translate-y-[-50.0%] md:w-2 md:z-50 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"></div>
              <div className="static bg-none box-content caret-black h-auto transform-none w-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-[linear-gradient(to_top,rgb(99,102,241),rgb(168,85,247),rgba(0,0,0,0))] md:box-border md:caret-transparent md:h-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[800px] md:translate-y-[-200px] md:w-px md:[mask-position:0%] md:bg-left-top md:m-auto md:scroll-m-0 md:scroll-p-[auto] md:rounded-full md:left-0 md:top-20"></div>
              <div className="static bg-none box-content caret-black h-auto transform-none w-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-[linear-gradient(to_top,rgb(99,102,241),rgb(168,85,247),rgba(0,0,0,0))] md:box-border md:caret-transparent md:h-12 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[1000px] md:translate-y-[-200px] md:w-px md:[mask-position:0%] md:bg-left-top md:m-auto md:scroll-m-0 md:scroll-p-[auto] md:rounded-full md:left-0 md:top-20"></div>
              <div className="static bg-none box-content caret-black h-auto transform-none w-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-[linear-gradient(to_top,rgb(99,102,241),rgb(168,85,247),rgba(0,0,0,0))] md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[1200px] md:translate-y-[-200px] md:w-px md:[mask-position:0%] md:bg-left-top md:m-auto md:scroll-m-0 md:scroll-p-[auto] md:rounded-full md:left-0 md:top-20"></div>
              <div className="static box-content caret-black h-auto transform-none w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:h-2 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-50.0%] md:translate-y-[-50.0%] md:w-2 md:z-50 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-[1200.5px] md:top-[716px]">
                <div className="static bg-none box-content caret-black h-auto opacity-100 w-auto rounded-none top-auto inset-x-auto md:absolute md:aspect-auto md:bg-[linear-gradient(to_right,rgba(0,0,0,0),rgb(99,102,241),rgba(0,0,0,0))] md:box-border md:caret-transparent md:blur-sm md:h-2 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-auto md:scroll-m-0 md:scroll-p-[auto] md:rounded-full md:top-0 md:-inset-x-10"></div>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-0.837315px] md:translate-y-[-5.44255px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[4.86078px] md:translate-y-[-20.7688px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[3.04063px] md:translate-y-[-13.6828px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[13.0989px] md:translate-y-[-13.0989px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[20.0566px] md:translate-y-[-7.04691px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-11.3031px] md:translate-y-[-17.1161px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[12.7417px] md:translate-y-[-33.5919px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-21.2953px] md:translate-y-[-16.6909px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-19.674px] md:translate-y-[-11.9755px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[1.46807px] md:translate-y-[-4.99142px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-3.36115px] md:translate-y-[-6.38619px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[13.7435px] md:translate-y-[-33.2135px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[2.52747px] md:translate-y-[-22.2417px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[0.858675px] md:translate-y-[-15.7424px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-2.84146px] md:translate-y-[-10.2292px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[-52.3247px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[12.3603px] md:translate-y-[-23.6906px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[-16.2119px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[6.15523px] md:translate-y-[-11.7509px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
                <span className="static bg-none box-content caret-black inline h-auto opacity-100 transform-none w-auto rounded-none md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(99,102,241),rgb(168,85,247))] md:box-border md:caret-transparent md:block md:h-1 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[11.0078px] md:translate-y-[-19.7224px] md:w-1 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"></span>
              </div>
              <div className="static box-content caret-black h-auto transform-none w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:h-2 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-50.0%] md:translate-y-[-50.0%] md:w-2 md:z-50 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"></div>
              <h2 className="relative text-2xl font-bold box-border caret-transparent tracking-[-0.6px] leading-8 z-20 md:text-7xl md:tracking-[-1.8px] md:leading-[72px]">
                For visiting my profile
                <br className="text-2xl box-border caret-transparent tracking-[-0.6px] leading-8 md:text-7xl md:tracking-[-1.8px] md:leading-[72px]" />
                <div className="relative text-2xl box-border caret-transparent inline-block tracking-[-0.6px] leading-8 w-max mx-auto md:text-7xl md:tracking-[-1.8px] md:leading-[72px]">
                  <div className="absolute text-transparent text-2xl bg-clip-text bg-[linear-gradient(to_right,rgb(168,85,247),rgb(139,92,246),rgb(236,72,153))] bg-no-repeat box-border tracking-[-0.6px] leading-8 py-4 left-0 top-px md:text-7xl md:tracking-[-1.8px] md:leading-[72px]">
                    <span className="text-2xl box-border tracking-[-0.6px] leading-8 md:text-7xl md:tracking-[-1.8px] md:leading-[72px]">
                      Thank you.
                    </span>
                  </div>
                  <div className="relative text-transparent text-2xl bg-clip-text bg-[linear-gradient(to_right,rgb(168,85,247),rgb(139,92,246),rgb(236,72,153))] bg-no-repeat box-border tracking-[-0.6px] leading-8 py-4 md:text-7xl md:tracking-[-1.8px] md:leading-[72px]">
                    <span className="text-2xl box-border tracking-[-0.6px] leading-8 md:text-7xl md:tracking-[-1.8px] md:leading-[72px]">
                      Thank you.
                    </span>
                  </div>
                </div>
              </h2>
              <div className="absolute bg-neutral-100 shadow-[rgba(34,42,53,0.06)_0px_0px_24px_0px,rgba(0,0,0,0.05)_0px_1px_1px_0px,rgba(34,42,53,0.04)_0px_0px_0px_1px,rgba(34,42,53,0.08)_0px_0px_4px_0px,rgba(47,48,55,0.05)_0px_16px_68px_0px,rgba(255,255,255,0.1)_0px_1px_0px_0px_inset] box-border caret-transparent w-full bottom-0 inset-x-0"></div>
            </div>
          </div>
        </button>
      </div>
      {/* Footer markup moved to personal Footer component to avoid duplication */}
    </div>
  );
};
