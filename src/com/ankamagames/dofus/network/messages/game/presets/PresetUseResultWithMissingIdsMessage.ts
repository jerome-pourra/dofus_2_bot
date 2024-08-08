import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { PresetUseResultMessage } from "./PresetUseResultMessage";

export class PresetUseResultWithMissingIdsMessage extends PresetUseResultMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5059;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public missingIds: Array<number>;

    public constructor()
    {
        super();
        this.missingIds = Array<number>();
    }

    public getMessageId()
    {
        return PresetUseResultWithMissingIdsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PresetUseResultWithMissingIdsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PresetUseResultWithMissingIdsMessage.endpointServer;
    }

    public initPresetUseResultWithMissingIdsMessage(presetId: number = 0, code: number = 3, missingIds: Array<number> = null): PresetUseResultWithMissingIdsMessage
    {
        super.initPresetUseResultMessage(presetId,code);
        this.missingIds = missingIds;
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
        this.serializeAs_PresetUseResultWithMissingIdsMessage(output);
    }

    public serializeAs_PresetUseResultWithMissingIdsMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PresetUseResultMessage(output);
        output.writeShort(this.missingIds.length);
        for(var _i1: number = 0; _i1 < this.missingIds.length; _i1++)
        {
            if(this.missingIds[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.missingIds[_i1] + ") on element 1 (starting at 1) of missingIds.");
            }
            output.writeVarShort(this.missingIds[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PresetUseResultWithMissingIdsMessage(input);
    }

    private deserializeAs_PresetUseResultWithMissingIdsMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        super.deserialize(input);
        let _missingIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _missingIdsLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of missingIds.");
            }
            this.missingIds.push(_val1);
        }
    }

}