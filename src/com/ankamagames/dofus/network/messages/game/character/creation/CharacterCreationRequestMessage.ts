import { PlayableBreedEnum } from "./../../../../enums/PlayableBreedEnum";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterCreationRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 491;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public name: string = "";
	public breed: number = 0;
	public sex: boolean = false;
	public colors: Array<number>;
	public cosmeticId: number = 0;

    public constructor()
    {
        super();
        this.colors = Array<number>(5);
    }

    public getMessageId()
    {
        return CharacterCreationRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CharacterCreationRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CharacterCreationRequestMessage.endpointServer;
    }

    public initCharacterCreationRequestMessage(name: string = "", breed: number = 0, sex: boolean = false, colors: Array<number> = null, cosmeticId: number = 0): CharacterCreationRequestMessage
    {
        this.name = name;
        this.breed = breed;
        this.sex = sex;
        this.colors = colors;
        this.cosmeticId = cosmeticId;
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
        this.serializeAs_CharacterCreationRequestMessage(output);
    }

    public serializeAs_CharacterCreationRequestMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.name);
        output.writeByte(this.breed);
        output.writeBoolean(this.sex);
        for(var _i4: number = 0; _i4 < 5; _i4++)
        {
            output.writeInt(this.colors[_i4]);
        }
        if(this.cosmeticId < 0)
        {
            throw new Error("Forbidden value (" + this.cosmeticId + ") on element cosmeticId.");
        }
        output.writeVarShort(this.cosmeticId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterCreationRequestMessage(input);
    }

    private deserializeAs_CharacterCreationRequestMessage(input: ICustomDataInput)
    {
        this._nameFunc(input);
        this._breedFunc(input);
        this._sexFunc(input);
        for(let _i4: number = 0; _i4 < 5; _i4++)
        {
            this.colors[_i4] = input.readInt();
        }
        this._cosmeticIdFunc(input);
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

    private _breedFunc(input: ICustomDataInput)
    {
        this.breed = input.readByte();
        if(this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Forgelance)
        {
            throw new Error("Forbidden value (" + this.breed + ") on element of CharacterCreationRequestMessage.breed.");
        }
    }

    private _sexFunc(input: ICustomDataInput)
    {
        this.sex = input.readBoolean();
    }

    private _cosmeticIdFunc(input: ICustomDataInput)
    {
        this.cosmeticId = input.readVarUhShort();
        if(this.cosmeticId < 0)
        {
            throw new Error("Forbidden value (" + this.cosmeticId + ") on element of CharacterCreationRequestMessage.cosmeticId.");
        }
    }

}