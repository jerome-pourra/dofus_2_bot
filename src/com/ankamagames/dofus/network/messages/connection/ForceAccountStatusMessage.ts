import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ForceAccountStatusMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 25;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public force: boolean = false;
	public forcedAccountId: number = 0;
	public forcedNickname: string = "";
	public forcedTag: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ForceAccountStatusMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ForceAccountStatusMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ForceAccountStatusMessage.endpointServer;
    }

    public initForceAccountStatusMessage(force: boolean = false, forcedAccountId: number = 0, forcedNickname: string = "", forcedTag: string = ""): ForceAccountStatusMessage
    {
        this.force = force;
        this.forcedAccountId = forcedAccountId;
        this.forcedNickname = forcedNickname;
        this.forcedTag = forcedTag;
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
        this.serializeAs_ForceAccountStatusMessage(output);
    }

    public serializeAs_ForceAccountStatusMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.force);
        if(this.forcedAccountId < 0)
        {
            throw new Error("Forbidden value (" + this.forcedAccountId + ") on element forcedAccountId.");
        }
        output.writeInt(this.forcedAccountId);
        output.writeUTF(this.forcedNickname);
        output.writeUTF(this.forcedTag);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ForceAccountStatusMessage(input);
    }

    private deserializeAs_ForceAccountStatusMessage(input: ICustomDataInput)
    {
        this._forceFunc(input);
        this._forcedAccountIdFunc(input);
        this._forcedNicknameFunc(input);
        this._forcedTagFunc(input);
    }

    private _forceFunc(input: ICustomDataInput)
    {
        this.force = input.readBoolean();
    }

    private _forcedAccountIdFunc(input: ICustomDataInput)
    {
        this.forcedAccountId = input.readInt();
        if(this.forcedAccountId < 0)
        {
            throw new Error("Forbidden value (" + this.forcedAccountId + ") on element of ForceAccountStatusMessage.forcedAccountId.");
        }
    }

    private _forcedNicknameFunc(input: ICustomDataInput)
    {
        this.forcedNickname = input.readUTF();
    }

    private _forcedTagFunc(input: ICustomDataInput)
    {
        this.forcedTag = input.readUTF();
    }

}