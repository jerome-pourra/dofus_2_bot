import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { EntityDispositionInformations } from "./EntityDispositionInformations";

export class IdentifiedEntityDispositionInformations extends EntityDispositionInformations implements INetworkType
{

	public static readonly protocolId: number = 619;

	public id: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return IdentifiedEntityDispositionInformations.protocolId;
    }

    public initIdentifiedEntityDispositionInformations(cellId: number = 0, direction: number = 1, id: number = 0): IdentifiedEntityDispositionInformations
    {
        super.initEntityDispositionInformations(cellId,direction);
        this.id = id;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_IdentifiedEntityDispositionInformations(output);
    }

    public serializeAs_IdentifiedEntityDispositionInformations(output: ICustomDataOutput)
    {
        super.serializeAs_EntityDispositionInformations(output);
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeDouble(this.id);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IdentifiedEntityDispositionInformations(input);
    }

    private deserializeAs_IdentifiedEntityDispositionInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readDouble();
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of IdentifiedEntityDispositionInformations.id.");
        }
    }

}