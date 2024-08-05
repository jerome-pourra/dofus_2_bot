import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaSwitchToGameServerMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6763;

	public validToken: boolean = false;
	public token: string = "";
	public homeServerId: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayArenaSwitchToGameServerMessage(input);
    }

    private deserializeAs_GameRolePlayArenaSwitchToGameServerMessage(input: ICustomDataInput)
    {
        this._validTokenFunc(input);
        this._tokenFunc(input);
        this._homeServerIdFunc(input);
    }

    private _validTokenFunc(input: ICustomDataInput)
    {
        this.validToken = input.readBoolean();
    }

    private _tokenFunc(input: ICustomDataInput)
    {
        this.token = input.readUTF();
    }

    private _homeServerIdFunc(input: ICustomDataInput)
    {
        this.homeServerId = input.readShort();
    }

}