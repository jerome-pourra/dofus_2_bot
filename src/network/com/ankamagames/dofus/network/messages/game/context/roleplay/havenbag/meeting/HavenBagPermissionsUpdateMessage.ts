import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class HavenBagPermissionsUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7957;

	public permissions: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HavenBagPermissionsUpdateMessage(input);
    }

    private deserializeAs_HavenBagPermissionsUpdateMessage(input: ICustomDataInput)
    {
        this._permissionsFunc(input);
    }

    private _permissionsFunc(input: ICustomDataInput)
    {
        this.permissions = input.readInt();
        if(this.permissions < 0)
        {
            throw new Error("Forbidden value (" + this.permissions + ") on element of HavenBagPermissionsUpdateMessage.permissions.");
        }
    }

}