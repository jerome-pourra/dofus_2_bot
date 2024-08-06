import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaSwitchToGameServerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6763;

	public validToken: boolean = false;
	public token: string = "";
	public homeServerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayArenaSwitchToGameServerMessage.protocolId;
    }

    public initGameRolePlayArenaSwitchToGameServerMessage(validToken: boolean = false, token: string = "", homeServerId: number = 0): GameRolePlayArenaSwitchToGameServerMessage
    {
        this.validToken = validToken;
        this.token = token;
        this.homeServerId = homeServerId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayArenaSwitchToGameServerMessage(output);
    }

    public serializeAs_GameRolePlayArenaSwitchToGameServerMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.validToken);
        output.writeUTF(this.token);
        output.writeShort(this.homeServerId);
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