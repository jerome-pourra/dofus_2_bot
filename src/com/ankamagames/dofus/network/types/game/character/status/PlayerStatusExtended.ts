import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { PlayerStatus } from "./PlayerStatus";

export class PlayerStatusExtended extends PlayerStatus implements INetworkType
{

	public static readonly protocolId: number = 8257;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public message: string = "";

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return PlayerStatusExtended.protocolId;
    }

    public isEndpointClient()
    {
        return PlayerStatusExtended.endpointClient;
    }

    public isEndpointServer()
    {
        return PlayerStatusExtended.endpointServer;
    }

    public initPlayerStatusExtended(statusId: number = 1, message: string = ""): PlayerStatusExtended
    {
        super.initPlayerStatus(statusId);
        this.message = message;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PlayerStatusExtended(output);
    }

    public serializeAs_PlayerStatusExtended(output: ICustomDataOutput)
    {
        super.serializeAs_PlayerStatus(output);
        output.writeUTF(this.message);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PlayerStatusExtended(input);
    }

    private deserializeAs_PlayerStatusExtended(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._messageFunc(input);
    }

    private _messageFunc(input: ICustomDataInput)
    {
        this.message = input.readUTF();
    }

}