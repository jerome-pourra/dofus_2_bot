import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameActionFightDispellMessage } from "./GameActionFightDispellMessage";

export class GameActionFightDispellEffectMessage extends GameActionFightDispellMessage
{

	public static readonly protocolId: number = 8550;

	public boostUID: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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