import { BasicAllianceInformations } from "./../../../../../types/game/context/roleplay/BasicAllianceInformations";
import { BasicNamedAllianceInformations } from "./../../../../../types/game/context/roleplay/BasicNamedAllianceInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { TaxCollectorDialogQuestionBasicMessage } from "./TaxCollectorDialogQuestionBasicMessage";

export class TaxCollectorDialogQuestionExtendedMessage extends TaxCollectorDialogQuestionBasicMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8713;

	public maxPods: number = 0;
	public prospecting: number = 0;
	public alliance: BasicNamedAllianceInformations;
	public taxCollectorsCount: number = 0;
	public taxCollectorAttack: number = 0;
	public pods: number = 0;
	public itemsValue: number = 0;

    public constructor()
    {
        super();
        this.alliance = new BasicNamedAllianceInformations();
    }

    public getMessageId()
    {
        return TaxCollectorDialogQuestionExtendedMessage.protocolId;
    }

    public initTaxCollectorDialogQuestionExtendedMessage(allianceInfo: BasicAllianceInformations = null, maxPods: number = 0, prospecting: number = 0, alliance: BasicNamedAllianceInformations = null, taxCollectorsCount: number = 0, taxCollectorAttack: number = 0, pods: number = 0, itemsValue: number = 0): TaxCollectorDialogQuestionExtendedMessage
    {
        super.initTaxCollectorDialogQuestionBasicMessage(allianceInfo);
        this.maxPods = maxPods;
        this.prospecting = prospecting;
        this.alliance = alliance;
        this.taxCollectorsCount = taxCollectorsCount;
        this.taxCollectorAttack = taxCollectorAttack;
        this.pods = pods;
        this.itemsValue = itemsValue;
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
        this.serializeAs_TaxCollectorDialogQuestionExtendedMessage(output);
    }

    public serializeAs_TaxCollectorDialogQuestionExtendedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_TaxCollectorDialogQuestionBasicMessage(output);
        if(this.maxPods < 0)
        {
            throw new Error("Forbidden value (" + this.maxPods + ") on element maxPods.");
        }
        output.writeVarShort(this.maxPods);
        if(this.prospecting < 0)
        {
            throw new Error("Forbidden value (" + this.prospecting + ") on element prospecting.");
        }
        output.writeVarShort(this.prospecting);
        this.alliance.serializeAs_BasicNamedAllianceInformations(output);
        if(this.taxCollectorsCount < 0)
        {
            throw new Error("Forbidden value (" + this.taxCollectorsCount + ") on element taxCollectorsCount.");
        }
        output.writeByte(this.taxCollectorsCount);
        output.writeInt(this.taxCollectorAttack);
        if(this.pods < 0)
        {
            throw new Error("Forbidden value (" + this.pods + ") on element pods.");
        }
        output.writeVarInt(this.pods);
        if(this.itemsValue < 0 || this.itemsValue > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.itemsValue + ") on element itemsValue.");
        }
        output.writeVarLong(this.itemsValue);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorDialogQuestionExtendedMessage(input);
    }

    private deserializeAs_TaxCollectorDialogQuestionExtendedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._maxPodsFunc(input);
        this._prospectingFunc(input);
        this.alliance = new BasicNamedAllianceInformations();
        this.alliance.deserialize(input);
        this._taxCollectorsCountFunc(input);
        this._taxCollectorAttackFunc(input);
        this._podsFunc(input);
        this._itemsValueFunc(input);
    }

    private _maxPodsFunc(input: ICustomDataInput)
    {
        this.maxPods = input.readVarUhShort();
        if(this.maxPods < 0)
        {
            throw new Error("Forbidden value (" + this.maxPods + ") on element of TaxCollectorDialogQuestionExtendedMessage.maxPods.");
        }
    }

    private _prospectingFunc(input: ICustomDataInput)
    {
        this.prospecting = input.readVarUhShort();
        if(this.prospecting < 0)
        {
            throw new Error("Forbidden value (" + this.prospecting + ") on element of TaxCollectorDialogQuestionExtendedMessage.prospecting.");
        }
    }

    private _taxCollectorsCountFunc(input: ICustomDataInput)
    {
        this.taxCollectorsCount = input.readByte();
        if(this.taxCollectorsCount < 0)
        {
            throw new Error("Forbidden value (" + this.taxCollectorsCount + ") on element of TaxCollectorDialogQuestionExtendedMessage.taxCollectorsCount.");
        }
    }

    private _taxCollectorAttackFunc(input: ICustomDataInput)
    {
        this.taxCollectorAttack = input.readInt();
    }

    private _podsFunc(input: ICustomDataInput)
    {
        this.pods = input.readVarUhInt();
        if(this.pods < 0)
        {
            throw new Error("Forbidden value (" + this.pods + ") on element of TaxCollectorDialogQuestionExtendedMessage.pods.");
        }
    }

    private _itemsValueFunc(input: ICustomDataInput)
    {
        this.itemsValue = input.readVarUhLong();
        if(this.itemsValue < 0 || this.itemsValue > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.itemsValue + ") on element of TaxCollectorDialogQuestionExtendedMessage.itemsValue.");
        }
    }

}