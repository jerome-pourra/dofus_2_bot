import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { CharacterLevelUpMessage } from "./CharacterLevelUpMessage";

export class CharacterLevelUpInformationMessage extends CharacterLevelUpMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3031;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public name: string = "";
	public id: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterLevelUpInformationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CharacterLevelUpInformationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CharacterLevelUpInformationMessage.endpointServer;
    }

    public initCharacterLevelUpInformationMessage(newLevel: number = 0, name: string = "", id: number = 0): CharacterLevelUpInformationMessage
    {
        super.initCharacterLevelUpMessage(newLevel);
        this.name = name;
        this.id = id;
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
        this.serializeAs_CharacterLevelUpInformationMessage(output);
    }

    public serializeAs_CharacterLevelUpInformationMessage(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterLevelUpMessage(output);
        output.writeUTF(this.name);
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarLong(this.id);
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