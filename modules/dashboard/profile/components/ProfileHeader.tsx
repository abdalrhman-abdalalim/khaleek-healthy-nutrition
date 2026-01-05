import Link from "next/link";
import { User, UserProfile } from "../models/get_profile/type";

interface Props {
  user: User;
  profile: UserProfile;
  goalMap: Record<string, string>;
}

const ProfileHeader = ({ user, profile, goalMap }: Props) => (
  <div
    className="  bg-linear-to-br from-secondary/40 to-secondary/20  backdrop-blur-xl rounded-3xl p-6 sm:p-8 mb-6  border border-foreground/20 shadow-2xl
      flex flex-col gap-6
      lg:flex-row lg:items-start lg:justify-between
    "
  >
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <div className="relative shrink-0">
        <div className="w-24 h-24 sm:w-28 sm:h-28 bg-linear-to-br from-foreground to-foreground/70 rounded-full flex items-center justify-center shadow-xl">
          <span className="text-4xl sm:text-5xl font-bold text-background">
            {user.name.charAt(0).toUpperCase()}
          </span>
        </div>
      </div>

      <div className="flex-1 text-center sm:text-right">
        <h1 className="text-3xl sm:text-4xl font-bold text-textcolor mb-2">
          {user.name}
        </h1>

        <p className="text-textcolor/70 text-base sm:text-lg mb-3 break-all">
          {user.email}
        </p>

        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          <span className="px-4 py-1.5 bg-foreground/20 rounded-full text-foreground text-sm font-medium">
            {profile.gender === "male" ? "ذكر" : "أنثى"}
          </span>
          <span className="px-4 py-1.5 bg-foreground/20 rounded-full text-foreground text-sm font-medium">
            {profile.age} سنة
          </span>
          <span className="px-4 py-1.5 bg-foreground/20 rounded-full text-foreground text-sm font-medium">
            {goalMap[profile.goal] || profile.goal}
          </span>
        </div>
      </div>
    </div>

    <div className="flex justify-center lg:justify-end">
      <Link
        href="/dashboard/profile/edit"
        className="inline-flex items-center justify-center gap-2  w-full sm:w-auto  px-6 py-3  bg-foreground text-background  rounded-xl font-semibold  hover:bg-foreground/90  transition-all shadow-lg"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536M9 11l6.232-6.232a2.5 2.5 0 013.536 3.536L12.536 14.536A4 4 0 019 15H5v-4a4 4 0 011-2.828z"
          />
        </svg>
        تعديل الملف الشخصي
      </Link>
    </div>
  </div>
);

export default ProfileHeader;
