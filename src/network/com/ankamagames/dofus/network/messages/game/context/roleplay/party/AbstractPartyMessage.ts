import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class AbstractPartyMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2039;

	public partyId: number = 0;

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
        this.deserializeAs_AbstractPartyMessage(input);
    }

    private deserializeAs_AbstractPartyMessage(input: ICustomDataInput)
    {
        this._partyIdFunc(input);
    }

    private _partyIdFunc(input: ICustomDataInput)
    {
        this.partyId = input.readVarUhInt();
        if(this.partyId < 0)
        {
            throw new Error("Forbidden value (" + this.partyId + ") on element of AbstractPartyMessage.partyId.");
        }
    }

}