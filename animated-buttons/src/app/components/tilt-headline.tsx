import { ArrowRight, LucideIcon } from "lucide-react";

interface TiltHeadlineProps {
    badgeText: string;
    badgeIcon: LucideIcon;
    mainText: string;
    href: string;
}

const TiltHeadline: React.FC<TiltHeadlineProps> = ({
    badgeText,
    badgeIcon: BadgeIcon,
    mainText,
    href
}) => {
    return (
        <div className="mb-1.5 w-fit rounded-full bg-gray-950">
            <a
                href={href}
                rel="nofollow"
                className="flex font-satoshi origin-top-left items-center rounded-full border border-black/90 bg-white p-[4px] transition-transform hover:-rotate-1"
            >
                <span className="rounded-full flex items-center gap-1.5 bg-[#FFDF3A] pl-3 pr-4 py-1 font-medium text-lg text-foregound">
                    <BadgeIcon size={20} />
                    {badgeText}
                </span>
                <span className="ml-1.5 mr-2 inline-block  font-medium text-lg text-black">
                    {mainText}
                </span>
                <ArrowRight size={20} className="mr-2 inline-block" />
            </a>
        </div>
    );
};

export default TiltHeadline;
