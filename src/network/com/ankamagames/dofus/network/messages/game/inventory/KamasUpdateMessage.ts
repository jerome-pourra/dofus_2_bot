import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class KamasUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 654;

	public kamasTotal: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return KamasUpdateMessage.protocolId;
    }

    public initKamasUpdateMessage(kamasTotal: number = 0): KamasUpdateMessage
    {
        this.kamasTotal = kamasTotal;
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
        this.serializeAs_KamasUpdateMessage(output);
    }

    public serializeAs_KamasUpdateMessage(output: ICustomDataOutput)
    {
        if(this.kamasTotal < 0 || this.kamasTotal > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kamasTotal + ") on element kamasTotal.");
        }
        output.writeVarLong(this.kamasTotal);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_KamasUpdateMessage(input);
    }

    private deserializeAs_KamasUpdateMessage(input: ICustomDataInput)
    {
        this._kamasTotalFunc(input);
    }

    private _kamasTotalFunc(input: ICustomDataInput)
    {
        this.kamasTotal = input.readVarUhLong();
        if(this.kamasTotal < 0 || this.kamasTotal > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kamasTotal + ") on element of KamasUpdateMessage.kamasTotal.");
        }
    }

}