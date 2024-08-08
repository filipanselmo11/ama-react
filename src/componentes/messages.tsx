import { useParams } from "react-router-dom";
import { Message } from "./message";
import { getRoomMessages } from "../http/get-room-message";
import { useSuspenseQuery } from "@tanstack/react-query";

export function Messages() {
    const { roomId } = useParams();

    if (!roomId) {
        throw new Error('Messages componentes must be used within room page')
    }

    const { data } = useSuspenseQuery({
        queryKey: ['messages', roomId],
        queryFn: () => getRoomMessages({ roomId }),
    });

    // const { messages } = use(getRoomMessages({ roomId }))

    return (
        <ol className="list-decimal list-outside px-3 space-y-8">
            {data.messages.map(message => {
                return (
                    <Message
                        key={message.id}
                        text={message.text}
                        reactions={message.amountOfReactions}
                        answered={message.answered}
                    />
                )
            })}
        </ol>
    );
}