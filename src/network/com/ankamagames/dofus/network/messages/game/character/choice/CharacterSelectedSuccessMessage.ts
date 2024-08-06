import { CharacterBaseInformations } from "./../../../../types/game/character/choice/CharacterBaseInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterSelectedSuccessMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4299;

	public infos: CharacterBaseInformations;
	public isCollectingStats: boolean = false;

    public constructor()
    {
        super();
        this.infos = new CharacterBaseInformations();
    }

    public getMessageId()
    {
        return CharacterSelectedSuccessMessage.protocolId;
    }

    public initCharacterSelectedSuccessMessage(infos: CharacterBaseInformations = null, isCollectingStats: boolean = false): CharacterSelectedSuccessMessage
    {
        this.infos = infos;
        this.isCollectingStats = isCollectingStats;
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
        this.serializeAs_CharacterSelectedSuccessMessage(output);
    }

    public serializeAs_CharacterSelectedSuccessMessage(output: ICustomDataOutput)
    {
        this.infos.serializeAs_CharacterBaseInformations(output);
        output.writeBoolean(this.isCollectingStats);
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