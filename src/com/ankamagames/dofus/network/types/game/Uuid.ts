import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../jerakine/network/INetworkType";

export class Uuid implements INetworkType
{

	public static readonly protocolId: number = 8662;

	public uuidString: string = "";

    public constructor()
    {

    }

    public getTypeId()
    {
        return Uuid.protocolId;
    }

    public initUuid(uuidString: string = ""): Uuid
    {
        this.uuidString = uuidString;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_Uuid(output);
    }

    public serializeAs_Uuid(output: ICustomDataOutput)
    {
        output.writeUTF(this.uuidString);
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