import { ChevronRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const earningsCards = [
  {
    label: "LAST EPOCH",
    value: "234",
    unit: "points",
  },
  {
    label: "LIFETIME",
    value: "1.3k",
    unit: "points",
  },
];

const chartYAxisLabels = [
  { value: "1.1K", className: "mt-[-0.52px]" },
  { value: "1K", className: "mt-[-0.52px]" },
  { value: "900", className: "mt-[-0.52px]" },
  { value: "800", className: "mt-[-0.52px]" },
  { value: "700", className: "mt-[-0.52px]" },
];

const chartData = [
  { month: "OCT", value: "800", height: "flex-1" },
  { month: "NOV", value: "800", height: "flex-1" },
  { month: "DEC", value: "800", height: "flex-1" },
  { month: "JAN", value: "1,000", height: "flex-1" },
  { month: "FEB", value: "800", height: "flex-1" },
  { month: "MAR", value: "800", height: "flex-1" },
  { month: "APR", value: "800", height: "flex-1" },
];

export const EarningsOverview = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-6 w-full">
      <div className="flex items-start gap-10 w-full">
        <Badge className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-[#eeecfe] rounded-lg shadow-shadow-1 hover:bg-[#eeecfe]">
          <span className="font-neuebit text-[length:var(--caption-medium-font-size)] text-[#5d4bff]">
            EARNINGS
          </span>
        </Badge>
      </div>

      <div className="flex items-start gap-4 w-full">
        <div className="flex flex-col items-start gap-4 w-full max-w-[440px]">
          <div className="w-full inline-flex items-center gap-4">
            {earningsCards.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col w-full h-[194px] items-start justify-between pt-4 pb-6 px-4 bg-gray-fill rounded-2xl shadow-shadow border-0"
              >
                <CardContent className="flex flex-col justify-between gap-4 p-0 w-full h-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="inline-flex items-start justify-end gap-2">
                      <span className="font-neuebit font-[number:var(--caption-medium-font-weight)] text-[#5d4bff] text-[length:var(--caption-medium-font-size)] text-right tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] [font-style:var(--caption-medium-font-style)]">
                        {card.label}
                      </span>
                    </div>
                    <img className="w-6 h-6" alt="Points" src="/icons/points-2.svg" />
                  </div>

                  <div className="flex flex-col items-start justify-end gap-2 w-full">
                    <div className="flex items-baseline gap-1.5 w-full">
                      <span className="font-aeonik font-bold text-[length:32px] text-[#5d4bff]">
                        {card.value}
                      </span>
                      <span className="font-aeonik font-medium text-[length:var(--caption-medium-font-size)] text-[#5d4bff]">
                        {card.unit}
                      </span>
                    </div>

                    <button className="group inline-flex items-end gap-0.5 cursor-pointer bg-transparent border-0 p-0">
                      <span className="font-label-small font-[number:var(--label-small-font-weight)] text-[#5d4bff] text-[length:var(--label-small-font-size)] text-right tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] [font-style:var(--label-small-font-style)]">
                        Breakdown
                      </span>
                      <ChevronRightIcon className="w-3.5 h-3.5 text-[#5d4bff] transition-transform duration-300 group-hover:translate-x-[4px]" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="flex items-center justify-center gap-3 px-4 py-6 w-full bg-[#eeecfe] rounded-2xl border-0">
            <CardContent className="flex items-center gap-3 p-0 w-full">
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[#5d4bff] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                  Bonuses available!
                </span>
                <span className="font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#5d4bff] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]">
                  The more you participate, the more you earn.
                </span>
              </div>

              <Button className="inline-flex items-center justify-center gap-2 px-2 py-3 bg-[#5d4bff] rounded-lg hover:bg-[#5d4bff]/90">
                <span className="font-neuebit font-[number:var(--caption-small-font-weight)] text-white text-[length:var(--caption-small-font-size)] text-center mb-[0.15rem]">
                  SEE OPPORTUNITIES
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="flex flex-col items-start pt-6 pb-4 px-4 flex-1 self-stretch rounded-2xl border border-solid border-[#eeecfe] shadow-none">
          <CardContent className="flex flex-col gap-4 p-0 w-full">
            <div className="flex items-start justify-between w-full">
              <div className="inline-flex items-start justify-end gap-2">
                <span className="font-neuebit text-[#5d4bff] text-[length:var(--caption-medium-font-size)] text-right">
                  EARNINGS HISTORY
                </span>
              </div>
            </div>

            <div className="relative w-full flex-1 min-h-[216px]">
              <div className="flex flex-col w-full h-[158px] items-start justify-between absolute">
                {chartYAxisLabels.map((label, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-[8px] w-full"
                  >
                    <span
                      className={`${label.className} font-neuebit text-[#5d4bff] text-[length:var(--caption-medium-font-size)]`}
                    >
                      {label.value}
                    </span>
                    <img
                      className="flex-1 h-px"
                      alt="Line"
                      src={
                        index === 0
                          ? "/icons/line-112.svg"
                          : index === 1
                          ? "/icons/line-112-3.svg"
                          : "/icons/line-112-1.svg"
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="flex h-[224px] items-end gap-2 absolute top-0 left-[51px] right-0">
                {chartData.map((data, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center gap-2 flex-1 ${
                      data.month === "JAN" ? "" : "h-[183.34px] gap-[4.18px]"
                    }`}
                  >
                    {data.month === "JAN" ? (
                      <>
                        <div className="flex items-center justify-center gap-2 p-0.5 w-full bg-[#eeecfe] rounded-lg">
                          <span className="font-neuebit text-[#5d4bff] text-[length:var(--caption-medium-font-size)]">
                            {data.value}
                          </span>
                        </div>
                        <div className="flex flex-col h-[183.34px] items-center gap-[4.18px] w-full">
                          <div className="flex-1 w-full bg-[#eeecfe] rounded-[4.18px_4.18px_0px_0px]" />
                          <div className="flex items-center justify-center gap-[4.18px] p-[4.18px] w-full border-t-[0.52px] border-solid border-[#eeecfe]">
                            <span className="font-neuebit text-[#5d4bff] text-[length:var(--caption-medium-font-size)]">
                              {data.month}
                            </span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col items-start gap-2 flex-1 w-full">
                          <div className="flex items-center justify-center gap-2 p-0.5 w-full bg-[#eeecfe] rounded-lg">
                            <span className="font-neuebit text-[#5d4bff] text-[length:var(--caption-medium-font-size)]">
                              {data.value}
                            </span>
                          </div>
                          <div className="flex-1 w-full bg-[#eeecfe] rounded-[4.18px_4.18px_0px_0px]" />
                        </div>
                        <div className="flex items-center justify-center w-full border-t-[0.5px] border-solid border-[#eeecfe]">
                          <span className="font-neuebit text-[#5d4bff] text-[length:var(--caption-medium-font-size)]">
                            {data.month}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
