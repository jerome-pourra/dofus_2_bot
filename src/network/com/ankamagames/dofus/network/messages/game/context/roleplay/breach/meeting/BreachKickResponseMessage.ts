import { CharacterMinimalInformations } from "./../../../../../../types/game/character/CharacterMinimalInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachKickResponseMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5018;

	public target: CharacterMinimalInformations;
	public kicked: boolean = false;

    public constructor()
    {
        super();
        this.target = new CharacterMinimalInformations();
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
        this.deserializeAs_BreachKickResponseMessage(input);
    }

    private deserializeAs_BreachKickResponseMessage(input: ICustomDataInput)
    {
        this.target = new CharacterMinimalInformations();
        this.target.deserialize(input);
        this._kickedFunc(input);
    }

    private _kickedFunc(input: ICustomDataInput)
    {
        this.kicked = input.readBoolean();
    }

}