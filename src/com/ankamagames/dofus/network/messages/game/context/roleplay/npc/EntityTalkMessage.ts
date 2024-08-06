import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class EntityTalkMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1171;

	public entityId: number = 0;
	public textId: number = 0;
	public parameters: Array<string>;

    public constructor()
    {
        super();
        this.parameters = Array<string>();
    }

    public getMessageId()
    {
        return EntityTalkMessage.protocolId;
    }

    public initEntityTalkMessage(entityId: number = 0, textId: number = 0, parameters: Array<string> = null): EntityTalkMessage
    {
        this.entityId = entityId;
        this.textId = textId;
        this.parameters = parameters;
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
        this.serializeAs_EntityTalkMessage(output);
    }

    public serializeAs_EntityTalkMessage(output: ICustomDataOutput)
    {
        if(this.entityId < -9007199254740992 || this.entityId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.entityId + ") on element entityId.");
        }
        output.writeDouble(this.entityId);
        if(this.textId < 0)
        {
            throw new Error("Forbidden value (" + this.textId + ") on element textId.");
        }
        output.writeVarShort(this.textId);
        output.writeShort(this.parameters.length);
        for(var _i3: number = 0; _i3 < this.parameters.length; _i3++)
        {
            output.writeUTF(this.parameters[_i3]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EntityTalkMessage(input);
    }

    private deserializeAs_EntityTalkMessage(input: ICustomDataInput)
    {
        let _val3: string;
        this._entityIdFunc(input);
        this._textIdFunc(input);
        let _parametersLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _parametersLen; _i3++)
        {
            _val3 = String(input.readUTF());
            this.parameters.push(_val3);
        }
    }

    private _entityIdFunc(input: ICustomDataInput)
    {
        this.entityId = input.readDouble();
        if(this.entityId < -9007199254740992 || this.entityId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.entityId + ") on element of EntityTalkMessage.entityId.");
        }
    }

    private _textIdFunc(input: ICustomDataInput)
    {
        this.textId = input.readVarUhShort();
        if(this.textId < 0)
        {
            throw new Error("Forbidden value (" + this.textId + ") on element of EntityTalkMessage.textId.");
        }
    }

}