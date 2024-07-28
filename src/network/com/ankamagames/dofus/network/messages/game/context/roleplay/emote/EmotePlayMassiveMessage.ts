import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { EmotePlayAbstractMessage } from "./EmotePlayAbstractMessage";

export class EmotePlayMassiveMessage extends EmotePlayAbstractMessage
{

	public static readonly protocolId: number = 1886;

	public actorIds: Array<number>;

    public constructor()
    {
        super();
        this.actorIds = Array<number>();
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
        this.deserializeAs_EmotePlayMassiveMessage(input);
    }

    private deserializeAs_EmotePlayMassiveMessage(input: ICustomDataInput)
    {
        let _val1: number = NaN;
        super.deserialize(input);
        let _actorIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _actorIdsLen; _i1++)
        {
            _val1 = Number(input.readDouble());
            if(_val1 < -9007199254740992 || _val1 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of actorIds.");
            }
            this.actorIds.push(_val1);
        }
    }

}