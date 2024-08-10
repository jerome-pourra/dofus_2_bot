import { CharacterMinimalInformations } from "./../../../../../../types/game/character/CharacterMinimalInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachKickResponseMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5018;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public target: CharacterMinimalInformations;
	public kicked: boolean = false;

    public constructor()
    {
        super();
        this.target = new CharacterMinimalInformations();
    }

    public getMessageId()
    {
        return BreachKickResponseMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BreachKickResponseMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BreachKickResponseMessage.endpointServer;
    }

    public initBreachKickResponseMessage(target: CharacterMinimalInformations = null, kicked: boolean = false): BreachKickResponseMessage
    {
        this.target = target;
        this.kicked = kicked;
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
        this.serializeAs_BreachKickResponseMessage(output);
    }

    public serializeAs_BreachKickResponseMessage(output: ICustomDataOutput)
    {
        this.target.serializeAs_CharacterMinimalInformations(output);
        output.writeBoolean(this.kicked);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachKickResponseMessage(input);
    }

    private deserializeAs_BreachKickResponseMessage(input: ICustomDataInput)
    {
        this.target = new CharacterMinimalInformations();
        this.target.deserialize(input);
        this._kickedFunc(input);
    }

    private _kickedFunc(input: ICustomDataInput)
    {
        this.kicked = input.readBoolean();
    }

}