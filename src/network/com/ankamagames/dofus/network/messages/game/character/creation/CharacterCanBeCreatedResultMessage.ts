import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterCanBeCreatedResultMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7317;

	public yesYouCan: boolean = false;

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
        this.deserializeAs_CharacterCanBeCreatedResultMessage(input);
    }

    private deserializeAs_CharacterCanBeCreatedResultMessage(input: ICustomDataInput)
    {
        this._yesYouCanFunc(input);
    }

    private _yesYouCanFunc(input: ICustomDataInput)
    {
        this.yesYouCan = input.readBoolean();
    }

}