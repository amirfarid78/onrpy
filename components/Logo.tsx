import { Coins } from "lucide-react";

interface LogoProps {
    className?: string;
    iconSize?: number;
}

export default function Logo({ className = "", iconSize = 32 }: LogoProps) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="relative flex items-center justify-center">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full" />

                {/* Coin Icon Container */}
                <div className="relative bg-gradient-to-br from-orange-400 to-amber-600 rounded-full p-2 shadow-lg shadow-orange-500/30 border border-white/20">
                    <Coins
                        size={iconSize}
                        className="text-white fill-white/20"
                        strokeWidth={2.5}
                    />
                </div>
            </div>

            <div className="flex flex-col">
                <h1 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 leading-none tracking-tight">
                    <span className="text-2xl sm:text-3xl">One</span>
                    <span className="text-2xl sm:text-3xl text-orange-600">Rupee</span>
                </h1>
                <span className="text-[10px] sm:text-xs font-bold text-gray-400 tracking-widest uppercase ml-0.5">
                    Win Big • Pay Small
                </span>
            </div>
        </div>
    );
}
