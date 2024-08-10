import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class HavenBagPermissionsUpdateRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 958;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public permissions: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HavenBagPermissionsUpdateRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return HavenBagPermissionsUpdateRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return HavenBagPermissionsUpdateRequestMessage.endpointServer;
    }

    public initHavenBagPermissionsUpdateRequestMessage(permissions: number = 0): HavenBagPermissionsUpdateRequestMessage
    {
        this.permissions = permissions;
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
        this.serializeAs_HavenBagPermissionsUpdateRequestMessage(output);
    }

    public serializeAs_HavenBagPermissionsUpdateRequestMessage(output: ICustomDataOutput)
    {
        if(this.permissions < 0)
        {
            throw new Error("Forbidden value (" + this.permissions + ") on element permissions.");
        }
        output.writeInt(this.permissions);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HavenBagPermissionsUpdateRequestMessage(input);
    }

    private deserializeAs_HavenBagPermissionsUpdateRequestMessage(input: ICustomDataInput)
    {
        this._permissionsFunc(input);
    }

    private _permissionsFunc(input: ICustomDataInput)
    {
        this.permissions = input.readInt();
        if(this.permissions < 0)
        {
            throw new Error("Forbidden value (" + this.permissions + ") on element of HavenBagPermissionsUpdateRequestMessage.permissions.");
        }
    }

}