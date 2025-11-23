import { ChevronDownIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { CommunityUpdatesCarousel } from "./sections/CommunityUpdatesCarousel";
import { EarningsHistoryTable } from "./sections/EarningsHistoryTable";
import { EarningsOverview } from "./sections/EarningsOverview";
import { NavigationSidebar } from "./sections/NavigationSidebar";

export const Dashboard = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[1280px] min-h-screen flex">
      <NavigationSidebar />

      <main className="flex-1 flex flex-col ml-[264px] overflow-y-auto">
        <header className="flex justify-end p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex h-[34px] items-center justify-center gap-3 px-3 mt-4 mr-4 py-1 bg-white rounded-lg border border-solid border-stroke shadow-[0px_2px_8px_#00000012] hover:bg-gray-fill transition-colors">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <Avatar className="w-5 h-5">
                    <AvatarImage src="/images/avatars/frame-6.png" alt="User avatar" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>

                  <span className="relative flex items-center justify-center w-fit font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-gray-2 text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] whitespace-nowrap [font-style:var(--paragraph-small-font-style)]">
                    username123
                  </span>
                </div>

                <ChevronDownIcon className="w-5 h-5" color="#5d4bff" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[var(--radix-dropdown-menu-trigger-width)] font-aeonik font-[number:var(--label-small-font-weight)] text-gray-2 text-[length:var(--label-small-font-size)]">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <div className="flex flex-col w-full items-start gap-8 px-6 pb-6">
          <CommunityUpdatesCarousel />
          <EarningsOverview />
          <EarningsHistoryTable />
        </div>
      </main>
    </div>
  );
};
