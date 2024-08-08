import { MapCoordinates } from "./../../../../types/game/context/MapCoordinates";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { CompassUpdateMessage } from "./CompassUpdateMessage";

export class CompassUpdatePvpSeekMessage extends CompassUpdateMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4778;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public memberId: number = 0;
	public memberName: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CompassUpdatePvpSeekMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CompassUpdatePvpSeekMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CompassUpdatePvpSeekMessage.endpointServer;
    }

    public initCompassUpdatePvpSeekMessage(type: number = 0, coords: MapCoordinates = null, memberId: number = 0, memberName: string = ""): CompassUpdatePvpSeekMessage
    {
        super.initCompassUpdateMessage(type,coords);
        this.memberId = memberId;
        this.memberName = memberName;
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
        this.serializeAs_CompassUpdatePvpSeekMessage(output);
    }

    public serializeAs_CompassUpdatePvpSeekMessage(output: ICustomDataOutput)
    {
        super.serializeAs_CompassUpdateMessage(output);
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
        }
        output.writeVarLong(this.memberId);
        output.writeUTF(this.memberName);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CompassUpdatePvpSeekMessage(input);
    }

    private deserializeAs_CompassUpdatePvpSeekMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._memberIdFunc(input);
        this._memberNameFunc(input);
    }

    private _memberIdFunc(input: ICustomDataInput)
    {
        this.memberId = input.readVarUhLong();
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element of CompassUpdatePvpSeekMessage.memberId.");
        }
    }

    private _memberNameFunc(input: ICustomDataInput)
    {
        this.memberName = input.readUTF();
    }

}