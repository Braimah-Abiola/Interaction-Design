import ThreadsButton from "./components/buttons/button-one";
import FlowButton from "./components/buttons/button-two";

export default function Home() {
  return (
    <main>
      {/* Threads Button */}
      <div className="w-screen h-screen bg-black items-center justify-center flex">
        <ThreadsButton text="Sign up today" />
      </div>

      {/* Threads Button */}
      <div className="w-screen h-screen bg-black items-center justify-center flex">
        <FlowButton text="Visit Studio IX Today" />
      </div>
    </main>
  );
}
