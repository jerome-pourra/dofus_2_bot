import { PartyGuestInformations } from "./../../../../../types/game/context/roleplay/party/PartyGuestInformations";
import { PartyInvitationMemberInformations } from "./../../../../../types/game/context/roleplay/party/PartyInvitationMemberInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { PartyInvitationDetailsMessage } from "./PartyInvitationDetailsMessage";

export class PartyInvitationDungeonDetailsMessage extends PartyInvitationDetailsMessage
{

	public static readonly protocolId: number = 2367;

	public dungeonId: number = 0;
	public playersDungeonReady: Array<boolean>;

    public constructor()
    {
        super();
        this.playersDungeonReady = Array<boolean>();
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
        this.deserializeAs_PartyInvitationDungeonDetailsMessage(input);
    }

    private deserializeAs_PartyInvitationDungeonDetailsMessage(input: ICustomDataInput)
    {
        let _val2: boolean = false;
        super.deserialize(input);
        this._dungeonIdFunc(input);
        let _playersDungeonReadyLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _playersDungeonReadyLen; _i2++)
        {
            _val2 = Boolean(input.readBoolean());
            this.playersDungeonReady.push(_val2);
        }
    }

    private _dungeonIdFunc(input: ICustomDataInput)
    {
        this.dungeonId = input.readVarUhShort();
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element of PartyInvitationDungeonDetailsMessage.dungeonId.");
        }
    }

}