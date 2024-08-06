import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildSpellUpgradeRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5991;

	public spellId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildSpellUpgradeRequestMessage.protocolId;
    }

    public initGuildSpellUpgradeRequestMessage(spellId: number = 0): GuildSpellUpgradeRequestMessage
    {
        this.spellId = spellId;
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
        this.serializeAs_GuildSpellUpgradeRequestMessage(output);
    }

    public serializeAs_GuildSpellUpgradeRequestMessage(output: ICustomDataOutput)
    {
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
        }
        output.writeInt(this.spellId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildSpellUpgradeRequestMessage(input);
    }

    private deserializeAs_GuildSpellUpgradeRequestMessage(input: ICustomDataInput)
    {
        this._spellIdFunc(input);
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readInt();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of GuildSpellUpgradeRequestMessage.spellId.");
        }
    }

}