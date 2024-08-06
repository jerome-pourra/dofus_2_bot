import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class KnownZaapListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5253;

	public destinations: Array<number>;

    public constructor()
    {
        super();
        this.destinations = Array<number>();
    }

    public getMessageId()
    {
        return KnownZaapListMessage.protocolId;
    }

    public initKnownZaapListMessage(destinations: Array<number> = null): KnownZaapListMessage
    {
        this.destinations = destinations;
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
        this.serializeAs_KnownZaapListMessage(output);
    }

    public serializeAs_KnownZaapListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.destinations.length);
        for(var _i1: number = 0; _i1 < this.destinations.length; _i1++)
        {
            if(this.destinations[_i1] < 0 || this.destinations[_i1] > 9007199254740992)
            {
                throw new Error("Forbidden value (" + this.destinations[_i1] + ") on element 1 (starting at 1) of destinations.");
            }
            output.writeDouble(this.destinations[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_KnownZaapListMessage(input);
    }

    private deserializeAs_KnownZaapListMessage(input: ICustomDataInput)
    {
        let _val1: number = NaN;
        let _destinationsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _destinationsLen; _i1++)
        {
            _val1 = Number(input.readDouble());
            if(_val1 < 0 || _val1 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of destinations.");
            }
            this.destinations.push(_val1);
        }
    }

}