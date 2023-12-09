import ThreadsButton from "./components/buttons/button-one";
import GlowButton from "./components/buttons/button-three";
import FlowButton from "./components/buttons/button-two";

export default function Home() {
  return (
    <main>
      {/* Threads Button */}
      <div className="w-screen h-screen bg-black items-center justify-center flex">
        <ThreadsButton text="Sign up today" />
      </div>
      {/* Threads Button */}

      {/* Flow Button */}
      <div className="w-screen h-screen bg-black items-center justify-center flex">
        <FlowButton text="Visit Studio IX Today" />
      </div>
      {/* Flow Button */}

      {/* Glow Button */}
      <div className="w-screen h-screen bg-black items-center justify-center flex">
        <GlowButton text="Glow in the dark" />
      </div>
      {/* Glow Button */}
    </main>
  );
}
