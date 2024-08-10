import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AccessoryPreviewRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 375;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public genericId: Array<number>;

    public constructor()
    {
        super();
        this.genericId = Array<number>();
    }

    public getMessageId()
    {
        return AccessoryPreviewRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AccessoryPreviewRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AccessoryPreviewRequestMessage.endpointServer;
    }

    public initAccessoryPreviewRequestMessage(genericId: Array<number> = null): AccessoryPreviewRequestMessage
    {
        this.genericId = genericId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AccessoryPreviewRequestMessage(output);
    }

    public serializeAs_AccessoryPreviewRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.genericId.length);
        for(var _i1: number = 0; _i1 < this.genericId.length; _i1++)
        {
            if(this.genericId[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.genericId[_i1] + ") on element 1 (starting at 1) of genericId.");
            }
            output.writeVarInt(this.genericId[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AccessoryPreviewRequestMessage(input);
    }

    private deserializeAs_AccessoryPreviewRequestMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _genericIdLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _genericIdLen; _i1++)
        {
            _val1 = input.readVarUhInt();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of genericId.");
            }
            this.genericId.push(_val1);
        }
    }

}