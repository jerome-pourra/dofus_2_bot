import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { CharacterSelectionMessage } from "./CharacterSelectionMessage";

export class CharacterFirstSelectionMessage extends CharacterSelectionMessage
{

	public static readonly protocolId: number = 7638;

	public doTutorial: boolean = false;

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
        this.deserializeAs_CharacterFirstSelectionMessage(input);
    }

    private deserializeAs_CharacterFirstSelectionMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._doTutorialFunc(input);
    }

    private _doTutorialFunc(input: ICustomDataInput)
    {
        this.doTutorial = input.readBoolean();
    }

}