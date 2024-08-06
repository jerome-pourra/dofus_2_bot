import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameActionFightDispellMessage } from "./GameActionFightDispellMessage";

export class GameActionFightDispellEffectMessage extends GameActionFightDispellMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8550;

	public boostUID: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightDispellEffectMessage.protocolId;
    }

    public initGameActionFightDispellEffectMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, verboseCast: boolean = false, boostUID: number = 0): GameActionFightDispellEffectMessage
    {
        super.initGameActionFightDispellMessage(actionId,sourceId,targetId,verboseCast);
        this.boostUID = boostUID;
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
        this.serializeAs_GameActionFightDispellEffectMessage(output);
    }

    public serializeAs_GameActionFightDispellEffectMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameActionFightDispellMessage(output);
        if(this.boostUID < 0)
        {
            throw new Error("Forbidden value (" + this.boostUID + ") on element boostUID.");
        }
        output.writeInt(this.boostUID);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightDispellEffectMessage(input);
    }

    private deserializeAs_GameActionFightDispellEffectMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._boostUIDFunc(input);
    }

    private _boostUIDFunc(input: ICustomDataInput)
    {
        this.boostUID = input.readInt();
        if(this.boostUID < 0)
        {
            throw new Error("Forbidden value (" + this.boostUID + ") on element of GameActionFightDispellEffectMessage.boostUID.");
        }
    }

}