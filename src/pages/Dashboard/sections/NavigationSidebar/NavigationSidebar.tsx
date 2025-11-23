import { InfoIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import DashboardSvg from "../../../../components/icons/DashboardSvg";
import ContributeSvg from "../../../../components/icons/ContributeSvg";
import ProfileSvg from "../../../../components/icons/ProfileSvg";
import ShoppingBagSvg from "../../../../components/icons/ShoppingBagSvg";
import HelpSvg from "../../../../components/icons/HelpSvg";
import DocSvg from "../../../../components/icons/DocSvg";
import AboutSvg from "../../../../components/icons/AboutSvg";

const mainNavItems = [
  {
    icon: (
      <DashboardSvg width="20" height="20" className="hover:text-[#5d4bff]" />
    ),
    label: "DASHBOARD",
    active: true,
    hasIndicator: true,
  },
  {
    icon: (
      <ContributeSvg width="20" height="20" className="hover:text-[#5d4bff]" />
    ),
    label: "CONTRIBUTE",
    active: false,
    hasIndicator: false,
  },
  {
    icon: (
      <ProfileSvg width="20" height="20" className="hover:text-[#5d4bff]" />
    ),
    label: "PROFILE",
    active: false,
    hasIndicator: false,
  },
];

const resourceItems = [
  {
    icon: (
      <HelpSvg
        width="20"
        height="20"
        className="text-gray-2 group-hover:text-[#5d4bff]"
      />
    ),
    label: "HELP",
  },
  {
    icon: (
      <DocSvg
        width="20"
        height="20"
        className="text-gray-2 group-hover:text-[#5d4bff]"
      />
    ),
    label: "DOCS",
  },
  {
    icon: (
      <ShoppingBagSvg
        width="20"
        height="20"
        className="text-gray-2 group-hover:text-[#5d4bff]"
      />
    ),
    label: "SHOP",
  },
  {
    icon: (
      <AboutSvg
        width="20"
        height="20"
        className="text-gray-2 group-hover:text-[#5d4bff]"
      />
    ),
    label: "ABOUT",
  },
];

export const NavigationSidebar = (): JSX.Element => {
  return (
    <aside className="w-[264px] h-screen fixed left-0 top-0 flex flex-col bg-white">
      <header className="flex w-fit flex-col items-start gap-2 pt-6 pb-4 px-6">
        <div className="flex w-fit items-center gap-1">
          <div className="p-1.5 overflow-hidden flex items-center justify-center rounded-lg border border-solid border-[#eeecfe] shadow-[0px_2px_8px_#00000012]">
            <img className="" alt="Icon" src="/icons/logo.svg" />
          </div>

          <div className="inline-flex h-full flex-col justify-center gap-2 px-2 py-0 flex-1 bg-[#fdfdfd] rounded-lg border border-solid border-[#eeecfe] shadow-[0px_2px_8px_#00000012]">
            <div className="w-[85px] h-[18px]">
              <img
                className="w-[98.97%] h-[99.27%]"
                alt="Vector"
                src="/images/misc/vector.svg"
              />
            </div>
          </div>
        </div>
      </header>

      <nav className="flex flex-col flex-1 justify-between px-6 pt-3 pb-6 gap-8 overflow-y-auto border-r border-solid border-[#eeecfe]">
        <div className="flex flex-col items-start w-full">
          {mainNavItems.map((item, index) => (
            <div
              key={index}
              className="group flex items-center justify-between px-1 py-2 w-full text-gray-2 border-b border-solid border-[#eeecfe] cursor-pointer hover:bg-gray-50 hover:opacity-50 hover:text-[#5d4bff] transition-all"
            >
              <div
                className={`inline-flex items-center gap-3 ${
                  item.active && "text-[#5d4bff]"
                }`}
              >
                {item.icon}

                <div
                  className={`font-neuebit text-[length:var(--caption-large-font-size)] whitespace-nowrap`}
                >
                  {item.label}
                </div>
              </div>

              {item.hasIndicator && (
                <div className="w-2.5 h-2.5 bg-positive rounded-[5px] shadow-[0px_0px_5px_4px_#00c33a33]" />
              )}
            </div>
          ))}
        </div>

        <div>
          <div className="flex flex-col items-start gap-4 w-full flex-1 justify-center">
            <Badge className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-[#eeecfe] rounded-lg shadow-shadow-1 hover:bg-[#eeecfe]">
              <span className="font-neuebit text-[length:var(--caption-medium-font-size)] whitespace-nowrap text-[#5d4bff]">
                RESOURCES
              </span>
            </Badge>

            <div className="flex flex-col items-start w-full pb-4">
              {resourceItems.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-between px-1 py-2 w-full border-b border-solid border-[#eeecfe] cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="inline-flex items-center gap-3">
                    {item.icon}

                    <div className="font-neuebit text-[length:var(--caption-large-font-size)] whitespace-nowrap text-gray-2 group-hover:text-[#5d4bff]">
                      {item.label}
                    </div>
                  </div>

                  <svg
                    className="w-2.5 h-2.5 text-gray-2 transition-transform duration-300 group-hover:translate-x-[4px] group-hover:-translate-y-[4px] group-hover:text-[#5d4bff]"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.833252 9.16668L9.16659 0.833344M9.16659 0.833344H0.833252M9.16659 0.833344V9.16668"
                      stroke="currentColor"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <Card className="w-full bg-gray-fill rounded-2xl shadow-shadow border-0">
            <CardContent className="flex flex-col items-start gap-8 p-4">
              <div className="flex items-center justify-between w-full">
                <Badge className="inline-flex items-center justify-center gap-2 pl-3 pr-4 py-1.5 bg-gold-100 rounded-lg shadow-shadow-1 hover:bg-gold-100">
                  <img className="w-4 h-4" alt="Points" src="/icons/points.svg" />

                  <span className="font-neuebit text-goldprimary text-[length:var(--label-medium-font-size)] whitespace-nowrap mb-[0.15rem]">
                    EARN PTS
                  </span>
                </Badge>

                <InfoIcon className="w-5 h-5" color="#B8B8B8" />
              </div>

              <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex items-baseline gap-1.5 w-full">
                    <p className="font-aeonik font-medium text-[#5d4bff] text-2xl tracking-[-0.24px]">
                      12
                    </p>

                    <p className="font-aeonik font-medium text-[#5d4bff] text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] [font-style:var(--label-small-font-style)]">
                      referrals
                    </p>
                  </div>

                  <div className="font-aeonik font-[number:var(--label-x-small-font-weight)] text-gray-2 text-[length:var(--label-x-small-font-size)] tracking-[var(--label-x-small-letter-spacing)] leading-[var(--label-x-small-line-height)] [font-style:var(--label-x-small-font-style)]">
                    Refer friends to earn more
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="h-[34px] gap-1 inline-flex items-center justify-center px-2 py-3 rounded-lg border border-solid border-[#5d4bff] bg-transparent hover:bg-[#5d4bff]/5"
                >
                  <span className="font-neuebit text-[#5d4bff] text-[length:var(--caption-medium-font-size)] text-center tracking-[var(--caption-small-letter-spacing)] leading-[var(--caption-small-line-height)] whitespace-nowrap [font-style:var(--caption-small-font-style)]">
                    SHARE LINK
                  </span>

                  <img src="/icons/Share-Icon.svg" className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </nav>
    </aside>
  );
};
