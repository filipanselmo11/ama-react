import { ArrowUp } from "lucide-react";
import { useState } from "react";

interface MessageProps {
    text: string;
    reactions: number;
    answered?: boolean;
}

export function Message({ text, reactions, answered = false }: MessageProps) {

    const [reacted, setReacted] = useState(false);


    function reactToMessage() {
        setReacted(true)
    }

    return (
        <li data-answered={answered} className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none">
            {text}
            {reacted ? (
                <button
                    type="button" className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium">
                    <ArrowUp className="size-4" />
                    Curtir pergunta({reactions})
                </button>
            ) : (
                <button
                    onClick={reactToMessage}
                    type="button" className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium">
                    <ArrowUp className="size-4" />
                    Curtir pergunta(3)
                </button>
            )}
        </li>
    );
}