import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightTackledMessage extends AbstractGameActionMessage
{

	public static readonly protocolId: number = 3805;

	public tacklersIds: Array<number>;

    public constructor()
    {
        super();
        this.tacklersIds = Array<number>();
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
        this.deserializeAs_GameActionFightTackledMessage(input);
    }

    private deserializeAs_GameActionFightTackledMessage(input: ICustomDataInput)
    {
        let _val1: number = NaN;
        super.deserialize(input);
        let _tacklersIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _tacklersIdsLen; _i1++)
        {
            _val1 = Number(input.readDouble());
            if(_val1 < -9007199254740992 || _val1 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of tacklersIds.");
            }
            this.tacklersIds.push(_val1);
        }
    }

}