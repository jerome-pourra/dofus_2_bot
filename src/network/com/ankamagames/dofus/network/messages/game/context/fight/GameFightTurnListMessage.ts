import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightTurnListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1243;

	public ids: Array<number>;
	public deadsIds: Array<number>;

    public constructor()
    {
        super();
        this.ids = Array<number>();
        this.deadsIds = Array<number>();
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
        this.deserializeAs_GameFightTurnListMessage(input);
    }

    private deserializeAs_GameFightTurnListMessage(input: ICustomDataInput)
    {
        let _val1: number = NaN;
        let _val2: number = NaN;
        let _idsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _idsLen; _i1++)
        {
            _val1 = Number(input.readDouble());
            if(_val1 < -9007199254740992 || _val1 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of ids.");
            }
            this.ids.push(_val1);
        }
        let _deadsIdsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _deadsIdsLen; _i2++)
        {
            _val2 = Number(input.readDouble());
            if(_val2 < -9007199254740992 || _val2 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of deadsIds.");
            }
            this.deadsIds.push(_val2);
        }
    }

}