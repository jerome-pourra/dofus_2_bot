import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class PortalUseRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6790;

	public portalId: number = 0;

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