import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightActivateGlyphTrapMessage extends AbstractGameActionMessage
{

	public static readonly protocolId: number = 5706;

	public markId: number = 0;
	public active: boolean = false;

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