"use client"

import FlipButton from "@/app/components/buttons/button-three";

const ButtonThree = () => {
    return (
        <div className="w-screen h-screen bg-black items-center justify-center flex flex-col gap-8">
            <FlipButton
                text="Astrae Design"
                href="https://astrae.design"
            />
        </div>
    );
}

export default ButtonThree;