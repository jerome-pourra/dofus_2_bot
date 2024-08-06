import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { EmotePlayAbstractMessage } from "./EmotePlayAbstractMessage";

export class EmotePlayMassiveMessage extends EmotePlayAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1886;

	public actorIds: Array<number>;

    public constructor()
    {
        super();
        this.actorIds = Array<number>();
    }

    public getMessageId()
    {
        return EmotePlayMassiveMessage.protocolId;
    }

    public initEmotePlayMassiveMessage(emoteId: number = 0, emoteStartTime: number = 0, actorIds: Array<number> = null): EmotePlayMassiveMessage
    {
        super.initEmotePlayAbstractMessage(emoteId,emoteStartTime);
        this.actorIds = actorIds;
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
        this.serializeAs_EmotePlayMassiveMessage(output);
    }

    public serializeAs_EmotePlayMassiveMessage(output: ICustomDataOutput)
    {
        super.serializeAs_EmotePlayAbstractMessage(output);
        output.writeShort(this.actorIds.length);
        for(var _i1: number = 0; _i1 < this.actorIds.length; _i1++)
        {
            if(this.actorIds[_i1] < -9007199254740992 || this.actorIds[_i1] > 9007199254740992)
            {
                throw new Error("Forbidden value (" + this.actorIds[_i1] + ") on element 1 (starting at 1) of actorIds.");
            }
            output.writeDouble(this.actorIds[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EmotePlayMassiveMessage(input);
    }

    private deserializeAs_EmotePlayMassiveMessage(input: ICustomDataInput)
    {
        let _val1: number = NaN;
        super.deserialize(input);
        let _actorIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _actorIdsLen; _i1++)
        {
            _val1 = Number(input.readDouble());
            if(_val1 < -9007199254740992 || _val1 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of actorIds.");
            }
            this.actorIds.push(_val1);
        }
    }

}