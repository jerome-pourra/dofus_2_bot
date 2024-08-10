import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { EmotePlayAbstractMessage } from "./EmotePlayAbstractMessage";

export class EmotePlayMessage extends EmotePlayAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3198;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public actorId: number = 0;
	public accountId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return EmotePlayMessage.protocolId;
    }

    public isEndpointClient()
    {
        return EmotePlayMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return EmotePlayMessage.endpointServer;
    }

    public initEmotePlayMessage(emoteId: number = 0, emoteStartTime: number = 0, actorId: number = 0, accountId: number = 0): EmotePlayMessage
    {
        super.initEmotePlayAbstractMessage(emoteId,emoteStartTime);
        this.actorId = actorId;
        this.accountId = accountId;
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
        this.serializeAs_EmotePlayMessage(output);
    }

    public serializeAs_EmotePlayMessage(output: ICustomDataOutput)
    {
        super.serializeAs_EmotePlayAbstractMessage(output);
        if(this.actorId < -9007199254740992 || this.actorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.actorId + ") on element actorId.");
        }
        output.writeDouble(this.actorId);
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
        }
        output.writeInt(this.accountId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EmotePlayMessage(input);
    }

    private deserializeAs_EmotePlayMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._actorIdFunc(input);
        this._accountIdFunc(input);
    }

    private _actorIdFunc(input: ICustomDataInput)
    {
        this.actorId = input.readDouble();
        if(this.actorId < -9007199254740992 || this.actorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.actorId + ") on element of EmotePlayMessage.actorId.");
        }
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of EmotePlayMessage.accountId.");
        }
    }

}