import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class MountInformationsForPaddock implements INetworkType
{

	public static readonly protocolId: number = 4252;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public modelId: number = 0;
	public name: string = "";
	public ownerName: string = "";

    public constructor()
    {

    }

    public getTypeId()
    {
        return MountInformationsForPaddock.protocolId;
    }

    public isEndpointClient()
    {
        return MountInformationsForPaddock.endpointClient;
    }

    public isEndpointServer()
    {
        return MountInformationsForPaddock.endpointServer;
    }

    public initMountInformationsForPaddock(modelId: number = 0, name: string = "", ownerName: string = ""): MountInformationsForPaddock
    {
        this.modelId = modelId;
        this.name = name;
        this.ownerName = ownerName;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_MountInformationsForPaddock(output);
    }

    public serializeAs_MountInformationsForPaddock(output: ICustomDataOutput)
    {
        if(this.modelId < 0)
        {
            throw new Error("Forbidden value (" + this.modelId + ") on element modelId.");
        }
        output.writeVarShort(this.modelId);
        output.writeUTF(this.name);
        output.writeUTF(this.ownerName);
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