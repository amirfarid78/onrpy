"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="bg-white text-purple-600 p-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
        </button>
    );
}
