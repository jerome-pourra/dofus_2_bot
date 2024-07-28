import { AccountTagInformation } from "./../../../types/common/AccountTagInformation";
import { AbstractSocialGroupInfos } from "./../../../types/game/social/AbstractSocialGroupInfos";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";

export class BasicWhoIsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8673;

	public self: boolean = false;
	public position: number;
	public accountTag: AccountTagInformation;
	public accountId: number = 0;
	public playerName: string = "";
	public playerId: number = 0;
	public areaId: number = 0;
	public serverId: number = 0;
	public originServerId: number = 0;
	public socialGroups: Array<AbstractSocialGroupInfos>;
	public verbose: boolean = false;
	public playerState: number = 99;

    public constructor()
    {
        super();
        this.accountTag = new AccountTagInformation();
        this.socialGroups = Array<AbstractSocialGroupInfos>();
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
        this.deserializeAs_BasicWhoIsMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.self = BooleanByteWrapper.getFlag(_box0,0);
        this.verbose = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_BasicWhoIsMessage(input: ICustomDataInput)
    {
        let _id10: number = 0;
        let _item10: AbstractSocialGroupInfos;
        this.deserializeByteBoxes(input);
        this._positionFunc(input);
        this.accountTag = new AccountTagInformation();
        this.accountTag.deserialize(input);
        this._accountIdFunc(input);
        this._playerNameFunc(input);
        this._playerIdFunc(input);
        this._areaIdFunc(input);
        this._serverIdFunc(input);
        this._originServerIdFunc(input);
        let _socialGroupsLen: number = input.readUnsignedShort();
        for(let _i10: number = 0; _i10 < _socialGroupsLen; _i10++)
        {
            _id10 = input.readUnsignedShort();
            _item10 = ProtocolTypeManager.getInstance(AbstractSocialGroupInfos,_id10);
            _item10.deserialize(input);
            this.socialGroups.push(_item10);
        }
        this._playerStateFunc(input);
    }

    private _positionFunc(input: ICustomDataInput)
    {
        this.position = input.readByte();
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of BasicWhoIsMessage.accountId.");
        }
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of BasicWhoIsMessage.playerId.");
        }
    }

    private _areaIdFunc(input: ICustomDataInput)
    {
        this.areaId = input.readShort();
    }

    private _serverIdFunc(input: ICustomDataInput)
    {
        this.serverId = input.readShort();
    }

    private _originServerIdFunc(input: ICustomDataInput)
    {
        this.originServerId = input.readShort();
    }

    private _playerStateFunc(input: ICustomDataInput)
    {
        this.playerState = input.readByte();
        if(this.playerState < 0)
        {
            throw new Error("Forbidden value (" + this.playerState + ") on element of BasicWhoIsMessage.playerState.");
        }
    }

}