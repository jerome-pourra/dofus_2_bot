import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildApplicationPresenceMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9885;

	public isApplication: boolean = false;

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
        this.deserializeAs_GuildApplicationPresenceMessage(input);
    }

    private deserializeAs_GuildApplicationPresenceMessage(input: ICustomDataInput)
    {
        this._isApplicationFunc(input);
    }

    private _isApplicationFunc(input: ICustomDataInput)
    {
        this.isApplication = input.readBoolean();
    }

}