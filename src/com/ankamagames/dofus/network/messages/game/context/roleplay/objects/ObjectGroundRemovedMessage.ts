import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ObjectGroundRemovedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5855;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public cell: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ObjectGroundRemovedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectGroundRemovedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectGroundRemovedMessage.endpointServer;
    }

    public initObjectGroundRemovedMessage(cell: number = 0): ObjectGroundRemovedMessage
    {
        this.cell = cell;
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
        this.serializeAs_ObjectGroundRemovedMessage(output);
    }

    public serializeAs_ObjectGroundRemovedMessage(output: ICustomDataOutput)
    {
        if(this.cell < 0 || this.cell > 559)
        {
            throw new Error("Forbidden value (" + this.cell + ") on element cell.");
        }
        output.writeVarShort(this.cell);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectGroundRemovedMessage(input);
    }

    private deserializeAs_ObjectGroundRemovedMessage(input: ICustomDataInput)
    {
        this._cellFunc(input);
    }

    private _cellFunc(input: ICustomDataInput)
    {
        this.cell = input.readVarUhShort();
        if(this.cell < 0 || this.cell > 559)
        {
            throw new Error("Forbidden value (" + this.cell + ") on element of ObjectGroundRemovedMessage.cell.");
        }
    }

}