import { useParams } from "react-router-dom";
import { Share2, ArrowRight, ArrowUp } from "lucide-react";
import { toast } from "sonner";
import { Message } from "../componentes/message";
// import amaLogo from '../assets/ama.logo.svg

export function Room() {
    const { roomId } = useParams();

    function shareRoom() {
        const url = window.location.href.toString();

        if(navigator.share !== undefined && navigator.canShare()) {
            navigator.share({ url });
        } else {
            navigator.clipboard.writeText(url);

            toast('Room url was coppied on clipboard')
        }
    }

    return (
        <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
            <div className="flex items-center gap-3 px-3">
                {/* <img/> */}
                <h2>AMa logo</h2>
                <span className="text-sm text-zinc-500 truncate">
                    Código da sala: <span className="text-zinc-300">{roomId}</span>
                </span>
                <button
                    type="submit"
                    onClick={shareRoom}
                    className="ml-auto bg-zinc-800 text-zinc-300 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-zinc-700">
                    Compartilhar
                    <Share2 className="size-4" />
                </button>
            </div>
            <div className="h-px w-full bg-zinc-900">
                <form
                    className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-50 focus-within:border-orange-400">
                    <input
                        type="text"
                        name="theme"
                        autoComplete="off"
                        placeholder="Qual a sua pergunta ?"
                        className="flex-1 text-sm bg-transparent mx-2 outline-none text-zinc-100 placeholder:text-zinc-500"
                    />
                    <button
                        type="submit"
                        className="bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500">
                        Criar pergunta
                        <ArrowRight className="size-4" />
                    </button>
                </form>

                <ol className="list-decimal list-outside px-3 space-y-8">
                    <Message
                        text="Pergunta 1 ?"
                        reactions={100}
                        answered
                    />
                    <Message
                        text="Pergunta 2 ?"
                        reactions={50}
                    />
                    <Message
                        text="Pergunta 3 ?"
                        reactions={50}
                    />
                </ol>
            </div>
        </div>
    );
}