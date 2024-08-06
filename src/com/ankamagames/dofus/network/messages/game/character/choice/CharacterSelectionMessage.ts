import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterSelectionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6792;

	public id: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterSelectionMessage.protocolId;
    }

    public initCharacterSelectionMessage(id: number = 0): CharacterSelectionMessage
    {
        this.id = id;
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
        this.serializeAs_CharacterSelectionMessage(output);
    }

    public serializeAs_CharacterSelectionMessage(output: ICustomDataOutput)
    {
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarLong(this.id);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterSelectionMessage(input);
    }

    private deserializeAs_CharacterSelectionMessage(input: ICustomDataInput)
    {
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhLong();
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of CharacterSelectionMessage.id.");
        }
    }

}