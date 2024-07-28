import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightLeaveMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6974;

	public charId: number = 0;

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
        this.deserializeAs_GameFightLeaveMessage(input);
    }

    private deserializeAs_GameFightLeaveMessage(input: ICustomDataInput)
    {
        this._charIdFunc(input);
    }

    private _charIdFunc(input: ICustomDataInput)
    {
        this.charId = input.readDouble();
        if(this.charId < -9007199254740992 || this.charId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.charId + ") on element of GameFightLeaveMessage.charId.");
        }
    }

}