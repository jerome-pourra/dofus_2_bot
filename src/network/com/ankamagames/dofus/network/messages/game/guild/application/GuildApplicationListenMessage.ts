import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildApplicationListenMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5367;

	public listen: boolean = false;

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
        this.deserializeAs_GuildApplicationListenMessage(input);
    }

    private deserializeAs_GuildApplicationListenMessage(input: ICustomDataInput)
    {
        this._listenFunc(input);
    }

    private _listenFunc(input: ICustomDataInput)
    {
        this.listen = input.readBoolean();
    }

}