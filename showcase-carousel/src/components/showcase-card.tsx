import Image from "next/image";
import Link from "next/link";

const ShowcaseCard = ({
    title,
    image,
    link,
    video,
    icon,
    color
}: {
    title: string;
    video?: string;
    image: string;
    link: string;
    icon: string;
    color: string;
}) => {
    return (
        <div className=" w-full group/card">
            {video ? (
                <div style={{ backgroundColor: color }} className=" rounded-xl w-full p-2.5 md:p-4 relative">
                    <Link rel="" target="_blank" href={link}>
                        <div className="absolute hidden rounded-lg group-hover/card:block inset-0 z-20 hover:block cursor-pointer opacity-40" style={{ backgroundColor: color }} />
                    </Link>
                    <video
                        className="w-full h-auto aspect-square rounded-lg"
                        playsInline
                        autoPlay
                        loop
                        muted
                        poster={image}
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                <div className=" w-full relative h-auto aspect-square">
                    <Link rel="" target="_blank" href={link}>
                        <div className="absolute hidden rounded-lg group-hover/card:block inset-0 z-20 hover:block cursor-pointer opacity-40" style={{ backgroundColor: color }} />
                    </Link>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            )}
            <div className="flex items-center gap-4 mt-4">
                <Image width={40} height={40} src={icon} className=" object-cover border rounded-full" alt={title} />
                <div className="flex flex-col items-start text-white">
                    <p>{link}</p>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseCard;