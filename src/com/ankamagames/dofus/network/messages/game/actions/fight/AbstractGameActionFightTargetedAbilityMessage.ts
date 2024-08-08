import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { BooleanByteWrapper } from "./../../../../../../jerakine/network/utils/BooleanByteWrapper";

export class AbstractGameActionFightTargetedAbilityMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5172;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public targetId: number = 0;
	public destinationCellId: number = 0;
	public critical: number = 1;
	public silentCast: boolean = false;
	public verboseCast: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AbstractGameActionFightTargetedAbilityMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AbstractGameActionFightTargetedAbilityMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AbstractGameActionFightTargetedAbilityMessage.endpointServer;
    }

    public initAbstractGameActionFightTargetedAbilityMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, destinationCellId: number = 0, critical: number = 1, silentCast: boolean = false, verboseCast: boolean = false): AbstractGameActionFightTargetedAbilityMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.targetId = targetId;
        this.destinationCellId = destinationCellId;
        this.critical = critical;
        this.silentCast = silentCast;
        this.verboseCast = verboseCast;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AbstractGameActionFightTargetedAbilityMessage(output);
    }

    public serializeAs_AbstractGameActionFightTargetedAbilityMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.silentCast);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.verboseCast);
        output.writeByte(_box0);
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
        if(this.destinationCellId < -1 || this.destinationCellId > 559)
        {
            throw new Error("Forbidden value (" + this.destinationCellId + ") on element destinationCellId.");
        }
        output.writeShort(this.destinationCellId);
        output.writeByte(this.critical);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AbstractGameActionFightTargetedAbilityMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.silentCast = BooleanByteWrapper.getFlag(_box0,0);
        this.verboseCast = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_AbstractGameActionFightTargetedAbilityMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.deserializeByteBoxes(input);
        this._targetIdFunc(input);
        this._destinationCellIdFunc(input);
        this._criticalFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of AbstractGameActionFightTargetedAbilityMessage.targetId.");
        }
    }

    private _destinationCellIdFunc(input: ICustomDataInput)
    {
        this.destinationCellId = input.readShort();
        if(this.destinationCellId < -1 || this.destinationCellId > 559)
        {
            throw new Error("Forbidden value (" + this.destinationCellId + ") on element of AbstractGameActionFightTargetedAbilityMessage.destinationCellId.");
        }
    }

    private _criticalFunc(input: ICustomDataInput)
    {
        this.critical = input.readByte();
        if(this.critical < 0)
        {
            throw new Error("Forbidden value (" + this.critical + ") on element of AbstractGameActionFightTargetedAbilityMessage.critical.");
        }
    }

}