import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class NotificationListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7443;

	public flags: Array<number>;

    public constructor()
    {
        super();
        this.flags = Array<number>();
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
        this.deserializeAs_NotificationListMessage(input);
    }

    private deserializeAs_NotificationListMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _flagsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _flagsLen; _i1++)
        {
            _val1 = input.readVarInt();
            this.flags.push(_val1);
        }
    }

}