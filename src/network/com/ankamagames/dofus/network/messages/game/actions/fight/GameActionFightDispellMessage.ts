import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightDispellMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9152;

	public targetId: number = 0;
	public verboseCast: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightDispellMessage.protocolId;
    }

    public initGameActionFightDispellMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, verboseCast: boolean = false): GameActionFightDispellMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.targetId = targetId;
        this.verboseCast = verboseCast;
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
        this.serializeAs_GameActionFightDispellMessage(output);
    }

    public serializeAs_GameActionFightDispellMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
        output.writeBoolean(this.verboseCast);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightDispellMessage(input);
    }

    private deserializeAs_GameActionFightDispellMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
        this._verboseCastFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightDispellMessage.targetId.");
        }
    }

    private _verboseCastFunc(input: ICustomDataInput)
    {
        this.verboseCast = input.readBoolean();
    }

}