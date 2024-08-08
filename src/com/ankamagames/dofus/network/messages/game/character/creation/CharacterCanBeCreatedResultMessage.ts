import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterCanBeCreatedResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7317;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public yesYouCan: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterCanBeCreatedResultMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CharacterCanBeCreatedResultMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CharacterCanBeCreatedResultMessage.endpointServer;
    }

    public initCharacterCanBeCreatedResultMessage(yesYouCan: boolean = false): CharacterCanBeCreatedResultMessage
    {
        this.yesYouCan = yesYouCan;
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
        this.serializeAs_CharacterCanBeCreatedResultMessage(output);
    }

    public serializeAs_CharacterCanBeCreatedResultMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.yesYouCan);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterCanBeCreatedResultMessage(input);
    }

    private deserializeAs_CharacterCanBeCreatedResultMessage(input: ICustomDataInput)
    {
        this._yesYouCanFunc(input);
    }

    private _yesYouCanFunc(input: ICustomDataInput)
    {
        this.yesYouCan = input.readBoolean();
    }

}