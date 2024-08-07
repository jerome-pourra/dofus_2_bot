import { GameMapChangeOrientationMessage } from "../../com/ankamagames/dofus/network/messages/game/context/GameMapChangeOrientationMessage";
import { GameMapChangeOrientationRequestMessage } from "../../com/ankamagames/dofus/network/messages/game/context/GameMapChangeOrientationRequestMessage";
import { CustomDataWrapper } from "../../com/ankamagames/jerakine/network/CustomDataWrapper";
import { ConnectionHandler } from "../../network/ConnectionHandler";

export class GameMapChangeOrientationHandler {

    private _message: GameMapChangeOrientationMessage;

    constructor(message: GameMapChangeOrientationMessage) {
        this._message = message;
    }

    public process() {

        if (this._message.orientation.id === 811518853413) {

            setTimeout(() => {
                
                let orientation = Math.floor(Math.random() * (7 - 0 + 1) + 0);
    
                if (orientation < 0 || orientation > 7) {
                    throw new Error("Invalid orientation: " + orientation);
                }
    
                let gmcorm = new GameMapChangeOrientationRequestMessage();
                gmcorm.initGameMapChangeOrientationRequestMessage(orientation);
    
                // console.log(gmcorm);
    
                let result = new CustomDataWrapper();
                gmcorm.pack(result);
                ConnectionHandler.getServer().send(result.buffer);

            }, 100);

        }

    }

}