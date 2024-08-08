import { useParams } from "react-router-dom";
import { Share2 } from "lucide-react";
import { toast } from "sonner";
import { Messages } from "../componentes/messages";
import { Suspense } from "react";
import { CreateMessageForm } from "../componentes/create-message-form";
// import amaLogo from '../assets/ama.logo.svg

export function Room() {
    const { roomId } = useParams();

    function shareRoom() {
        const url = window.location.href.toString();

        if (navigator.share !== undefined && navigator.canShare()) {
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
                <CreateMessageForm/>
                <Suspense fallback={<p>Carregando...</p>}>
                    <Messages />
                </Suspense>
            </div>
        </div>
    );
}