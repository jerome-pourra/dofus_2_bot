import { ObjectEffect } from "./effects/ObjectEffect";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class ObjectEffects
{

	public static readonly protocolId: number = 6602;

	public effects: Array<ObjectEffect>;

    public constructor()
    {
        this.effects = Array<ObjectEffect>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectEffects(input);
    }

    private deserializeAs_ObjectEffects(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: ObjectEffect;
        let _effectsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _effectsLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(ObjectEffect,_id1);
            _item1.deserialize(input);
            this.effects.push(_item1);
        }
    }

}