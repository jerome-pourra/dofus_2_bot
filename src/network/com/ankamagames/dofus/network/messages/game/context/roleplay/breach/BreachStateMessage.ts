import { CharacterMinimalInformations } from "./../../../../../types/game/character/CharacterMinimalInformations";
import { ObjectEffectInteger } from "./../../../../../types/game/data/items/effects/ObjectEffectInteger";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachStateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8989;

	public owner: CharacterMinimalInformations;
	public bonuses: Array<ObjectEffectInteger>;
	public bugdet: number = 0;
	public saved: boolean = false;

    public constructor()
    {
        super();
        this.owner = new CharacterMinimalInformations();
        this.bonuses = Array<ObjectEffectInteger>();
    }

    public getMessageId()
    {
        return BreachStateMessage.protocolId;
    }

    public initBreachStateMessage(owner: CharacterMinimalInformations = null, bonuses: Array<ObjectEffectInteger> = null, bugdet: number = 0, saved: boolean = false): BreachStateMessage
    {
        this.owner = owner;
        this.bonuses = bonuses;
        this.bugdet = bugdet;
        this.saved = saved;
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
        this.serializeAs_BreachStateMessage(output);
    }

    public serializeAs_BreachStateMessage(output: ICustomDataOutput)
    {
        this.owner.serializeAs_CharacterMinimalInformations(output);
        output.writeShort(this.bonuses.length);
        for(var _i2: number = 0; _i2 < this.bonuses.length; _i2++)
        {
            (this.bonuses[_i2] as ObjectEffectInteger).serializeAs_ObjectEffectInteger(output);
        }
        if(this.bugdet < 0)
        {
            throw new Error("Forbidden value (" + this.bugdet + ") on element bugdet.");
        }
        output.writeVarInt(this.bugdet);
        output.writeBoolean(this.saved);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachStateMessage(input);
    }

    private deserializeAs_BreachStateMessage(input: ICustomDataInput)
    {
        let _item2: ObjectEffectInteger;
        this.owner = new CharacterMinimalInformations();
        this.owner.deserialize(input);
        let _bonusesLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _bonusesLen; _i2++)
        {
            _item2 = new ObjectEffectInteger();
            _item2.deserialize(input);
            this.bonuses.push(_item2);
        }
        this._bugdetFunc(input);
        this._savedFunc(input);
    }

    private _bugdetFunc(input: ICustomDataInput)
    {
        this.bugdet = input.readVarUhInt();
        if(this.bugdet < 0)
        {
            throw new Error("Forbidden value (" + this.bugdet + ") on element of BreachStateMessage.bugdet.");
        }
    }

    private _savedFunc(input: ICustomDataInput)
    {
        this.saved = input.readBoolean();
    }

}