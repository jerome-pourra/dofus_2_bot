import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class TeleportHavenBagRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8587;

	public guestId: number = 0;

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
        this.deserializeAs_TeleportHavenBagRequestMessage(input);
    }

    private deserializeAs_TeleportHavenBagRequestMessage(input: ICustomDataInput)
    {
        this._guestIdFunc(input);
    }

    private _guestIdFunc(input: ICustomDataInput)
    {
        this.guestId = input.readVarUhLong();
        if(this.guestId < 0 || this.guestId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.guestId + ") on element of TeleportHavenBagRequestMessage.guestId.");
        }
    }

}