import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HavenBagPackListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9897;

	public packIds: Array<number>;

    public constructor()
    {
        super();
        this.packIds = Array<number>();
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
        this.deserializeAs_HavenBagPackListMessage(input);
    }

    private deserializeAs_HavenBagPackListMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _packIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _packIdsLen; _i1++)
        {
            _val1 = input.readByte();
            this.packIds.push(_val1);
        }
    }

}