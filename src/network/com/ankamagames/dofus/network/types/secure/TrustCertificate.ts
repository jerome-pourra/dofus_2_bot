import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../jerakine/network/INetworkType";

export class TrustCertificate
{

	public static readonly protocolId: number = 3311;

	public id: number = 0;
	public hash: string = "";

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TrustCertificate(input);
    }

    private deserializeAs_TrustCertificate(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._hashFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readInt();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of TrustCertificate.id.");
        }
    }

    private _hashFunc(input: ICustomDataInput)
    {
        this.hash = input.readUTF();
    }

}