import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class MountInformationsForPaddock
{

	public static readonly protocolId: number = 4252;

	public modelId: number = 0;
	public name: string = "";
	public ownerName: string = "";

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountInformationsForPaddock(input);
    }

    private deserializeAs_MountInformationsForPaddock(input: ICustomDataInput)
    {
        this._modelIdFunc(input);
        this._nameFunc(input);
        this._ownerNameFunc(input);
    }

    private _modelIdFunc(input: ICustomDataInput)
    {
        this.modelId = input.readVarUhShort();
        if(this.modelId < 0)
        {
            throw new Error("Forbidden value (" + this.modelId + ") on element of MountInformationsForPaddock.modelId.");
        }
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

    private _ownerNameFunc(input: ICustomDataInput)
    {
        this.ownerName = input.readUTF();
    }

}