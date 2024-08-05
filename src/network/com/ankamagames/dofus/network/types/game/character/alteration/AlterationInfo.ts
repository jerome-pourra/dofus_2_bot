import { ObjectEffect } from "./../../data/items/effects/ObjectEffect";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class AlterationInfo
{

	public static readonly protocolId: number = 2959;

	public alterationId: number = 0;
	public creationTime: number = 0;
	public expirationType: number = 1;
	public expirationValue: number = 0;
	public effects: Array<ObjectEffect>;

    public constructor()
    {
        this.effects = Array<ObjectEffect>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlterationInfo(input);
    }

    private deserializeAs_AlterationInfo(input: ICustomDataInput)
    {
        let _id5: number = 0;
        let _item5: ObjectEffect;
        this._alterationIdFunc(input);
        this._creationTimeFunc(input);
        this._expirationTypeFunc(input);
        this._expirationValueFunc(input);
        let _effectsLen: number = input.readUnsignedShort();
        for(let _i5: number = 0; _i5 < _effectsLen; _i5++)
        {
            _id5 = input.readUnsignedShort();
            _item5 = ProtocolTypeManager.getInstance(ObjectEffect,_id5);
            _item5.deserialize(input);
            this.effects.push(_item5);
        }
    }

    private _alterationIdFunc(input: ICustomDataInput)
    {
        this.alterationId = input.readUnsignedInt();
        if(this.alterationId < 0 || this.alterationId > 4294967295)
        {
            throw new Error("Forbidden value (" + this.alterationId + ") on element of AlterationInfo.alterationId.");
        }
    }

    private _creationTimeFunc(input: ICustomDataInput)
    {
        this.creationTime = input.readDouble();
        if(this.creationTime < -9007199254740992 || this.creationTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.creationTime + ") on element of AlterationInfo.creationTime.");
        }
    }

    private _expirationTypeFunc(input: ICustomDataInput)
    {
        this.expirationType = input.readByte();
        if(this.expirationType < 0)
        {
            throw new Error("Forbidden value (" + this.expirationType + ") on element of AlterationInfo.expirationType.");
        }
    }

    private _expirationValueFunc(input: ICustomDataInput)
    {
        this.expirationValue = input.readDouble();
        if(this.expirationValue < -9007199254740992 || this.expirationValue > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.expirationValue + ") on element of AlterationInfo.expirationValue.");
        }
    }

}