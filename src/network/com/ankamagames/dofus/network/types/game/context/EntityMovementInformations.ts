import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class EntityMovementInformations
{

	public static readonly protocolId: number = 4990;

	public id: number = 0;
	public steps: Array<number>;

    public constructor()
    {
        this.steps = Array<number>();
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