import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { EntityDispositionInformations } from "./EntityDispositionInformations";

export class FightEntityDispositionInformations extends EntityDispositionInformations implements INetworkType
{

	public static readonly protocolId: number = 3736;

	public carryingCharacterId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightEntityDispositionInformations.protocolId;
    }

    public initFightEntityDispositionInformations(cellId: number = 0, direction: number = 1, carryingCharacterId: number = 0): FightEntityDispositionInformations
    {
        super.initEntityDispositionInformations(cellId,direction);
        this.carryingCharacterId = carryingCharacterId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightEntityDispositionInformations(output);
    }

    public serializeAs_FightEntityDispositionInformations(output: ICustomDataOutput)
    {
        super.serializeAs_EntityDispositionInformations(output);
        if(this.carryingCharacterId < -9007199254740992 || this.carryingCharacterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.carryingCharacterId + ") on element carryingCharacterId.");
        }
        output.writeDouble(this.carryingCharacterId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightEntityDispositionInformations(input);
    }

    private deserializeAs_FightEntityDispositionInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._carryingCharacterIdFunc(input);
    }

    private _carryingCharacterIdFunc(input: ICustomDataInput)
    {
        this.carryingCharacterId = input.readDouble();
        if(this.carryingCharacterId < -9007199254740992 || this.carryingCharacterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.carryingCharacterId + ") on element of FightEntityDispositionInformations.carryingCharacterId.");
        }
    }

}