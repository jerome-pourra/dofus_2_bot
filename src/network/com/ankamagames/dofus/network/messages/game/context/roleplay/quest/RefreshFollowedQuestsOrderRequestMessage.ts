import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class RefreshFollowedQuestsOrderRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3965;

	public quests: Array<number>;

    public constructor()
    {
        super();
        this.quests = Array<number>();
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
        this.deserializeAs_RefreshFollowedQuestsOrderRequestMessage(input);
    }

    private deserializeAs_RefreshFollowedQuestsOrderRequestMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _questsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _questsLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of quests.");
            }
            this.quests.push(_val1);
        }
    }

}