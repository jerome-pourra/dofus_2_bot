import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountEquipedErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5171;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public errorType: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountEquipedErrorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MountEquipedErrorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MountEquipedErrorMessage.endpointServer;
    }

    public initMountEquipedErrorMessage(errorType: number = 0): MountEquipedErrorMessage
    {
        this.errorType = errorType;
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
        this.serializeAs_MountEquipedErrorMessage(output);
    }

    public serializeAs_MountEquipedErrorMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.errorType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountEquipedErrorMessage(input);
    }

    private deserializeAs_MountEquipedErrorMessage(input: ICustomDataInput)
    {
        this._errorTypeFunc(input);
    }

    private _errorTypeFunc(input: ICustomDataInput)
    {
        this.errorType = input.readByte();
        if(this.errorType < 0)
        {
            throw new Error("Forbidden value (" + this.errorType + ") on element of MountEquipedErrorMessage.errorType.");
        }
    }

}