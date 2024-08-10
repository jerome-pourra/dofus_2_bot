import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SymbioticObjectAssociatedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7196;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public hostUID: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SymbioticObjectAssociatedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return SymbioticObjectAssociatedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return SymbioticObjectAssociatedMessage.endpointServer;
    }

    public initSymbioticObjectAssociatedMessage(hostUID: number = 0): SymbioticObjectAssociatedMessage
    {
        this.hostUID = hostUID;
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
        this.serializeAs_SymbioticObjectAssociatedMessage(output);
    }

    public serializeAs_SymbioticObjectAssociatedMessage(output: ICustomDataOutput)
    {
        if(this.hostUID < 0)
        {
            throw new Error("Forbidden value (" + this.hostUID + ") on element hostUID.");
        }
        output.writeVarInt(this.hostUID);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SymbioticObjectAssociatedMessage(input);
    }

    private deserializeAs_SymbioticObjectAssociatedMessage(input: ICustomDataInput)
    {
        this._hostUIDFunc(input);
    }

    private _hostUIDFunc(input: ICustomDataInput)
    {
        this.hostUID = input.readVarUhInt();
        if(this.hostUID < 0)
        {
            throw new Error("Forbidden value (" + this.hostUID + ") on element of SymbioticObjectAssociatedMessage.hostUID.");
        }
    }

}