import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { CharacterLevelUpMessage } from "./CharacterLevelUpMessage";

export class CharacterLevelUpInformationMessage extends CharacterLevelUpMessage
{

	public static readonly protocolId: number = 3031;

	public name: string = "";
	public id: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterLevelUpInformationMessage(input);
    }

    private deserializeAs_CharacterLevelUpInformationMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._nameFunc(input);
        this._idFunc(input);
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhLong();
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of CharacterLevelUpInformationMessage.id.");
        }
    }

}