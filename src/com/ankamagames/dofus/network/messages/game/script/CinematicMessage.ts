import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class CinematicMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 991;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public cinematicId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CinematicMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CinematicMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CinematicMessage.endpointServer;
    }

    public initCinematicMessage(cinematicId: number = 0): CinematicMessage
    {
        this.cinematicId = cinematicId;
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
        this.serializeAs_CinematicMessage(output);
    }

    public serializeAs_CinematicMessage(output: ICustomDataOutput)
    {
        if(this.cinematicId < 0)
        {
            throw new Error("Forbidden value (" + this.cinematicId + ") on element cinematicId.");
        }
        output.writeVarShort(this.cinematicId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CinematicMessage(input);
    }

    private deserializeAs_CinematicMessage(input: ICustomDataInput)
    {
        this._cinematicIdFunc(input);
    }

    private _cinematicIdFunc(input: ICustomDataInput)
    {
        this.cinematicId = input.readVarUhShort();
        if(this.cinematicId < 0)
        {
            throw new Error("Forbidden value (" + this.cinematicId + ") on element of CinematicMessage.cinematicId.");
        }
    }

}