import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class EnterHavenBagRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4036;

	public havenBagOwner: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return EnterHavenBagRequestMessage.protocolId;
    }

    public initEnterHavenBagRequestMessage(havenBagOwner: number = 0): EnterHavenBagRequestMessage
    {
        this.havenBagOwner = havenBagOwner;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_EnterHavenBagRequestMessage(output);
    }

    public serializeAs_EnterHavenBagRequestMessage(output: ICustomDataOutput)
    {
        if(this.havenBagOwner < 0 || this.havenBagOwner > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.havenBagOwner + ") on element havenBagOwner.");
        }
        output.writeVarLong(this.havenBagOwner);
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