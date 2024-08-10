import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class Preset implements INetworkType
{

	public static readonly protocolId: number = 3628;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public id: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return Preset.protocolId;
    }

    public isEndpointClient()
    {
        return Preset.endpointClient;
    }

    public isEndpointServer()
    {
        return Preset.endpointServer;
    }

    public initPreset(id: number = 0): Preset
    {
        this.id = id;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_Preset(output);
    }

    public serializeAs_Preset(output: ICustomDataOutput)
    {
        output.writeShort(this.id);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_Preset(input);
    }

    private deserializeAs_Preset(input: ICustomDataInput)
    {
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readShort();
    }

}