import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightLeaveMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6974;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public charId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightLeaveMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightLeaveMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightLeaveMessage.endpointServer;
    }

    public initGameFightLeaveMessage(charId: number = 0): GameFightLeaveMessage
    {
        this.charId = charId;
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
        this.serializeAs_GameFightLeaveMessage(output);
    }

    public serializeAs_GameFightLeaveMessage(output: ICustomDataOutput)
    {
        if(this.charId < -9007199254740992 || this.charId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.charId + ") on element charId.");
        }
        output.writeDouble(this.charId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightLeaveMessage(input);
    }

    private deserializeAs_GameFightLeaveMessage(input: ICustomDataInput)
    {
        this._charIdFunc(input);
    }

    private _charIdFunc(input: ICustomDataInput)
    {
        this.charId = input.readDouble();
        if(this.charId < -9007199254740992 || this.charId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.charId + ") on element of GameFightLeaveMessage.charId.");
        }
    }

}