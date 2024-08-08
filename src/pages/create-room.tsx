// import logo from '../assets/ama-logo.svg
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"
import { toast } from "sonner";

export function CreateRoom() {

    const navigate = useNavigate();

    async function createRoom(data: FormData) {

        const theme = data.get('theme')?.toString();

        if(!theme) {
            return;
        }

        try {
            const { roomId } = await createRoom({ theme });
            navigate(`/room/${roomId}`);
        } catch {
            toast.error('Falha ao criar sala');
        }
        
    }

    return (
        <main className="h-screen flex items-center justify-center px-4">
            <div className="max-w-[45px] flex flex-col gap-6">
                {/* <img src={logo} alt="AMA" className="h-10"/> */}
                <p className="leading-relaxed text-zinc-300 text-center">
                    Crie uma sala pública de AMA e priorize as perguntas mais importantes para 
                    a comunidade.
                </p>
                <form
                    action={createRoom}
                    className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-50 focus-within:border-orange-400">
                    <input
                        type="text"
                        name="theme"
                        autoComplete="off"
                        placeholder="Nome da sala"
                        required
                        className="flex-1 text-sm bg-transparent mx-2 outline-none text-zinc-100 placeholder:text-zinc-500"
                    />
                    <button
                        type="submit"
                        className="bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500">
                        Criar sala
                        <ArrowRight className="size-4"/>
                    </button>
                </form>
            </div>
        </main>

    );
}