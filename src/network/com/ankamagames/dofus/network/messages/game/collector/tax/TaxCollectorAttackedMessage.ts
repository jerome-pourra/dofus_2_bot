import { BasicAllianceInformations } from "./../../../../types/game/context/roleplay/BasicAllianceInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorAttackedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5361;

	public firstNameId: number = 0;
	public lastNameId: number = 0;
	public worldX: number = 0;
	public worldY: number = 0;
	public mapId: number = 0;
	public subAreaId: number = 0;
	public alliance: BasicAllianceInformations;

    public constructor()
    {
        super();
        this.alliance = new BasicAllianceInformations();
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
        this.deserializeAs_TaxCollectorAttackedMessage(input);
    }

    private deserializeAs_TaxCollectorAttackedMessage(input: ICustomDataInput)
    {
        this._firstNameIdFunc(input);
        this._lastNameIdFunc(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._mapIdFunc(input);
        this._subAreaIdFunc(input);
        this.alliance = new BasicAllianceInformations();
        this.alliance.deserialize(input);
    }

    private _firstNameIdFunc(input: ICustomDataInput)
    {
        this.firstNameId = input.readVarUhShort();
        if(this.firstNameId < 0)
        {
            throw new Error("Forbidden value (" + this.firstNameId + ") on element of TaxCollectorAttackedMessage.firstNameId.");
        }
    }

    private _lastNameIdFunc(input: ICustomDataInput)
    {
        this.lastNameId = input.readVarUhShort();
        if(this.lastNameId < 0)
        {
            throw new Error("Forbidden value (" + this.lastNameId + ") on element of TaxCollectorAttackedMessage.lastNameId.");
        }
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of TaxCollectorAttackedMessage.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of TaxCollectorAttackedMessage.worldY.");
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of TaxCollectorAttackedMessage.mapId.");
        }
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of TaxCollectorAttackedMessage.subAreaId.");
        }
    }

}