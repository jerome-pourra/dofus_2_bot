import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class AbstractCharacterInformation implements INetworkType
{

	public static readonly protocolId: number = 5789;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public id: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return AbstractCharacterInformation.protocolId;
    }

    public isEndpointClient()
    {
        return AbstractCharacterInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return AbstractCharacterInformation.endpointServer;
    }

    public initAbstractCharacterInformation(id: number = 0): AbstractCharacterInformation
    {
        this.id = id;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AbstractCharacterInformation(output);
    }

    public serializeAs_AbstractCharacterInformation(output: ICustomDataOutput)
    {
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarLong(this.id);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AbstractCharacterInformation(input);
    }

    private deserializeAs_AbstractCharacterInformation(input: ICustomDataInput)
    {
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhLong();
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of AbstractCharacterInformation.id.");
        }
    }

}