import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class EnterHavenBagRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4036;

	public havenBagOwner: number = 0;

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
        this.deserializeAs_EnterHavenBagRequestMessage(input);
    }

    private deserializeAs_EnterHavenBagRequestMessage(input: ICustomDataInput)
    {
        this._havenBagOwnerFunc(input);
    }

    private _havenBagOwnerFunc(input: ICustomDataInput)
    {
        this.havenBagOwner = input.readVarUhLong();
        if(this.havenBagOwner < 0 || this.havenBagOwner > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.havenBagOwner + ") on element of EnterHavenBagRequestMessage.havenBagOwner.");
        }
    }

}