import { IdentifiedEntityDispositionInformations } from "./../../../types/game/context/IdentifiedEntityDispositionInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameEntitiesDispositionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7948;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public dispositions: Array<IdentifiedEntityDispositionInformations>;

    public constructor()
    {
        super();
        this.dispositions = Array<IdentifiedEntityDispositionInformations>();
    }

    public getMessageId()
    {
        return GameEntitiesDispositionMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameEntitiesDispositionMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameEntitiesDispositionMessage.endpointServer;
    }

    public initGameEntitiesDispositionMessage(dispositions: Array<IdentifiedEntityDispositionInformations> = null): GameEntitiesDispositionMessage
    {
        this.dispositions = dispositions;
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
        this.serializeAs_GameEntitiesDispositionMessage(output);
    }

    public serializeAs_GameEntitiesDispositionMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.dispositions.length);
        for(var _i1: number = 0; _i1 < this.dispositions.length; _i1++)
        {
            (this.dispositions[_i1] as IdentifiedEntityDispositionInformations).serializeAs_IdentifiedEntityDispositionInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameEntitiesDispositionMessage(input);
    }

    private deserializeAs_GameEntitiesDispositionMessage(input: ICustomDataInput)
    {
        let _item1: IdentifiedEntityDispositionInformations;
        let _dispositionsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _dispositionsLen; _i1++)
        {
            _item1 = new IdentifiedEntityDispositionInformations();
            _item1.deserialize(input);
            this.dispositions.push(_item1);
        }
    }

}