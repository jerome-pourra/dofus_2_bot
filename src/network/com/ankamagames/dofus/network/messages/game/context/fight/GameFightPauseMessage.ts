import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightPauseMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1045;

	public isPaused: boolean = false;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightPauseMessage(input);
    }

    private deserializeAs_GameFightPauseMessage(input: ICustomDataInput)
    {
        this._isPausedFunc(input);
    }

    private _isPausedFunc(input: ICustomDataInput)
    {
        this.isPaused = input.readBoolean();
    }

}