import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountInformationRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 826;

	public id: number = 0;
	public time: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountInformationRequestMessage.protocolId;
    }

    public initMountInformationRequestMessage(id: number = 0, time: number = 0): MountInformationRequestMessage
    {
        this.id = id;
        this.time = time;
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
        this.serializeAs_MountInformationRequestMessage(output);
    }

    public serializeAs_MountInformationRequestMessage(output: ICustomDataOutput)
    {
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeDouble(this.id);
        if(this.time < -9007199254740992 || this.time > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.time + ") on element time.");
        }
        output.writeDouble(this.time);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountInformationRequestMessage(input);
    }

    private deserializeAs_MountInformationRequestMessage(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._timeFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readDouble();
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of MountInformationRequestMessage.id.");
        }
    }

    private _timeFunc(input: ICustomDataInput)
    {
        this.time = input.readDouble();
        if(this.time < -9007199254740992 || this.time > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.time + ") on element of MountInformationRequestMessage.time.");
        }
    }

}