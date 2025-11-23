import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";

const leaderboardData = [
  {
    rank: "1",
    user: "0x479bd...2a1b3",
    avatar: "/images/avatars/frame-6-1.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "56",
    isCurrentUser: false,
  },
  {
    rank: "2",
    user: "0x39a02...1e791",
    avatar: "/images/avatars/frame-6-2.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "43",
    isCurrentUser: false,
  },
  {
    rank: "3",
    user: "0xb36a4...1d3a3",
    avatar: "/images/avatars/frame-6-3.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "41",
    isCurrentUser: false,
  },
  {
    rank: "4",
    user: "0x321c7...c3d8d",
    avatar: "/images/avatars/frame-6-4.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "32",
    isCurrentUser: false,
  },
  {
    rank: "5",
    user: "0x932d1...134015",
    avatar: "/images/avatars/frame-6-5.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "30",
    isCurrentUser: false,
  },
  {
    rank: "6",
    user: "0x6542e...2a407",
    avatar: "/images/avatars/frame-6-6.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "30",
    isCurrentUser: false,
  },
  {
    rank: "7",
    user: "0x345c9...7a06a",
    avatar: "/images/avatars/frame-6-7.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "30",
    isCurrentUser: false,
  },
  {
    rank: "8",
    user: "0x9a49a...bece6",
    avatar: "/images/avatars/frame-6-8.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "28",
    isCurrentUser: false,
  },
  {
    rank: "9",
    user: "0x03641...452b87",
    avatar: "/images/avatars/frame-6-9.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "12",
    isCurrentUser: false,
  },
  {
    rank: "10",
    user: "0x4a6a0...516f2",
    avatar: "/images/avatars/frame-6-10.png",
    lifetimeEarning: "20,023",
    thisEpoch: "3,150",
    referrals: "12",
    isCurrentUser: false,
  },
];

const currentUserData = {
  rank: "230",
  user: "0x9ec42...79da5",
  avatar: "..//frame-6.png",
  lifetimeEarning: "20,023",
  thisEpoch: "3,150",
  referrals: "5",
  isCurrentUser: true,
};

export const EarningsHistoryTable = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start">
      <div className="flex flex-col items-start gap-4 w-full">
        <Badge className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#eeecfe] rounded-lg shadow-shadow-1 hover:bg-[#eeecfe]">
          <span className="font-neuebit text-[length:var(--caption-medium-font-size)] text-[#5d4bff]">
            LEADERBOARD
          </span>
        </Badge>

        <table className="w-full border-collapse font-aeonik">
          <thead>
            <tr>
              <th className="text-left w-8 font-medium text-gray text-[length:var(--label-small-font-size)] pt-0 pb-3 px-4 py-0">
                Rank
              </th>
              <th className="text-left w-[122px] font-medium text-gray text-[length:var(--label-small-font-size)] pt-0 pb-3 px-4 py-0">
                User
              </th>
              <th className="text-left w-[122px] font-medium text-gray text-[length:var(--label-small-font-size)] pt-0 pb-3 px-4 py-0">
                Lifetime Earning
              </th>
              <th className="text-left w-[122px] font-medium text-gray text-[length:var(--label-small-font-size)] pt-0 pb-3 px-4 py-0">
                This Epoch
              </th>
              <th className="text-left w-[122px] font-medium text-gray text-[length:var(--label-small-font-size)] pt-0 pb-3 px-4 py-0">
                Referrals
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#eeecfe] border-b [border-bottom-style:solid] border-[#eeecfe]">
              <td className="px-4 py-3 font-neuebit text-[#5d4bff] text-[length:var(--caption-large-font-size)]">
                {currentUserData.rank}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <Avatar className="w-5 h-5">
                    <AvatarImage
                      src={currentUserData.avatar}
                      alt={currentUserData.user}
                    />
                    <AvatarFallback>{currentUserData.user.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="font-[number:var(--label-small-font-weight)] text-[#5d4bff] text-[length:var(--label-small-font-size)]">
                    {currentUserData.user}
                  </span>
                </div>
              </td>
              <td className="px-4 py-3 font-[number:var(--label-small-font-weight)] text-[#5d4bff] text-[length:var(--label-small-font-size)]">
                {currentUserData.lifetimeEarning}
              </td>
              <td className="px-4 py-3 font-medium text-[#5d4bff] text-sm tracking-[-0.56px] leading-[normal]">
                {currentUserData.thisEpoch}
              </td>
              <td className="px-4 py-3 font-medium text-[#5d4bff] text-sm tracking-[-0.56px] leading-[normal]">
                {currentUserData.referrals}
              </td>
            </tr>
            {leaderboardData.map((entry, index) => (
              <tr
                key={`leaderboard-${index}`}
                className="border-b [border-bottom-style:solid] border-[#eeecfe] hover:bg-[#EEECFE] hover:bg-opacity-40 duration-100 transition-colors"
              >
                <td className="px-4 py-3 font-neuebit text-gray-2 text-[length:var(--caption-large-font-size)]">
                  {entry.rank}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src={entry.avatar} alt={entry.user} />
                      <AvatarFallback>{entry.user.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="font-[number:var(--label-small-font-weight)] text-gray-2 text-[length:var(--label-small-font-size)]">
                      {entry.user}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 font-[number:var(--label-small-font-weight)] text-gray-2 text-[length:var(--label-small-font-size)]">
                  {entry.lifetimeEarning}
                </td>
                <td className="px-4 py-3 font-medium text-gray-2 text-sm tracking-[-0.56px] leading-[normal]">
                  {entry.thisEpoch}
                </td>
                <td className="px-4 py-3 font-medium text-gray-2 text-sm tracking-[-0.56px] leading-[normal]">
                  {entry.referrals}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
