import TiltHeadline from "@/app/components/tilt-headline";
import { Merge } from 'lucide-react';

const TiltHeadlinePage = () => {
    return (
        <div className=" w-full h-screen flex items-center justify-center bg-[#FFF7CC]">
            <TiltHeadline badgeIcon={Merge} badgeText="Beta" href="/" mainText="Get Early Access Now" />
        </div>
    );
}

export default TiltHeadlinePage;