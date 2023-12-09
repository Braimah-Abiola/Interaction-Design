import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col gap-8">
      <span className="rainbow-label">
        <span>Best Viewed On Desktop</span>
      </span>
      <h1>
        3D Cube <br /> Interaction
      </h1>
      <p className="max-w-md">
        A simple recreation of the nice cube effect seen on resend.com, Made for
        Studio IX.
      </p>
      <div className="flex flex-row gap-2">
        <Link
          href="https://resend.com/"
          className="section-btns"
          target="_blank"
        >
          Visit Resend
          <svg
            width="14px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
        <Link
          href="https://stacksorted.com/"
          className="section-btns right"
          target="_blank"
        >
          Visit StackSorted
          <svg
            width="14px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
