import { HobbyCard } from "@/sections/HobbiesSection/components/HobbyCard";

export const HobbiesGrid = () => {
  return (
    <div className="box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] border-neutral-800 mt-12 rounded-md border-0 border-solid md:grid-cols-[repeat(6,minmax(0px,1fr))] md:border">
      <HobbyCard
        variant="border-neutral-800 border-r-0 border-b md:col-end-[span_4] md:col-start-[span_4] md:border-r"
        title="Morning Run"
        description="There's something special about running in the morning. I'm not an athlete, but I feel truly peaceful after running (⊗`◟´⊗). Besides running, I enjoy fitness and swimming (⊗`◟´⊗)"
        singleImage="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/14.png"
      />
      <HobbyCard
        variant="border-neutral-800 border-b md:col-end-[span_2] md:col-start-[span_2]"
        title="Movies, Books, Music, Games"
        description="I watch all kinds of movies, novels, and listen to music. Additionally, I enjoy some cool things like Anime, Webtoons, and Video games (◎ω◎)"
        multipleImages={[
          "https://c.animaapp.com/mgjqlkw0gfKBVk/assets/12.jpg",
          "https://c.animaapp.com/mgjqlkw0gfKBVk/assets/8.jpg",
          "https://c.animaapp.com/mgjqlkw0gfKBVk/assets/10.jpg",
          "https://c.animaapp.com/mgjqlkw0gfKBVk/assets/11.jpg",
          "https://c.animaapp.com/mgjqlkw0gfKBVk/assets/13.jpg",
        ]}
      />
      <HobbyCard
        variant="border-gray-200 border-r-0 md:col-end-[span_3] md:col-start-[span_3] md:border-r"
        title="Music Enthusiast"
        description="I also play guitar and piano, and share my music on the internet (❁´◡`❁)"
        videoUrl="https://youtu.be/18h4QVmFJmA?si=MY8L0OTVBWuxPnM-"
        videoThumbnail="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/17.png"
        videoIcon="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-9.svg"
      />
      <HobbyCard
        variant="border-gray-200 border-b md:col-end-[span_3] md:col-start-[span_3] md:border-b-0 md:border-none"
        title="Dream of Becoming a Polyglot"
        description="Currently learning Japanese, and planning to learn German and many other languages in the future. No specific goal []~(￣▽￣)~*"
        singleImage="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/image-1.png"
      />
    </div>
  );
};

