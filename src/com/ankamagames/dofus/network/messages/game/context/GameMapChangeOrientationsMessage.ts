import { ActorOrientation } from "./../../../types/game/context/ActorOrientation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameMapChangeOrientationsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3256;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public orientations: Array<ActorOrientation>;

    public constructor()
    {
        super();
        this.orientations = Array<ActorOrientation>();
    }

    public getMessageId()
    {
        return GameMapChangeOrientationsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameMapChangeOrientationsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameMapChangeOrientationsMessage.endpointServer;
    }

    public initGameMapChangeOrientationsMessage(orientations: Array<ActorOrientation> = null): GameMapChangeOrientationsMessage
    {
        this.orientations = orientations;
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
        this.serializeAs_GameMapChangeOrientationsMessage(output);
    }

    public serializeAs_GameMapChangeOrientationsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.orientations.length);
        for(var _i1: number = 0; _i1 < this.orientations.length; _i1++)
        {
            (this.orientations[_i1] as ActorOrientation).serializeAs_ActorOrientation(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameMapChangeOrientationsMessage(input);
    }

    private deserializeAs_GameMapChangeOrientationsMessage(input: ICustomDataInput)
    {
        let _item1: ActorOrientation;
        let _orientationsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _orientationsLen; _i1++)
        {
            _item1 = new ActorOrientation();
            _item1.deserialize(input);
            this.orientations.push(_item1);
        }
    }

}