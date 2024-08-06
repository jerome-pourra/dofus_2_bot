import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ChangeMapMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5242;

	public mapId: number = 0;
	public autopilot: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChangeMapMessage.protocolId;
    }

    public initChangeMapMessage(mapId: number = 0, autopilot: boolean = false): ChangeMapMessage
    {
        this.mapId = mapId;
        this.autopilot = autopilot;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ChangeMapMessage(output);
    }

    public serializeAs_ChangeMapMessage(output: ICustomDataOutput)
    {
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
        output.writeBoolean(this.autopilot);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChangeMapMessage(input);
    }

    private deserializeAs_ChangeMapMessage(input: ICustomDataInput)
    {
        this._mapIdFunc(input);
        this._autopilotFunc(input);
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of ChangeMapMessage.mapId.");
        }
    }

    private _autopilotFunc(input: ICustomDataInput)
    {
        this.autopilot = input.readBoolean();
    }

}