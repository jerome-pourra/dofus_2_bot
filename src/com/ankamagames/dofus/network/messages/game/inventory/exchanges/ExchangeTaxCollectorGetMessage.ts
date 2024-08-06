import { ObjectItemGenericQuantity } from "./../../../../types/game/data/items/ObjectItemGenericQuantity";
import { EntityLook } from "./../../../../types/game/look/EntityLook";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeTaxCollectorGetMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3970;

	public collectorName: string = "";
	public worldX: number = 0;
	public worldY: number = 0;
	public mapId: number = 0;
	public subAreaId: number = 0;
	public userName: string = "";
	public callerId: number = 0;
	public callerName: string = "";
	public pods: number = 0;
	public objectsInfos: Array<ObjectItemGenericQuantity>;
	public look: EntityLook;

    public constructor()
    {
        super();
        this.objectsInfos = Array<ObjectItemGenericQuantity>();
        this.look = new EntityLook();
    }

    public getMessageId()
    {
        return ExchangeTaxCollectorGetMessage.protocolId;
    }

    public initExchangeTaxCollectorGetMessage(collectorName: string = "", worldX: number = 0, worldY: number = 0, mapId: number = 0, subAreaId: number = 0, userName: string = "", callerId: number = 0, callerName: string = "", pods: number = 0, objectsInfos: Array<ObjectItemGenericQuantity> = null, look: EntityLook = null): ExchangeTaxCollectorGetMessage
    {
        this.collectorName = collectorName;
        this.worldX = worldX;
        this.worldY = worldY;
        this.mapId = mapId;
        this.subAreaId = subAreaId;
        this.userName = userName;
        this.callerId = callerId;
        this.callerName = callerName;
        this.pods = pods;
        this.objectsInfos = objectsInfos;
        this.look = look;
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
        this.serializeAs_ExchangeTaxCollectorGetMessage(output);
    }

    public serializeAs_ExchangeTaxCollectorGetMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.collectorName);
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
        }
        output.writeShort(this.worldX);
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
        }
        output.writeShort(this.worldY);
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
        }
        output.writeVarShort(this.subAreaId);
        output.writeUTF(this.userName);
        if(this.callerId < 0 || this.callerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.callerId + ") on element callerId.");
        }
        output.writeVarLong(this.callerId);
        output.writeUTF(this.callerName);
        if(this.pods < 0)
        {
            throw new Error("Forbidden value (" + this.pods + ") on element pods.");
        }
        output.writeVarShort(this.pods);
        output.writeShort(this.objectsInfos.length);
        for(var _i10: number = 0; _i10 < this.objectsInfos.length; _i10++)
        {
            (this.objectsInfos[_i10] as ObjectItemGenericQuantity).serializeAs_ObjectItemGenericQuantity(output);
        }
        this.look.serializeAs_EntityLook(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeTaxCollectorGetMessage(input);
    }

    private deserializeAs_ExchangeTaxCollectorGetMessage(input: ICustomDataInput)
    {
        let _item10: ObjectItemGenericQuantity;
        this._collectorNameFunc(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._mapIdFunc(input);
        this._subAreaIdFunc(input);
        this._userNameFunc(input);
        this._callerIdFunc(input);
        this._callerNameFunc(input);
        this._podsFunc(input);
        let _objectsInfosLen: number = input.readUnsignedShort();
        for(let _i10: number = 0; _i10 < _objectsInfosLen; _i10++)
        {
            _item10 = new ObjectItemGenericQuantity();
            _item10.deserialize(input);
            this.objectsInfos.push(_item10);
        }
        this.look = new EntityLook();
        this.look.deserialize(input);
    }

    private _collectorNameFunc(input: ICustomDataInput)
    {
        this.collectorName = input.readUTF();
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of ExchangeTaxCollectorGetMessage.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of ExchangeTaxCollectorGetMessage.worldY.");
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of ExchangeTaxCollectorGetMessage.mapId.");
        }
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of ExchangeTaxCollectorGetMessage.subAreaId.");
        }
    }

    private _userNameFunc(input: ICustomDataInput)
    {
        this.userName = input.readUTF();
    }

    private _callerIdFunc(input: ICustomDataInput)
    {
        this.callerId = input.readVarUhLong();
        if(this.callerId < 0 || this.callerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.callerId + ") on element of ExchangeTaxCollectorGetMessage.callerId.");
        }
    }

    private _callerNameFunc(input: ICustomDataInput)
    {
        this.callerName = input.readUTF();
    }

    private _podsFunc(input: ICustomDataInput)
    {
        this.pods = input.readVarUhShort();
        if(this.pods < 0)
        {
            throw new Error("Forbidden value (" + this.pods + ") on element of ExchangeTaxCollectorGetMessage.pods.");
        }
    }

}