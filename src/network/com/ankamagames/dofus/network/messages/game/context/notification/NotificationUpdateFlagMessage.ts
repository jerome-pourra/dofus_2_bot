import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class NotificationUpdateFlagMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8455;

	public index: number = 0;

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
        this.deserializeAs_NotificationUpdateFlagMessage(input);
    }

    private deserializeAs_NotificationUpdateFlagMessage(input: ICustomDataInput)
    {
        this._indexFunc(input);
    }

    private _indexFunc(input: ICustomDataInput)
    {
        this.index = input.readVarUhShort();
        if(this.index < 0)
        {
            throw new Error("Forbidden value (" + this.index + ") on element of NotificationUpdateFlagMessage.index.");
        }
    }

}