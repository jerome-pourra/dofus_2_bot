import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class RankMinimalInformation implements INetworkType
{

	public static readonly protocolId: number = 1831;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public id: number = 0;
	public name: string = "";

    public constructor()
    {

    }

    public getTypeId()
    {
        return RankMinimalInformation.protocolId;
    }

    public isEndpointClient()
    {
        return RankMinimalInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return RankMinimalInformation.endpointServer;
    }

    public initRankMinimalInformation(id: number = 0, name: string = ""): RankMinimalInformation
    {
        this.id = id;
        this.name = name;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_RankMinimalInformation(output);
    }

    public serializeAs_RankMinimalInformation(output: ICustomDataOutput)
    {
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarInt(this.id);
        output.writeUTF(this.name);
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