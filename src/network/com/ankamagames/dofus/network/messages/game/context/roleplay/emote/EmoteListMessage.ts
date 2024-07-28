import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class EmoteListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6038;

	public emoteIds: Array<number>;

    public constructor()
    {
        super();
        this.emoteIds = Array<number>();
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
        this.deserializeAs_EmoteListMessage(input);
    }

    private deserializeAs_EmoteListMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _emoteIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _emoteIdsLen; _i1++)
        {
            _val1 = input.readUnsignedShort();
            if(_val1 < 0 || _val1 > 65535)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of emoteIds.");
            }
            this.emoteIds.push(_val1);
        }
    }

}