import { ObjectEffect } from "./../../../../types/game/data/items/effects/ObjectEffect";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SetUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7483;

	public setId: number = 0;
	public setObjects: Array<number>;
	public setEffects: Array<ObjectEffect>;

    public constructor()
    {
        super();
        this.setObjects = Array<number>();
        this.setEffects = Array<ObjectEffect>();
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
        this.deserializeAs_SetUpdateMessage(input);
    }

    private deserializeAs_SetUpdateMessage(input: ICustomDataInput)
    {
        let _val2: number = 0;
        let _id3: number = 0;
        let _item3: ObjectEffect;
        this._setIdFunc(input);
        let _setObjectsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _setObjectsLen; _i2++)
        {
            _val2 = input.readVarUhInt();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of setObjects.");
            }
            this.setObjects.push(_val2);
        }
        let _setEffectsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _setEffectsLen; _i3++)
        {
            _id3 = input.readUnsignedShort();
            _item3 = ProtocolTypeManager.getInstance(ObjectEffect,_id3);
            _item3.deserialize(input);
            this.setEffects.push(_item3);
        }
    }

    private _setIdFunc(input: ICustomDataInput)
    {
        this.setId = input.readVarUhShort();
        if(this.setId < 0)
        {
            throw new Error("Forbidden value (" + this.setId + ") on element of SetUpdateMessage.setId.");
        }
    }

}