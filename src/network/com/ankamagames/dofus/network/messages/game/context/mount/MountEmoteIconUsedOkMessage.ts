import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountEmoteIconUsedOkMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3490;

	public mountId: number = 0;
	public reactionType: number = 0;

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
        this.deserializeAs_MountEmoteIconUsedOkMessage(input);
    }

    private deserializeAs_MountEmoteIconUsedOkMessage(input: ICustomDataInput)
    {
        this._mountIdFunc(input);
        this._reactionTypeFunc(input);
    }

    private _mountIdFunc(input: ICustomDataInput)
    {
        this.mountId = input.readVarInt();
    }

    private _reactionTypeFunc(input: ICustomDataInput)
    {
        this.reactionType = input.readByte();
        if(this.reactionType < 0)
        {
            throw new Error("Forbidden value (" + this.reactionType + ") on element of MountEmoteIconUsedOkMessage.reactionType.");
        }
    }

}