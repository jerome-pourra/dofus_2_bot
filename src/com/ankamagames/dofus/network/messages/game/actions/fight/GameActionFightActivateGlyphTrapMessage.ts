import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightActivateGlyphTrapMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5706;

	public markId: number = 0;
	public active: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightActivateGlyphTrapMessage.protocolId;
    }

    public initGameActionFightActivateGlyphTrapMessage(actionId: number = 0, sourceId: number = 0, markId: number = 0, active: boolean = false): GameActionFightActivateGlyphTrapMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.markId = markId;
        this.active = active;
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
        this.serializeAs_GameActionFightActivateGlyphTrapMessage(output);
    }

    public serializeAs_GameActionFightActivateGlyphTrapMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        output.writeShort(this.markId);
        output.writeBoolean(this.active);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightActivateGlyphTrapMessage(input);
    }

    private deserializeAs_GameActionFightActivateGlyphTrapMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._markIdFunc(input);
        this._activeFunc(input);
    }

    private _markIdFunc(input: ICustomDataInput)
    {
        this.markId = input.readShort();
    }

    private _activeFunc(input: ICustomDataInput)
    {
        this.active = input.readBoolean();
    }

}