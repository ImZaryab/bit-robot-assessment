import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
const pointsIcon = "/icons/points.svg";

const carouselItems = [
  {
    icon: "/icons/li-discord.svg",
    title: "Discord",
    description: "Stay involved, don't miss an update. Join the community.",
    points: "EARN 20 PTS",
    primaryButton: "GET INVOLVED",
    secondaryButton: "LEARN MORE",
  },
];

const TOTAL_SLIDES = 4;

type Direction = "next" | "prev";

export const CommunityUpdatesCarousel = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>("next");

  const handlePrev = () => {
    setPrevIndex(currentIndex);
    setDirection("prev");
    setCurrentIndex((prev) => (prev === 0 ? TOTAL_SLIDES - 1 : prev - 1));
  };

  const handleNext = () => {
    setPrevIndex(currentIndex);
    setDirection("next");
    setCurrentIndex((prev) => (prev === TOTAL_SLIDES - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setPrevIndex(currentIndex);
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  };

  const currentItem = carouselItems[currentIndex % carouselItems.length];
  const previousItem = carouselItems[prevIndex % carouselItems.length];

  return (
    <section className="flex w-full flex-col items-start gap-6">
      <div className="inline-flex flex-col items-start gap-4">
        <Badge className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#eeecfe] px-3 py-1 shadow-shadow-1 hover:bg-[#eeecfe]">
          <span className="mb-[0.15rem] font-neuebit text-[length:var(--caption-medium-font-size)] text-[#5d4bff]">
            DISCOVER
          </span>
        </Badge>

        <h2 className="font-aeonik text-[length:var(--heading-small-font-size)] font-[number:500] leading-[var(--heading-small-line-height)] tracking-[var(--heading-small-letter-spacing)] text-[#5d4bff] [font-style:var(--heading-small-font-style)]">
          Explore the BitRobot Network
        </h2>
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        <div className="flex w-full items-center justify-center gap-4">
          <button
            className="flex h-6 w-6 cursor-pointer items-center justify-center"
            aria-label="Previous slide"
            onClick={handlePrev}
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-2" color="#5d4bff" />
          </button>

          <div className="relative h-[246px] w-full flex-1 overflow-hidden">
            {/* Previous slide - exiting */}
            {prevIndex !== currentIndex && (
              <div
                key={`prev-${prevIndex}`}
                className={`absolute inset-0 ${
                  direction === "next"
                    ? "animate-slide-out-left"
                    : "animate-slide-out-right"
                }`}
              >
                <Card className="relative h-[246px] overflow-hidden rounded-2xl border border-solid border-[#eeecfe] bg-white shadow-none">
                  <CardContent className="relative h-full p-0">
                    <div className="absolute bottom-[-266px] left-0 flex h-[655px] w-full opacity-10 [background:url(/images/backgrounds/bg-image.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(254,254,254,1)_0%,rgba(254,254,254,1)_100%)]">
                      <div className="mt-[147px] h-[243px] w-full bg-[linear-gradient(180deg,rgba(254,254,254,0)_0%,rgba(254,254,254,0.91)_100%)]" />
                    </div>

                    <div className="absolute bottom-[-266px] left-0 flex h-[655px] w-full bg-white opacity-10">
                      <div className="mt-[147px] h-[243px] w-full bg-[linear-gradient(180deg,rgba(254,254,254,0)_0%,rgba(254,254,254,0.91)_100%)]" />
                    </div>

                    <div className="absolute bottom-4 left-4 flex max-w-[440px] flex-col gap-3">
                      <img
                        className="h-8 w-8"
                        alt={previousItem.title}
                        src={previousItem.icon}
                      />

                      <div className="flex w-full flex-col items-center gap-2">
                        <h3 className="w-full font-label-medium text-[length:var(--label-medium-font-size)] font-[number:var(--label-medium-font-weight)] leading-[var(--label-medium-line-height)] tracking-[var(--label-medium-letter-spacing)] text-[#5d4bff] [font-style:var(--label-medium-font-style)]">
                          {previousItem.title}
                        </h3>

                        <p className="w-full font-paragraph-small text-[length:var(--paragraph-small-font-size)] font-[number:var(--paragraph-small-font-weight)] leading-[var(--paragraph-small-line-height)] tracking-[var(--paragraph-small-letter-spacing)] text-gray-2 [font-style:var(--paragraph-small-font-style)]">
                          {previousItem.description}
                        </p>
                      </div>

                      <div className="inline-flex items-start gap-2">
                        <Button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#5d4bff] px-2 py-3 hover:bg-[#4d3bef]">
                          <span className="mb-[0.15rem] font-neuebit text-[length:var(--label-small-font-size)] text-white">
                            {previousItem.primaryButton}
                          </span>
                        </Button>

                        <Button
                          variant="outline"
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-solid border-[#5d4bff] bg-transparent px-2 py-3 hover:bg-[#eeecfe]"
                        >
                          <span className="mb-[0.15rem] font-neuebit text-[length:var(--label-small-font-size)] text-[#5d4bff]">
                            {previousItem.secondaryButton}
                          </span>
                        </Button>
                      </div>
                    </div>

                    <Badge className="absolute right-4 top-4 inline-flex items-center justify-center gap-2 rounded-lg bg-gold-100 px-3 py-1 shadow-shadow-1 hover:bg-gold-100">
                      <img className="h-4 w-4" alt="Points" src={pointsIcon} />
                      <span className="mb-[0.15rem] font-neuebit text-[length:var(--label-medium-font-size)] text-goldprimary">
                        {previousItem.points}
                      </span>
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Current slide - entering */}
            <div
              key={`current-${currentIndex}`}
              className={`absolute inset-0 ${
                direction === "next"
                  ? "animate-slide-in-right"
                  : "animate-slide-in-left"
              }`}
            >
              <Card className="relative h-[246px] overflow-hidden rounded-2xl border border-solid border-[#eeecfe] bg-white shadow-none">
                <CardContent className="relative h-full p-0">
                  <div className="absolute bottom-[-266px] left-0 flex h-[655px] w-full opacity-10 [background:url(/images/backgrounds/bg-image.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(254,254,254,1)_0%,rgba(254,254,254,1)_100%)]">
                    <div className="mt-[147px] h-[243px] w-full bg-[linear-gradient(180deg,rgba(254,254,254,0)_0%,rgba(254,254,254,0.91)_100%)]" />
                  </div>

                  <div className="absolute bottom-[-266px] left-0 flex h-[655px] w-full bg-white opacity-10">
                    <div className="mt-[147px] h-[243px] w-full bg-[linear-gradient(180deg,rgba(254,254,254,0)_0%,rgba(254,254,254,0.91)_100%)]" />
                  </div>

                  <div className="absolute bottom-4 left-4 flex max-w-[440px] flex-col gap-3">
                    <img
                      className="h-8 w-8"
                      alt={currentItem.title}
                      src={currentItem.icon}
                    />

                    <div className="flex w-full flex-col items-center gap-2">
                      <h3 className="w-full font-label-medium text-[length:var(--label-medium-font-size)] font-[number:var(--label-medium-font-weight)] leading-[var(--label-medium-line-height)] tracking-[var(--label-medium-letter-spacing)] text-[#5d4bff] [font-style:var(--label-medium-font-style)]">
                        {currentItem.title}
                      </h3>

                      <p className="w-full font-paragraph-small text-[length:var(--paragraph-small-font-size)] font-[number:var(--paragraph-small-font-weight)] leading-[var(--paragraph-small-line-height)] tracking-[var(--paragraph-small-letter-spacing)] text-gray-2 [font-style:var(--paragraph-small-font-style)]">
                        {currentItem.description}
                      </p>
                    </div>

                    <div className="inline-flex items-start gap-2">
                      <Button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#5d4bff] px-2 py-3 hover:bg-[#4d3bef]">
                        <span className="mb-[0.15rem] font-neuebit text-[length:var(--label-small-font-size)] text-white">
                          {currentItem.primaryButton}
                        </span>
                      </Button>

                      <Button
                        variant="outline"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-solid border-[#5d4bff] bg-transparent px-2 py-3 hover:bg-[#eeecfe]"
                      >
                        <span className="mb-[0.15rem] font-neuebit text-[length:var(--label-small-font-size)] text-[#5d4bff]">
                          {currentItem.secondaryButton}
                        </span>
                      </Button>
                    </div>
                  </div>

                  <Badge className="absolute right-4 top-4 inline-flex items-center justify-center gap-2 rounded-lg bg-gold-100 px-3 py-1 shadow-shadow-1 hover:bg-gold-100">
                    <img className="h-4 w-4" alt="Points" src={pointsIcon} />
                    <span className="mb-[0.15rem] font-neuebit text-[length:var(--label-medium-font-size)] text-goldprimary">
                      {currentItem.points}
                    </span>
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          <button
            className="flex h-6 w-6 cursor-pointer items-center justify-center"
            aria-label="Next slide"
            onClick={handleNext}
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-2" color="#5d4bff" />
          </button>
        </div>

        <div className="inline-flex h-1 items-center gap-1">
          {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
            <button
              key={index}
              className={`h-full w-3 cursor-pointer rounded-[99px] ${
                index === currentIndex ? "bg-[#5d4bff]" : "bg-[#eeecfe]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
