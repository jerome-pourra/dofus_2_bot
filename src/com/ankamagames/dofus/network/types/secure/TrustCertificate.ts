import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../jerakine/network/INetworkType";

export class TrustCertificate implements INetworkType
{

	public static readonly protocolId: number = 3311;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public id: number = 0;
	public hash: string = "";

    public constructor()
    {

    }

    public getTypeId()
    {
        return TrustCertificate.protocolId;
    }

    public isEndpointClient()
    {
        return TrustCertificate.endpointClient;
    }

    public isEndpointServer()
    {
        return TrustCertificate.endpointServer;
    }

    public initTrustCertificate(id: number = 0, hash: string = ""): TrustCertificate
    {
        this.id = id;
        this.hash = hash;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TrustCertificate(output);
    }

    public serializeAs_TrustCertificate(output: ICustomDataOutput)
    {
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeInt(this.id);
        output.writeUTF(this.hash);
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