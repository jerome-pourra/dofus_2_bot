import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class StorageKamasUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8968;

	public kamasTotal: number = 0;

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
        this.deserializeAs_StorageKamasUpdateMessage(input);
    }

    private deserializeAs_StorageKamasUpdateMessage(input: ICustomDataInput)
    {
        this._kamasTotalFunc(input);
    }

    private _kamasTotalFunc(input: ICustomDataInput)
    {
        this.kamasTotal = input.readVarUhLong();
        if(this.kamasTotal < 0 || this.kamasTotal > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kamasTotal + ") on element of StorageKamasUpdateMessage.kamasTotal.");
        }
    }

}