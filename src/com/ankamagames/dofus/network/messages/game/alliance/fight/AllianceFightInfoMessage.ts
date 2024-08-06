import { SocialFight } from "./../../../../types/game/social/fight/SocialFight";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceFightInfoMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5386;

	public allianceFights: Array<SocialFight>;

    public constructor()
    {
        super();
        this.allianceFights = Array<SocialFight>();
    }

    public getMessageId()
    {
        return AllianceFightInfoMessage.protocolId;
    }

    public initAllianceFightInfoMessage(allianceFights: Array<SocialFight> = null): AllianceFightInfoMessage
    {
        this.allianceFights = allianceFights;
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
        this.serializeAs_AllianceFightInfoMessage(output);
    }

    public serializeAs_AllianceFightInfoMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.allianceFights.length);
        for(var _i1: number = 0; _i1 < this.allianceFights.length; _i1++)
        {
            (this.allianceFights[_i1] as SocialFight).serializeAs_SocialFight(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceFightInfoMessage(input);
    }

    private deserializeAs_AllianceFightInfoMessage(input: ICustomDataInput)
    {
        let _item1: SocialFight;
        let _allianceFightsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _allianceFightsLen; _i1++)
        {
            _item1 = new SocialFight();
            _item1.deserialize(input);
            this.allianceFights.push(_item1);
        }
    }

}