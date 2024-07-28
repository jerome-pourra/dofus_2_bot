import { CharacterBaseInformations } from "./../../../../types/game/character/choice/CharacterBaseInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterSelectedSuccessMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4299;

	public infos: CharacterBaseInformations;
	public isCollectingStats: boolean = false;

    public constructor()
    {
        super();
        this.infos = new CharacterBaseInformations();
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
        this.deserializeAs_CharacterSelectedSuccessMessage(input);
    }

    private deserializeAs_CharacterSelectedSuccessMessage(input: ICustomDataInput)
    {
        this.infos = new CharacterBaseInformations();
        this.infos.deserialize(input);
        this._isCollectingStatsFunc(input);
    }

    private _isCollectingStatsFunc(input: ICustomDataInput)
    {
        this.isCollectingStats = input.readBoolean();
    }

}