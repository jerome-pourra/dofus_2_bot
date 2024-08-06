import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TeleportPlayerAnswerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4603;

	public accept: boolean = false;
	public requesterId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TeleportPlayerAnswerMessage.protocolId;
    }

    public initTeleportPlayerAnswerMessage(accept: boolean = false, requesterId: number = 0): TeleportPlayerAnswerMessage
    {
        this.accept = accept;
        this.requesterId = requesterId;
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
        this.serializeAs_TeleportPlayerAnswerMessage(output);
    }

    public serializeAs_TeleportPlayerAnswerMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.accept);
        if(this.requesterId < 0 || this.requesterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requesterId + ") on element requesterId.");
        }
        output.writeVarLong(this.requesterId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TeleportPlayerAnswerMessage(input);
    }

    private deserializeAs_TeleportPlayerAnswerMessage(input: ICustomDataInput)
    {
        this._acceptFunc(input);
        this._requesterIdFunc(input);
    }

    private _acceptFunc(input: ICustomDataInput)
    {
        this.accept = input.readBoolean();
    }

    private _requesterIdFunc(input: ICustomDataInput)
    {
        this.requesterId = input.readVarUhLong();
        if(this.requesterId < 0 || this.requesterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requesterId + ") on element of TeleportPlayerAnswerMessage.requesterId.");
        }
    }

}