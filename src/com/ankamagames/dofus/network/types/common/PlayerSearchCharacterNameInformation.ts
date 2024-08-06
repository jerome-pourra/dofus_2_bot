import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../jerakine/network/INetworkType";
import { AbstractPlayerSearchInformation } from "./AbstractPlayerSearchInformation";

export class PlayerSearchCharacterNameInformation extends AbstractPlayerSearchInformation implements INetworkType
{

	public static readonly protocolId: number = 3022;

	public name: string = "";

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return PlayerSearchCharacterNameInformation.protocolId;
    }

    public initPlayerSearchCharacterNameInformation(name: string = ""): PlayerSearchCharacterNameInformation
    {
        this.name = name;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PlayerSearchCharacterNameInformation(output);
    }

    public serializeAs_PlayerSearchCharacterNameInformation(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPlayerSearchInformation(output);
        output.writeUTF(this.name);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PlayerSearchCharacterNameInformation(input);
    }

    private deserializeAs_PlayerSearchCharacterNameInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._nameFunc(input);
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

}