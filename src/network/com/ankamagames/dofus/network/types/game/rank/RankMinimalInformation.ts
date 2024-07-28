import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class RankMinimalInformation
{

	public static readonly protocolId: number = 1831;

	public id: number = 0;
	public name: string = "";

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_RankMinimalInformation(input);
    }

    private deserializeAs_RankMinimalInformation(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._nameFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhInt();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of RankMinimalInformation.id.");
        }
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

}