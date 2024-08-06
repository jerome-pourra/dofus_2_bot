import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class PortalUseRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6790;

	public portalId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PortalUseRequestMessage.protocolId;
    }

    public initPortalUseRequestMessage(portalId: number = 0): PortalUseRequestMessage
    {
        this.portalId = portalId;
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
        this.serializeAs_PortalUseRequestMessage(output);
    }

    public serializeAs_PortalUseRequestMessage(output: ICustomDataOutput)
    {
        if(this.portalId < 0)
        {
            throw new Error("Forbidden value (" + this.portalId + ") on element portalId.");
        }
        output.writeVarInt(this.portalId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PortalUseRequestMessage(input);
    }

    private deserializeAs_PortalUseRequestMessage(input: ICustomDataInput)
    {
        this._portalIdFunc(input);
    }

    private _portalIdFunc(input: ICustomDataInput)
    {
        this.portalId = input.readVarUhInt();
        if(this.portalId < 0)
        {
            throw new Error("Forbidden value (" + this.portalId + ") on element of PortalUseRequestMessage.portalId.");
        }
    }

}