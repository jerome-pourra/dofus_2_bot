import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class EnabledChannelsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2625;

	public channels: Array<number>;
	public disallowed: Array<number>;

    public constructor()
    {
        super();
        this.channels = Array<number>();
        this.disallowed = Array<number>();
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
        this.deserializeAs_EnabledChannelsMessage(input);
    }

    private deserializeAs_EnabledChannelsMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _val2: number = 0;
        let _channelsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _channelsLen; _i1++)
        {
            _val1 = input.readByte();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of channels.");
            }
            this.channels.push(_val1);
        }
        let _disallowedLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _disallowedLen; _i2++)
        {
            _val2 = input.readByte();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of disallowed.");
            }
            this.disallowed.push(_val2);
        }
    }

}