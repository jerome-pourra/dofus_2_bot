import { PlayableBreedEnum } from "./../../../../enums/PlayableBreedEnum";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterCreationRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 491;

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

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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