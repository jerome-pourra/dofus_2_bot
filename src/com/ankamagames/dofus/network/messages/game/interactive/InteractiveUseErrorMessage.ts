import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class InteractiveUseErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2991;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public elemId: number = 0;
	public skillInstanceUid: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return InteractiveUseErrorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return InteractiveUseErrorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return InteractiveUseErrorMessage.endpointServer;
    }

    public initInteractiveUseErrorMessage(elemId: number = 0, skillInstanceUid: number = 0): InteractiveUseErrorMessage
    {
        this.elemId = elemId;
        this.skillInstanceUid = skillInstanceUid;
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
        this.serializeAs_InteractiveUseErrorMessage(output);
    }

    public serializeAs_InteractiveUseErrorMessage(output: ICustomDataOutput)
    {
        if(this.elemId < 0)
        {
            throw new Error("Forbidden value (" + this.elemId + ") on element elemId.");
        }
        output.writeVarInt(this.elemId);
        if(this.skillInstanceUid < 0)
        {
            throw new Error("Forbidden value (" + this.skillInstanceUid + ") on element skillInstanceUid.");
        }
        output.writeVarInt(this.skillInstanceUid);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_InteractiveUseErrorMessage(input);
    }

    private deserializeAs_InteractiveUseErrorMessage(input: ICustomDataInput)
    {
        this._elemIdFunc(input);
        this._skillInstanceUidFunc(input);
    }

    private _elemIdFunc(input: ICustomDataInput)
    {
        this.elemId = input.readVarUhInt();
        if(this.elemId < 0)
        {
            throw new Error("Forbidden value (" + this.elemId + ") on element of InteractiveUseErrorMessage.elemId.");
        }
    }

    private _skillInstanceUidFunc(input: ICustomDataInput)
    {
        this.skillInstanceUid = input.readVarUhInt();
        if(this.skillInstanceUid < 0)
        {
            throw new Error("Forbidden value (" + this.skillInstanceUid + ") on element of InteractiveUseErrorMessage.skillInstanceUid.");
        }
    }

}