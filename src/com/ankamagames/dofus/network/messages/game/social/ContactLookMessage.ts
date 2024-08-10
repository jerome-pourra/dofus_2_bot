import { EntityLook } from "./../../../types/game/look/EntityLook";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ContactLookMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4925;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public requestId: number = 0;
	public playerName: string = "";
	public playerId: number = 0;
	public look: EntityLook;

    public constructor()
    {
        super();
        this.look = new EntityLook();
    }

    public getMessageId()
    {
        return ContactLookMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ContactLookMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ContactLookMessage.endpointServer;
    }

    public initContactLookMessage(requestId: number = 0, playerName: string = "", playerId: number = 0, look: EntityLook = null): ContactLookMessage
    {
        this.requestId = requestId;
        this.playerName = playerName;
        this.playerId = playerId;
        this.look = look;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ContactLookMessage(output);
    }

    public serializeAs_ContactLookMessage(output: ICustomDataOutput)
    {
        if(this.requestId < 0)
        {
            throw new Error("Forbidden value (" + this.requestId + ") on element requestId.");
        }
        output.writeVarInt(this.requestId);
        output.writeUTF(this.playerName);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
        this.look.serializeAs_EntityLook(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ContactLookMessage(input);
    }

    private deserializeAs_ContactLookMessage(input: ICustomDataInput)
    {
        this._requestIdFunc(input);
        this._playerNameFunc(input);
        this._playerIdFunc(input);
        this.look = new EntityLook();
        this.look.deserialize(input);
    }

    private _requestIdFunc(input: ICustomDataInput)
    {
        this.requestId = input.readVarUhInt();
        if(this.requestId < 0)
        {
            throw new Error("Forbidden value (" + this.requestId + ") on element of ContactLookMessage.requestId.");
        }
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of ContactLookMessage.playerId.");
        }
    }

}