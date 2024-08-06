import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ObjectUseMessage } from "./ObjectUseMessage";

export class ObjectUseOnCharacterMessage extends ObjectUseMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2165;

	public characterId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ObjectUseOnCharacterMessage.protocolId;
    }

    public initObjectUseOnCharacterMessage(objectUID: number = 0, characterId: number = 0): ObjectUseOnCharacterMessage
    {
        super.initObjectUseMessage(objectUID);
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
        this.serializeAs_ObjectUseOnCharacterMessage(output);
    }

    public serializeAs_ObjectUseOnCharacterMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectUseMessage(output);
        if(this.characterId < 0 || this.characterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterId + ") on element characterId.");
        }
        output.writeVarLong(this.characterId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectUseOnCharacterMessage(input);
    }

    private deserializeAs_ObjectUseOnCharacterMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._characterIdFunc(input);
    }

    private _characterIdFunc(input: ICustomDataInput)
    {
        this.characterId = input.readVarUhLong();
        if(this.characterId < 0 || this.characterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterId + ") on element of ObjectUseOnCharacterMessage.characterId.");
        }
    }

}