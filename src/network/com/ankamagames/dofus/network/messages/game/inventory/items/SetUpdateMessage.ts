import { ObjectEffect } from "./../../../../types/game/data/items/effects/ObjectEffect";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SetUpdateMessage extends NetworkMessage implements INetworkMessage
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

    public getMessageId()
    {
        return SetUpdateMessage.protocolId;
    }

    public initSetUpdateMessage(setId: number = 0, setObjects: Array<number> = null, setEffects: Array<ObjectEffect> = null): SetUpdateMessage
    {
        this.setId = setId;
        this.setObjects = setObjects;
        this.setEffects = setEffects;
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
        this.serializeAs_SetUpdateMessage(output);
    }

    public serializeAs_SetUpdateMessage(output: ICustomDataOutput)
    {
        if(this.setId < 0)
        {
            throw new Error("Forbidden value (" + this.setId + ") on element setId.");
        }
        output.writeVarShort(this.setId);
        output.writeShort(this.setObjects.length);
        for(var _i2: number = 0; _i2 < this.setObjects.length; _i2++)
        {
            if(this.setObjects[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.setObjects[_i2] + ") on element 2 (starting at 1) of setObjects.");
            }
            output.writeVarInt(this.setObjects[_i2]);
        }
        output.writeShort(this.setEffects.length);
        for(var _i3: number = 0; _i3 < this.setEffects.length; _i3++)
        {
            output.writeShort((this.setEffects[_i3] as ObjectEffect).getTypeId());
            (this.setEffects[_i3] as ObjectEffect).serialize(output);
        }
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