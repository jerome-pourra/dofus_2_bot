import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TeleportBuddiesRequestedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2454;

	public dungeonId: number = 0;
	public inviterId: number = 0;
	public invalidBuddiesIds: Array<number>;

    public constructor()
    {
        super();
        this.invalidBuddiesIds = Array<number>();
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
        this.deserializeAs_TeleportBuddiesRequestedMessage(input);
    }

    private deserializeAs_TeleportBuddiesRequestedMessage(input: ICustomDataInput)
    {
        let _val3: number = NaN;
        this._dungeonIdFunc(input);
        this._inviterIdFunc(input);
        let _invalidBuddiesIdsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _invalidBuddiesIdsLen; _i3++)
        {
            _val3 = input.readVarUhLong();
            if(_val3 < 0 || _val3 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val3 + ") on elements of invalidBuddiesIds.");
            }
            this.invalidBuddiesIds.push(_val3);
        }
    }

    private _dungeonIdFunc(input: ICustomDataInput)
    {
        this.dungeonId = input.readVarUhShort();
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element of TeleportBuddiesRequestedMessage.dungeonId.");
        }
    }

    private _inviterIdFunc(input: ICustomDataInput)
    {
        this.inviterId = input.readVarUhLong();
        if(this.inviterId < 0 || this.inviterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.inviterId + ") on element of TeleportBuddiesRequestedMessage.inviterId.");
        }
    }

}