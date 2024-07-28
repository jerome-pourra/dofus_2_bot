import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorRemovedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2310;

	public collectorId: number = 0;

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
        this.deserializeAs_TaxCollectorRemovedMessage(input);
    }

    private deserializeAs_TaxCollectorRemovedMessage(input: ICustomDataInput)
    {
        this._collectorIdFunc(input);
    }

    private _collectorIdFunc(input: ICustomDataInput)
    {
        this.collectorId = input.readDouble();
        if(this.collectorId < 0 || this.collectorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.collectorId + ") on element of TaxCollectorRemovedMessage.collectorId.");
        }
    }

}