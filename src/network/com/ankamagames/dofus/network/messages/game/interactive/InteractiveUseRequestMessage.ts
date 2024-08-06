import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class InteractiveUseRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1424;

	public elemId: number = 0;
	public skillInstanceUid: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return InteractiveUseRequestMessage.protocolId;
    }

    public initInteractiveUseRequestMessage(elemId: number = 0, skillInstanceUid: number = 0): InteractiveUseRequestMessage
    {
        this.elemId = elemId;
        this.skillInstanceUid = skillInstanceUid;
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
        this.serializeAs_InteractiveUseRequestMessage(output);
    }

    public serializeAs_InteractiveUseRequestMessage(output: ICustomDataOutput)
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
        this.deserializeAs_InteractiveUseRequestMessage(input);
    }

    private deserializeAs_InteractiveUseRequestMessage(input: ICustomDataInput)
    {
        this._elemIdFunc(input);
        this._skillInstanceUidFunc(input);
    }

    private _elemIdFunc(input: ICustomDataInput)
    {
        this.elemId = input.readVarUhInt();
        if(this.elemId < 0)
        {
            throw new Error("Forbidden value (" + this.elemId + ") on element of InteractiveUseRequestMessage.elemId.");
        }
    }

    private _skillInstanceUidFunc(input: ICustomDataInput)
    {
        this.skillInstanceUid = input.readVarUhInt();
        if(this.skillInstanceUid < 0)
        {
            throw new Error("Forbidden value (" + this.skillInstanceUid + ") on element of InteractiveUseRequestMessage.skillInstanceUid.");
        }
    }

}