import { SocialApplicationInformation } from "./../../../../types/game/social/application/SocialApplicationInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceListApplicationModifiedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3470;

	public apply: SocialApplicationInformation;
	public state: number = 0;
	public playerId: number = 0;

    public constructor()
    {
        super();
        this.apply = new SocialApplicationInformation();
    }

    public getMessageId()
    {
        return AllianceListApplicationModifiedMessage.protocolId;
    }

    public initAllianceListApplicationModifiedMessage(apply: SocialApplicationInformation = null, state: number = 0, playerId: number = 0): AllianceListApplicationModifiedMessage
    {
        this.apply = apply;
        this.state = state;
        this.playerId = playerId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AllianceListApplicationModifiedMessage(output);
    }

    public serializeAs_AllianceListApplicationModifiedMessage(output: ICustomDataOutput)
    {
        this.apply.serializeAs_SocialApplicationInformation(output);
        output.writeByte(this.state);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceListApplicationModifiedMessage(input);
    }

    private deserializeAs_AllianceListApplicationModifiedMessage(input: ICustomDataInput)
    {
        this.apply = new SocialApplicationInformation();
        this.apply.deserialize(input);
        this._stateFunc(input);
        this._playerIdFunc(input);
    }

    private _stateFunc(input: ICustomDataInput)
    {
        this.state = input.readByte();
        if(this.state < 0)
        {
            throw new Error("Forbidden value (" + this.state + ") on element of AllianceListApplicationModifiedMessage.state.");
        }
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of AllianceListApplicationModifiedMessage.playerId.");
        }
    }

}