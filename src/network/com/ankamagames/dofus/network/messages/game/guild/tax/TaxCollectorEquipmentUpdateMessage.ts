import { CharacterCharacteristics } from "./../../../../types/game/character/characteristic/CharacterCharacteristics";
import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorEquipmentUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2451;

	public uniqueId: number = 0;
	public object: ObjectItem;
	public added: boolean = false;
	public characteristics: CharacterCharacteristics;

    public constructor()
    {
        super();
        this.object = new ObjectItem();
        this.characteristics = new CharacterCharacteristics();
    }

    public getMessageId()
    {
        return TaxCollectorEquipmentUpdateMessage.protocolId;
    }

    public initTaxCollectorEquipmentUpdateMessage(uniqueId: number = 0, object: ObjectItem = null, added: boolean = false, characteristics: CharacterCharacteristics = null): TaxCollectorEquipmentUpdateMessage
    {
        this.uniqueId = uniqueId;
        this.object = object;
        this.added = added;
        this.characteristics = characteristics;
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
        this.serializeAs_TaxCollectorEquipmentUpdateMessage(output);
    }

    public serializeAs_TaxCollectorEquipmentUpdateMessage(output: ICustomDataOutput)
    {
        if(this.uniqueId < 0 || this.uniqueId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.uniqueId + ") on element uniqueId.");
        }
        output.writeDouble(this.uniqueId);
        this.object.serializeAs_ObjectItem(output);
        output.writeBoolean(this.added);
        this.characteristics.serializeAs_CharacterCharacteristics(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorEquipmentUpdateMessage(input);
    }

    private deserializeAs_TaxCollectorEquipmentUpdateMessage(input: ICustomDataInput)
    {
        this._uniqueIdFunc(input);
        this.object = new ObjectItem();
        this.object.deserialize(input);
        this._addedFunc(input);
        this.characteristics = new CharacterCharacteristics();
        this.characteristics.deserialize(input);
    }

    private _uniqueIdFunc(input: ICustomDataInput)
    {
        this.uniqueId = input.readDouble();
        if(this.uniqueId < 0 || this.uniqueId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.uniqueId + ") on element of TaxCollectorEquipmentUpdateMessage.uniqueId.");
        }
    }

    private _addedFunc(input: ICustomDataInput)
    {
        this.added = input.readBoolean();
    }

}