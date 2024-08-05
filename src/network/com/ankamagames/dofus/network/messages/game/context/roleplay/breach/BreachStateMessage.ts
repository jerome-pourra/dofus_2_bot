import { CharacterMinimalInformations } from "./../../../../../types/game/character/CharacterMinimalInformations";
import { ObjectEffectInteger } from "./../../../../../types/game/data/items/effects/ObjectEffectInteger";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachStateMessage extends NetworkMessage
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

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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