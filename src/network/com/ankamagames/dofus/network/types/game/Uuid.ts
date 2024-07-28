import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../jerakine/network/INetworkType";

export class Uuid
{

	public static readonly protocolId: number = 8662;

	public uuidString: string = "";

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_Uuid(input);
    }

    private deserializeAs_Uuid(input: ICustomDataInput)
    {
        this._uuidStringFunc(input);
    }

    private _uuidStringFunc(input: ICustomDataInput)
    {
        this.uuidString = input.readUTF();
    }

}