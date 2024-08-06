import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class EntityMovementInformations implements INetworkType
{

	public static readonly protocolId: number = 4990;

	public id: number = 0;
	public steps: Array<number>;

    public constructor()
    {
        this.steps = Array<number>();
    }

    public getTypeId()
    {
        return EntityMovementInformations.protocolId;
    }

    public initEntityMovementInformations(id: number = 0, steps: Array<number> = null): EntityMovementInformations
    {
        this.id = id;
        this.steps = steps;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_EntityMovementInformations(output);
    }

    public serializeAs_EntityMovementInformations(output: ICustomDataOutput)
    {
        output.writeInt(this.id);
        output.writeShort(this.steps.length);
        for(var _i2: number = 0; _i2 < this.steps.length; _i2++)
        {
            output.writeByte(this.steps[_i2]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EntityMovementInformations(input);
    }

    private deserializeAs_EntityMovementInformations(input: ICustomDataInput)
    {
        let _val2: number = 0;
        this._idFunc(input);
        let _stepsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _stepsLen; _i2++)
        {
            _val2 = input.readByte();
            this.steps.push(_val2);
        }
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readInt();
    }

}