import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { LockableStateUpdateAbstractMessage } from "./LockableStateUpdateAbstractMessage";

export class LockableStateUpdateStorageMessage extends LockableStateUpdateAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 569;

	public mapId: number = 0;
	public elementId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return LockableStateUpdateStorageMessage.protocolId;
    }

    public initLockableStateUpdateStorageMessage(locked: boolean = false, mapId: number = 0, elementId: number = 0): LockableStateUpdateStorageMessage
    {
        super.initLockableStateUpdateAbstractMessage(locked);
        this.mapId = mapId;
        this.elementId = elementId;
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
        this.serializeAs_LockableStateUpdateStorageMessage(output);
    }

    public serializeAs_LockableStateUpdateStorageMessage(output: ICustomDataOutput)
    {
        super.serializeAs_LockableStateUpdateAbstractMessage(output);
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
        if(this.elementId < 0)
        {
            throw new Error("Forbidden value (" + this.elementId + ") on element elementId.");
        }
        output.writeVarInt(this.elementId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_LockableStateUpdateStorageMessage(input);
    }

    private deserializeAs_LockableStateUpdateStorageMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._mapIdFunc(input);
        this._elementIdFunc(input);
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of LockableStateUpdateStorageMessage.mapId.");
        }
    }

    private _elementIdFunc(input: ICustomDataInput)
    {
        this.elementId = input.readVarUhInt();
        if(this.elementId < 0)
        {
            throw new Error("Forbidden value (" + this.elementId + ") on element of LockableStateUpdateStorageMessage.elementId.");
        }
    }

}