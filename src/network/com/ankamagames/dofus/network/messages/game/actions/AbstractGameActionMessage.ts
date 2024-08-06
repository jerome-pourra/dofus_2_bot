import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AbstractGameActionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9631;

	public actionId: number = 0;
	public sourceId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AbstractGameActionMessage.protocolId;
    }

    public initAbstractGameActionMessage(actionId: number = 0, sourceId: number = 0): AbstractGameActionMessage
    {
        this.actionId = actionId;
        this.sourceId = sourceId;
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
        this.serializeAs_AbstractGameActionMessage(output);
    }

    public serializeAs_AbstractGameActionMessage(output: ICustomDataOutput)
    {
        if(this.actionId < 0)
        {
            throw new Error("Forbidden value (" + this.actionId + ") on element actionId.");
        }
        output.writeVarShort(this.actionId);
        if(this.sourceId < -9007199254740992 || this.sourceId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sourceId + ") on element sourceId.");
        }
        output.writeDouble(this.sourceId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AbstractGameActionMessage(input);
    }

    private deserializeAs_AbstractGameActionMessage(input: ICustomDataInput)
    {
        this._actionIdFunc(input);
        this._sourceIdFunc(input);
    }

    private _actionIdFunc(input: ICustomDataInput)
    {
        this.actionId = input.readVarUhShort();
        if(this.actionId < 0)
        {
            throw new Error("Forbidden value (" + this.actionId + ") on element of AbstractGameActionMessage.actionId.");
        }
    }

    private _sourceIdFunc(input: ICustomDataInput)
    {
        this.sourceId = input.readDouble();
        if(this.sourceId < -9007199254740992 || this.sourceId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sourceId + ") on element of AbstractGameActionMessage.sourceId.");
        }
    }

}