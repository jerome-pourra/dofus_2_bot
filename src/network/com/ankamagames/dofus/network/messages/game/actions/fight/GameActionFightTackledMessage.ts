import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightTackledMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3805;

	public tacklersIds: Array<number>;

    public constructor()
    {
        super();
        this.tacklersIds = Array<number>();
    }

    public getMessageId()
    {
        return GameActionFightTackledMessage.protocolId;
    }

    public initGameActionFightTackledMessage(actionId: number = 0, sourceId: number = 0, tacklersIds: Array<number> = null): GameActionFightTackledMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.tacklersIds = tacklersIds;
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
        this.serializeAs_GameActionFightTackledMessage(output);
    }

    public serializeAs_GameActionFightTackledMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        output.writeShort(this.tacklersIds.length);
        for(var _i1: number = 0; _i1 < this.tacklersIds.length; _i1++)
        {
            if(this.tacklersIds[_i1] < -9007199254740992 || this.tacklersIds[_i1] > 9007199254740992)
            {
                throw new Error("Forbidden value (" + this.tacklersIds[_i1] + ") on element 1 (starting at 1) of tacklersIds.");
            }
            output.writeDouble(this.tacklersIds[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightTackledMessage(input);
    }

    private deserializeAs_GameActionFightTackledMessage(input: ICustomDataInput)
    {
        let _val1: number = NaN;
        super.deserialize(input);
        let _tacklersIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _tacklersIdsLen; _i1++)
        {
            _val1 = Number(input.readDouble());
            if(_val1 < -9007199254740992 || _val1 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of tacklersIds.");
            }
            this.tacklersIds.push(_val1);
        }
    }

}