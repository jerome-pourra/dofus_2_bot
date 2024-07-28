import { ObjectEffect } from "./effects/ObjectEffect";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { Item } from "./Item";

export class ObjectItemMinimalInformation extends Item
{

	public static readonly protocolId: number = 9931;

	public objectGID: number = 0;
	public effects: Array<ObjectEffect>;

    public constructor()
    {
        super();
        this.effects = Array<ObjectEffect>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectItemMinimalInformation(input);
    }

    private deserializeAs_ObjectItemMinimalInformation(input: ICustomDataInput)
    {
        let _id2: number = 0;
        let _item2: ObjectEffect;
        super.deserialize(input);
        this._objectGIDFunc(input);
        let _effectsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _effectsLen; _i2++)
        {
            _id2 = input.readUnsignedShort();
            _item2 = ProtocolTypeManager.getInstance(ObjectEffect,_id2);
            _item2.deserialize(input);
            this.effects.push(_item2);
        }
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of ObjectItemMinimalInformation.objectGID.");
        }
    }

}