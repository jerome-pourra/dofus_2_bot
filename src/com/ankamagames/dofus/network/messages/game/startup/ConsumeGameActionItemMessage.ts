import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ConsumeGameActionItemMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2113;

	public actionId: number = 0;
	public characterId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ConsumeGameActionItemMessage.protocolId;
    }

    public initConsumeGameActionItemMessage(actionId: number = 0, characterId: number = 0): ConsumeGameActionItemMessage
    {
        this.actionId = actionId;
        this.characterId = characterId;
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
        this.serializeAs_ConsumeGameActionItemMessage(output);
    }

    public serializeAs_ConsumeGameActionItemMessage(output: ICustomDataOutput)
    {
        if(this.actionId < 0)
        {
            throw new Error("Forbidden value (" + this.actionId + ") on element actionId.");
        }
        output.writeInt(this.actionId);
        if(this.characterId < 0 || this.characterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterId + ") on element characterId.");
        }
        output.writeVarLong(this.characterId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ConsumeGameActionItemMessage(input);
    }

    private deserializeAs_ConsumeGameActionItemMessage(input: ICustomDataInput)
    {
        this._actionIdFunc(input);
        this._characterIdFunc(input);
    }

    private _actionIdFunc(input: ICustomDataInput)
    {
        this.actionId = input.readInt();
        if(this.actionId < 0)
        {
            throw new Error("Forbidden value (" + this.actionId + ") on element of ConsumeGameActionItemMessage.actionId.");
        }
    }

    private _characterIdFunc(input: ICustomDataInput)
    {
        this.characterId = input.readVarUhLong();
        if(this.characterId < 0 || this.characterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterId + ") on element of ConsumeGameActionItemMessage.characterId.");
        }
    }

}