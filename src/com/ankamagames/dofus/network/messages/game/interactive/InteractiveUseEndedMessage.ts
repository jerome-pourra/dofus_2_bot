import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class InteractiveUseEndedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2897;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public elemId: number = 0;
	public skillId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return InteractiveUseEndedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return InteractiveUseEndedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return InteractiveUseEndedMessage.endpointServer;
    }

    public initInteractiveUseEndedMessage(elemId: number = 0, skillId: number = 0): InteractiveUseEndedMessage
    {
        this.elemId = elemId;
        this.skillId = skillId;
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
        this.serializeAs_InteractiveUseEndedMessage(output);
    }

    public serializeAs_InteractiveUseEndedMessage(output: ICustomDataOutput)
    {
        if(this.elemId < 0)
        {
            throw new Error("Forbidden value (" + this.elemId + ") on element elemId.");
        }
        output.writeVarInt(this.elemId);
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
        }
        output.writeVarShort(this.skillId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_InteractiveUseEndedMessage(input);
    }

    private deserializeAs_InteractiveUseEndedMessage(input: ICustomDataInput)
    {
        this._elemIdFunc(input);
        this._skillIdFunc(input);
    }

    private _elemIdFunc(input: ICustomDataInput)
    {
        this.elemId = input.readVarUhInt();
        if(this.elemId < 0)
        {
            throw new Error("Forbidden value (" + this.elemId + ") on element of InteractiveUseEndedMessage.elemId.");
        }
    }

    private _skillIdFunc(input: ICustomDataInput)
    {
        this.skillId = input.readVarUhShort();
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element of InteractiveUseEndedMessage.skillId.");
        }
    }

}