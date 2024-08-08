import { Uuid } from "./../../../../types/game/Uuid";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MoveTaxCollectorPresetSpellMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6548;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public presetId: Uuid;
	public movedFrom: number = 0;
	public movedTo: number = 0;

    public constructor()
    {
        super();
        this.presetId = new Uuid();
    }

    public getMessageId()
    {
        return MoveTaxCollectorPresetSpellMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MoveTaxCollectorPresetSpellMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MoveTaxCollectorPresetSpellMessage.endpointServer;
    }

    public initMoveTaxCollectorPresetSpellMessage(presetId: Uuid = null, movedFrom: number = 0, movedTo: number = 0): MoveTaxCollectorPresetSpellMessage
    {
        this.presetId = presetId;
        this.movedFrom = movedFrom;
        this.movedTo = movedTo;
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
        this.serializeAs_MoveTaxCollectorPresetSpellMessage(output);
    }

    public serializeAs_MoveTaxCollectorPresetSpellMessage(output: ICustomDataOutput)
    {
        this.presetId.serializeAs_Uuid(output);
        if(this.movedFrom < 0)
        {
            throw new Error("Forbidden value (" + this.movedFrom + ") on element movedFrom.");
        }
        output.writeByte(this.movedFrom);
        if(this.movedTo < 0)
        {
            throw new Error("Forbidden value (" + this.movedTo + ") on element movedTo.");
        }
        output.writeByte(this.movedTo);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MoveTaxCollectorPresetSpellMessage(input);
    }

    private deserializeAs_MoveTaxCollectorPresetSpellMessage(input: ICustomDataInput)
    {
        this.presetId = new Uuid();
        this.presetId.deserialize(input);
        this._movedFromFunc(input);
        this._movedToFunc(input);
    }

    private _movedFromFunc(input: ICustomDataInput)
    {
        this.movedFrom = input.readByte();
        if(this.movedFrom < 0)
        {
            throw new Error("Forbidden value (" + this.movedFrom + ") on element of MoveTaxCollectorPresetSpellMessage.movedFrom.");
        }
    }

    private _movedToFunc(input: ICustomDataInput)
    {
        this.movedTo = input.readByte();
        if(this.movedTo < 0)
        {
            throw new Error("Forbidden value (" + this.movedTo + ") on element of MoveTaxCollectorPresetSpellMessage.movedTo.");
        }
    }

}